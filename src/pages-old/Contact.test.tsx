import { cleanup, fireEvent, render, screen, waitFor, within } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import Contact from "./Contact";
import { buildContactMessage, contactMessageLinks, whatsappContactUrl } from "@/lib/contact-enquiry";

vi.mock("@/components/layout/Navbar", () => ({ default: () => null }));
vi.mock("@/components/layout/Footer", () => ({ default: () => null }));
vi.mock("framer-motion", () => ({ motion: { div: ({ children }: { children: React.ReactNode }) => <div>{children}</div> } }));

afterEach(() => { cleanup(); vi.restoreAllMocks(); });

const preview = () => screen.getByLabelText("Your message") as HTMLTextAreaElement;
const choose = (group: string, choice: string) => fireEvent.click(within(screen.getByRole("group", { name: `${group} (optional)` })).getByRole("button", { name: choice }));

describe("optional contact enquiry", () => {
  it("allows WhatsApp contact without any selections and leaves direct chat independent of the brief", () => {
    const open = vi.spyOn(window, "open").mockReturnValue(null);
    render(<Contact />);
    const direct = screen.getByRole("link", { name: /Skip the details/ });
    expect(direct).toHaveAttribute("href", whatsappContactUrl);
    expect(preview().value).toBe("Hi PV Labs, I'd like to discuss a project.");
    expect(screen.queryByRole("button", { name: "Clear all details" })).not.toBeInTheDocument();
    fireEvent.click(screen.getByRole("link", { name: "Continue on WhatsApp" }));
    expect(open).toHaveBeenCalledWith(contactMessageLinks(preview().value).whatsapp, "_blank", "noopener,noreferrer");
    choose("Project type", "Listing Images");
    expect(direct).toHaveAttribute("href", whatsappContactUrl);
  });

  it("carries multiple services and marketplaces plus extra details into the actual WhatsApp message and email", () => {
    const open = vi.spyOn(window, "open").mockReturnValue(null);
    render(<Contact />);
    choose("Project type", "Listing Images");
    choose("Project type", "A+ Content");
    choose("Marketplace", "Amazon");
    choose("Marketplace", "Flipkart");
    choose("Number of SKUs", "2–10 SKUs");
    choose("Budget range", "Under ₹5,000");
    fireEvent.change(screen.getByLabelText(/Listing link or extra details/), { target: { value: "https://example.com/item?a=1&b=2 — Café + jewellery" } });
    expect(preview().value).toContain("Project type: A+ Content, Listing Images");
    expect(preview().value).toContain("Marketplace: Amazon, Flipkart");
    expect(preview().value).toContain("Budget range: Under ₹5,000");
    expect(preview().value).not.toContain("Category:");
    expect(screen.getByRole("button", { name: "A+ Content" })).toHaveAttribute("aria-pressed", "true");
    fireEvent.click(screen.getByRole("link", { name: "Continue on WhatsApp" }));
    const sentUrl = new URL(open.mock.calls[0][0] as string);
    expect(sentUrl.pathname).toBe("/917417791003");
    expect(sentUrl.searchParams.get("text")).toBe(preview().value);
    // The DOM link stays free of the enquiry body for outbound-link analytics.
    expect(screen.getByRole("link", { name: "Continue on WhatsApp" })).toHaveAttribute("href", whatsappContactUrl);
    const email = new URL(screen.getByRole("link", { name: "Continue by email" }).getAttribute("href")!);
    expect(email.pathname).toBe("growth@pvlabs.ai");
    expect(email.searchParams.get("body")).toBe(preview().value);
  });

  it("replaces single choices and lets visitors deselect every choice", () => {
    render(<Contact />);
    choose("Number of SKUs", "1 SKU");
    choose("Number of SKUs", "50+ SKUs");
    expect(screen.getByRole("button", { name: "1 SKU" })).toHaveAttribute("aria-pressed", "false");
    expect(preview().value).toContain("Number of SKUs: 50+ SKUs");
    choose("Number of SKUs", "50+ SKUs");
    expect(preview().value).not.toContain("Number of SKUs:");
  });

  it("does not combine 'not sure' or 'multiple marketplaces' with conflicting specific choices", () => {
    render(<Contact />);
    choose("Project type", "A+ Content");
    choose("Project type", "Not sure yet");
    expect(preview().value).toContain("Project type: Not sure yet");
    expect(screen.getByRole("button", { name: "A+ Content" })).toHaveAttribute("aria-pressed", "false");
    choose("Project type", "Listing Images");
    expect(preview().value).not.toContain("Not sure yet");
    choose("Marketplace", "Amazon");
    choose("Marketplace", "Multiple marketplaces");
    expect(preview().value).toContain("Marketplace: Multiple marketplaces");
    choose("Marketplace", "Flipkart");
    expect(preview().value).toContain("Marketplace: Flipkart");
    expect(preview().value).not.toContain("Multiple marketplaces");
  });

  it("clears all selections and free text together", () => {
    render(<Contact />);
    choose("Main problem", "Low conversion");
    fireEvent.change(screen.getByLabelText(/Listing link or extra details/), { target: { value: "New launch" } });
    fireEvent.click(screen.getByRole("button", { name: "Clear all details" }));
    expect(preview().value).toBe(buildContactMessage({}));
    expect(screen.getByLabelText(/Listing link or extra details/)).toHaveValue("");
    expect(screen.getByRole("button", { name: "Low conversion" })).toHaveAttribute("aria-pressed", "false");
  });

  it("copies the displayed message for visitors without a working chat or email app", async () => {
    const writeText = vi.fn().mockResolvedValue(undefined);
    vi.stubGlobal("navigator", { clipboard: { writeText } });
    render(<Contact />);
    choose("Category", "Home / Kitchen");
    fireEvent.click(screen.getByRole("button", { name: "Copy message" }));
    await waitFor(() => expect(screen.getByRole("status")).toHaveTextContent("Message copied."));
    expect(writeText).toHaveBeenCalledWith(preview().value);
    vi.unstubAllGlobals();
  });

  it("gives a manual-copy fallback when clipboard access is unavailable", async () => {
    vi.stubGlobal("navigator", {});
    render(<Contact />);
    fireEvent.click(screen.getByRole("button", { name: "Copy message" }));
    await waitFor(() => expect(screen.getByRole("status")).toHaveTextContent("Select and copy the message below."));
    expect(preview()).toHaveAttribute("readonly");
    vi.unstubAllGlobals();
  });
});
