"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ParallaxImageProps {
  src: string;
  /** Opcional: fuente WebP para navegadores modernos (reduce ~35% peso). */
  srcWebp?: string;
  alt: string;
  className?: string;
  speed?: number;
  loading?: "lazy" | "eager";
}

export function ParallaxImage({
  src,
  srcWebp,
  alt,
  className = "",
  speed = 0.5,
  loading = "lazy",
}: ParallaxImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const image = imageRef.current;
    if (!container || !image) return;

    const ctx = gsap.context(() => {
      gsap.to(image, {
        yPercent: speed * 30,
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: "top bottom",
          end: "bottom top",
          scrub: 1
        }
      });
    }, container);

    return () => ctx.revert();
  }, [speed]);

  return (
    <div ref={containerRef} className={`overflow-hidden ${className}`}>
      <picture>
        {srcWebp && <source srcSet={srcWebp} type="image/webp" />}
        <img
          ref={imageRef}
          src={src}
          alt={alt}
          loading={loading}
          decoding="async"
          className="w-full h-full object-cover"
          style={{ willChange: "transform" }}
        />
      </picture>
    </div>
  );
}
