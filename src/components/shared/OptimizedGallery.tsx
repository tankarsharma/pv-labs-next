"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { useInView } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay, Pagination } from "swiper/modules";
import type { Swiper as SwiperInstance } from "swiper/types";
import "swiper/css";
import "swiper/css/pagination";

type Props = {
  images: Array<string | { src: string }>;
  title: string;
  sizes: string;
  delay?: number;
  imageClassName?: string;
};

export default function OptimizedGallery({
  images,
  title,
  sizes,
  delay = 2000,
  imageClassName = "object-cover",
}: Props) {
  const container = useRef<HTMLDivElement>(null);
  const swiper = useRef<SwiperInstance | null>(null);
  // Keep a static first image until the gallery approaches the screen.
  const isNear = useInView(container, { once: true, margin: "300px" });
  const isVisible = useInView(container);

  useEffect(() => {
    const instance = swiper.current;
    if (!instance || instance.destroyed) return;
    if (isVisible) instance.autoplay.start();
    else instance.autoplay.stop();
  }, [isVisible, isNear]);

  const renderImage = (image: string | { src: string }, index: number) => (
    <Image
      src={typeof image === "string" ? image : image.src}
      alt={`${title} - ${index + 1}`}
      fill
      sizes={sizes}
      loading="lazy"
      className={imageClassName}
    />
  );

  return (
    <div ref={container} className="relative w-full h-full" aria-label={`${title} image gallery`}>
      {images.length > 0 && (!isNear || images.length === 1 ? (
        renderImage(images[0], 0)
      ) : (
        <Swiper
          modules={[A11y, Autoplay, Pagination]}
          slidesPerView={1}
          spaceBetween={0}
          autoplay={{ delay, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop
          onSwiper={(instance) => {
            swiper.current = instance;
            if (!isVisible) instance.autoplay.stop();
          }}
          className="w-full h-full"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index} className="relative w-full h-full">
              {({ isActive, isPrev, isNext }) => (
                // Hidden slides have no image request until they are needed.
                isActive || isPrev || isNext ? renderImage(image, index) : null
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      ))}
    </div>
  );
}
