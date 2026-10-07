import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import type { ReactNode } from "react";

const state = vi.hoisted(() => ({
  near: false,
  visible: false,
  active: 0,
  start: vi.fn(),
  stop: vi.fn(),
}));

vi.mock("framer-motion", () => ({
  useInView: (_ref: unknown, options?: { once?: boolean }) => options?.once ? state.near : state.visible,
}));
vi.mock("next/image", () => ({
  default: ({ fill: _fill, ...props }: { fill?: boolean }) => <img {...props} />,
}));
vi.mock("swiper/react", () => ({
  Swiper: ({ children, onSwiper }: { children: ReactNode; onSwiper: (instance: unknown) => void }) => {
    onSwiper({ destroyed: false, autoplay: { start: state.start, stop: state.stop } });
    return <div data-testid="carousel">{children}</div>;
  },
  SwiperSlide: ({ children }: { children: (flags: object) => ReactNode }) => {
    const index = slideIndex++;
    return <div>{children({
      isActive: index === state.active,
      isPrev: index === (state.active + 7) % 8,
      isNext: index === (state.active + 1) % 8,
    })}</div>;
  },
}));

import OptimizedGallery from "./OptimizedGallery";

let slideIndex = 0;
const images = Array.from({ length: 8 }, (_, index) => ({ src: `/image-${index}.png` }));
const gallery = <OptimizedGallery images={images} title="Listing images" sizes="50vw" />;

beforeEach(() => {
  state.near = false;
  state.visible = false;
  state.active = 0;
  slideIndex = 0;
  vi.clearAllMocks();
});
afterEach(cleanup);

describe("gallery loading", () => {
  it("keeps a lazy first image available before the gallery reaches the screen", () => {
    render(gallery);
    expect(screen.queryByTestId("carousel")).not.toBeInTheDocument();
    expect(screen.getAllByRole("img")).toHaveLength(1);
    expect(screen.getByRole("img")).toHaveAttribute("loading", "lazy");
    expect(screen.getByRole("img")).toHaveAttribute("sizes", "50vw");
  });

  it("loads only the current and adjacent slides when the gallery approaches", () => {
    state.near = true;
    render(gallery);
    expect(screen.getAllByRole("img").map(img => img.getAttribute("src"))).toEqual([
      "/image-0.png", "/image-1.png", "/image-7.png",
    ]);
    expect(state.stop).toHaveBeenCalled();
    expect(state.start).not.toHaveBeenCalled();
  });

  it("loads the next images as the active slide changes, including loop neighbours", () => {
    state.near = true;
    state.visible = true;
    state.active = 7;
    render(gallery);
    expect(screen.getAllByRole("img").map(img => img.getAttribute("src"))).toEqual([
      "/image-0.png", "/image-6.png", "/image-7.png",
    ]);
    expect(state.start).toHaveBeenCalled();
  });

  it("pauses autoplay when scrolled away and resumes when visible", () => {
    state.near = true;
    state.visible = true;
    const { rerender } = render(gallery);
    state.stop.mockClear();
    state.visible = false;
    slideIndex = 0;
    rerender(<OptimizedGallery images={images} title="Listing images" sizes="50vw" />);
    expect(state.stop).toHaveBeenCalled();
    state.start.mockClear();
    state.visible = true;
    slideIndex = 0;
    rerender(<OptimizedGallery images={images} title="Listing images" sizes="50vw" />);
    expect(state.start).toHaveBeenCalled();
  });

  it("does not create a carousel for a single image", () => {
    state.near = true;
    render(<OptimizedGallery images={["/single.png"]} title="Single image" sizes="100vw" />);
    expect(screen.getAllByRole("img")).toHaveLength(1);
    expect(screen.queryByTestId("carousel")).not.toBeInTheDocument();
  });
});
