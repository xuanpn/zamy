"use client";

import { useState, useCallback, useEffect } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { FadeImage, fmt } from "./Shared";

// Admin-configurable: each banner has its own caption + CTA → can link to a collection or a specific product
const heroSlides = [
  {
    image: "/Banners/3.jpg",
    eyebrow: "Whisper Bloom — Summer '26",
    title: "Nhẹ nhàng, như một buổi sớm.",
    cta: "Khám phá BST",
    href: "#collections",
  },
  {
    image: "/Banners/1.JPG",
    eyebrow: "Ưu đãi mùa hè",
    title: "Chạm hè — deal tới 50%.",
    cta: "Mua ngay",
    href: "#sale",
  },
  {
    image: "/Banners/2.JPG",
    eyebrow: "Bộ sưu tập mới",
    title: "Đầy đặn. Dịu dàng.",
    cta: "Khám phá",
    href: "#collections",
  },
];

const featured = [
  { badge: "Mẫu mới", name: "Đầm Linen Mira", variant: "Bé sữa", price: 689000, image: "/products/4.jpg" },
  { badge: "Hot", name: "Đầm Hoa Nhí Vintage", variant: "Hồng nhạt", price: 455000, image: "/products/3.jpg" },
  { badge: "Bán chạy", name: "Áo Ren Thêu Nơ", variant: "Đen", price: 495000, image: "/products/1.jpg" },
  { badge: "Đang sale", name: "Đầm Xếp Ly Cổ Thuyền", variant: "Nude", price: 585000, image: "/products/2.jpg" },
];

export function Hero() {
  const [slide, setSlide] = useState(0);
  const [featIdx, setFeatIdx] = useState(0);
  const [hovering, setHovering] = useState(false);

  const next = useCallback(() => setSlide((s) => (s + 1) % heroSlides.length), []);
  const prev = useCallback(() => setSlide((s) => (s - 1 + heroSlides.length) % heroSlides.length), []);

  useEffect(() => {
    const id = setInterval(next, 6500);
    return () => clearInterval(id);
  }, [next]);

  useEffect(() => {
    const interval = hovering ? 1500 : 3200;
    const id = setInterval(() => setFeatIdx((i) => (i + 1) % featured.length), interval);
    return () => clearInterval(id);
  }, [hovering]);

  return (
    <section className="relative w-full aspect-[21/9] max-h-[640px] overflow-hidden bg-petal">
      {heroSlides.map((s, i) => (
        <div key={i} className={`hero-slide absolute inset-0 ${i === slide ? "active z-10" : "z-0"}`}>
          <FadeImage src={s.image} alt={s.title} fill sizes="100vw" className="object-cover object-center" priority={i === 0} />
        </div>
      ))}

      {/* Soft bottom gradient for legibility */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/45 via-transparent to-transparent pointer-events-none" />

      {/* Bottom-aligned strip: caption left, badge right */}
      <div className="absolute inset-x-0 bottom-0 z-20">
        <div className="max-w-[1320px] mx-auto px-5 lg:px-10 pb-8 lg:pb-10 flex items-end justify-between gap-6">
          {/* Caption bottom-left */}
          {heroSlides.map((s, i) => (
            <div
              key={i}
              className={`text-white max-w-[460px] transition-all duration-700 ${
                i === slide
                  ? "opacity-100 translate-y-0 relative"
                  : "opacity-0 translate-y-3 absolute pointer-events-none"
              }`}
            >
              <p className="text-[10px] tracking-[0.4em] uppercase text-white/85 mb-3 font-medium" style={{ textShadow: "0 1px 6px rgba(0,0,0,0.4)" }}>
                {s.eyebrow}
              </p>
              <h1 className="font-display italic text-[26px] sm:text-3xl lg:text-[40px] mb-5 leading-[1.15]" style={{ textShadow: "0 2px 14px rgba(0,0,0,0.25)" }}>
                {s.title}
              </h1>
              <a
                href={s.href}
                className="inline-flex items-center gap-2.5 text-[10px] tracking-[0.3em] uppercase font-medium text-white border-b border-white/65 hover:text-peony hover:border-peony pb-1.5 transition-colors"
              >
                {s.cta} <ArrowRight size={11} />
              </a>
            </div>
          ))}

          {/* Slim featured badge bottom-right */}
          <a
            href="#new"
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
            className="group hidden lg:flex items-center gap-3 self-end bg-white/85 backdrop-blur-md rounded-sm py-2 pl-2 pr-4 hover:bg-white hover:shadow-2xl shadow-lg transition-all duration-500 w-[270px] relative overflow-hidden border border-white/40"
          >
            {/* Shimmer */}
            <span className="absolute inset-y-0 -left-1/3 w-1/3 bg-gradient-to-r from-transparent via-white/50 to-transparent skew-x-[-20deg] -translate-x-full group-hover:translate-x-[500%] transition-transform duration-[1100ms] pointer-events-none" />

            {/* Image stack */}
            <div className="relative w-12 h-14 shrink-0 overflow-hidden rounded-sm bg-petal">
              {featured.map((f, i) => (
                <div
                  key={i}
                  className={`absolute inset-0 transition-all duration-700 ease-out ${
                    i === featIdx ? "opacity-100 scale-100" : "opacity-0 scale-105"
                  }`}
                >
                  <FadeImage src={f.image} alt={f.name} fill sizes="48px" className="object-cover" />
                </div>
              ))}
            </div>

            {/* Info stack */}
            <div className="relative flex-1 min-w-0 h-[52px]">
              {featured.map((f, i) => (
                <div
                  key={i}
                  className={`absolute inset-0 transition-all duration-500 ${
                    i === featIdx ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1 pointer-events-none"
                  }`}
                >
                  <p className="text-[9px] tracking-[0.2em] uppercase text-peony mb-0.5 font-medium">{f.badge}</p>
                  <p className="text-[12px] font-medium text-charcoal leading-tight truncate">{f.name}</p>
                  <p className="text-[12px] text-peony font-semibold mt-0.5">{fmt(f.price)}</p>
                </div>
              ))}
            </div>

            {/* Dots */}
            <div className="absolute bottom-1 right-3 flex gap-1">
              {featured.map((_, i) => (
                <span
                  key={i}
                  className={`h-[2px] rounded-full transition-all duration-500 ${
                    i === featIdx ? "w-3 bg-peony" : "w-1 bg-peony/25"
                  }`}
                />
              ))}
            </div>
          </a>
        </div>
      </div>

      {/* Slide controls — minimal */}
      <button onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-9 h-9 bg-white/35 hover:bg-white/95 backdrop-blur-sm flex items-center justify-center text-white hover:text-charcoal transition-colors rounded-full" aria-label="Trước">
        <ChevronLeft size={16} />
      </button>
      <button onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-9 h-9 bg-white/35 hover:bg-white/95 backdrop-blur-sm flex items-center justify-center text-white hover:text-charcoal transition-colors rounded-full" aria-label="Tiếp">
        <ChevronRight size={16} />
      </button>

      {/* Dot indicator top-right */}
      <div className="absolute top-5 right-5 z-30 flex gap-2">
        {heroSlides.map((_, i) => (
          <button key={i} onClick={() => setSlide(i)} className={`h-1 rounded-full transition-all ${i === slide ? "bg-white w-6" : "bg-white/40 w-1"}`} aria-label={`Slide ${i + 1}`} />
        ))}
      </div>
    </section>
  );
}
