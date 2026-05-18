"use client";

import { useState, useCallback, useEffect } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { FadeImage, fmt } from "./Shared";

const heroSlides = [
  { image: "/Banners/3.jpg" },
  { image: "/Banners/1.JPG" },
  { image: "/Banners/2.JPG" },
];

const featured = [
  { badge: "Mẫu mới", name: "Đầm linen Mira", variant: "Bé sữa", price: 689000, image: "/products/4.jpg" },
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
    const id = setInterval(next, 6000);
    return () => clearInterval(id);
  }, [next]);

  // Auto-cycle featured badge — faster when hovering
  useEffect(() => {
    const interval = hovering ? 1500 : 3200;
    const id = setInterval(() => setFeatIdx((i) => (i + 1) % featured.length), interval);
    return () => clearInterval(id);
  }, [hovering]);

  return (
    <section className="relative w-full aspect-[21/9] max-h-[640px] overflow-hidden bg-petal">
      {heroSlides.map((s, i) => (
        <div key={i} className={`hero-slide absolute inset-0 ${i === slide ? "active z-10" : "z-0"}`}>
          <FadeImage src={s.image} alt={`Slide ${i + 1}`} fill sizes="100vw" className="object-cover object-center" priority={i === 0} />
        </div>
      ))}

      {/* Gradient veil */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/35 via-black/10 to-transparent" />

      {/* Overlay text */}
      <div className="absolute inset-0 z-20 flex items-center">
        <div className="max-w-[1280px] mx-auto w-full px-5 lg:px-10 grid lg:grid-cols-2 items-center gap-8">
          <div className="text-white max-w-xl">
            <p className="font-serif text-white/90 text-xs sm:text-sm tracking-[0.45em] uppercase mb-4" style={{ textShadow: "0 1px 8px rgba(0,0,0,0.3)" }}>New Collection</p>
            <h1 className="font-display text-white text-4xl sm:text-5xl lg:text-[64px] leading-[1.05] mb-5 italic" style={{ textShadow: "0 2px 24px rgba(0,0,0,0.2)" }}>
              Nhẹ nhàng,<br/>như một buổi sớm.
            </h1>
            <p className="font-body text-white/85 text-[14px] sm:text-[15px] leading-relaxed mb-8 max-w-md" style={{ textShadow: "0 1px 8px rgba(0,0,0,0.25)" }}>
              Những thiết kế tinh tế cho ngày làm việc — tạo nên từ chất liệu thoáng mát và đường cắt may tôn dáng người phụ nữ thành thị.
            </p>
            <a href="#new" className="inline-flex items-center gap-3 bg-white text-charcoal text-[10px] sm:text-[11px] tracking-[0.28em] uppercase px-9 py-3.5 hover:bg-peony hover:text-white transition-all font-medium">
              Khám phá BST <ArrowRight size={14} />
            </a>
          </div>

          {/* Floating product badge — auto-cycles through featured items */}
          <a
            href="#new"
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
            className="group hidden lg:flex items-center gap-4 self-end mb-12 ml-auto bg-white/95 backdrop-blur-sm rounded-sm p-3 pr-5 shadow-xl hover:shadow-2xl hover:scale-[1.03] transition-all duration-500 w-[290px] relative overflow-hidden"
          >
            {/* subtle shimmer line on hover */}
            <span className="absolute inset-y-0 -left-1/3 w-1/3 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-20deg] -translate-x-full group-hover:translate-x-[400%] transition-transform duration-1000 pointer-events-none" />

            {/* Image stack — fades between products */}
            <div className="relative w-16 h-20 shrink-0 overflow-hidden rounded-sm bg-petal">
              {featured.map((f, i) => (
                <div
                  key={i}
                  className={`absolute inset-0 transition-all duration-700 ease-out ${
                    i === featIdx ? "opacity-100 scale-100" : "opacity-0 scale-105"
                  }`}
                >
                  <FadeImage src={f.image} alt={f.name} fill sizes="64px" className="object-cover" />
                </div>
              ))}
            </div>

            {/* Info stack — fades between products */}
            <div className="relative flex-1 min-w-0 h-[68px]">
              {featured.map((f, i) => (
                <div
                  key={i}
                  className={`absolute inset-0 transition-all duration-500 ${
                    i === featIdx ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1.5 pointer-events-none"
                  }`}
                >
                  <span className="inline-block bg-peony text-white text-[9px] tracking-[0.12em] uppercase px-2 py-0.5 mb-1 rounded-sm">{f.badge}</span>
                  <p className="text-[13px] font-medium text-charcoal leading-tight mb-0.5 truncate">{f.name}</p>
                  <p className="text-[11px] text-warm-gray mb-1">{f.variant}</p>
                  <p className="text-[13px] text-peony font-semibold">{fmt(f.price)}</p>
                </div>
              ))}
            </div>

            {/* Dots indicator */}
            <div className="absolute bottom-1.5 right-3 flex gap-1">
              {featured.map((_, i) => (
                <span
                  key={i}
                  className={`h-1 rounded-full transition-all duration-500 ${
                    i === featIdx ? "w-3 bg-peony" : "w-1 bg-peony/25"
                  }`}
                />
              ))}
            </div>
          </a>
        </div>
      </div>

      {/* Controls */}
      <button onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 bg-white/50 hover:bg-white/95 backdrop-blur-sm flex items-center justify-center text-charcoal transition-colors rounded-full" aria-label="Trước">
        <ChevronLeft size={18} />
      </button>
      <button onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 bg-white/50 hover:bg-white/95 backdrop-blur-sm flex items-center justify-center text-charcoal transition-colors rounded-full" aria-label="Tiếp">
        <ChevronRight size={18} />
      </button>
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-30 flex gap-2">
        {heroSlides.map((_, i) => (
          <button key={i} onClick={() => setSlide(i)} className={`h-1.5 rounded-full transition-all ${i === slide ? "bg-white w-7" : "bg-white/40 w-1.5"}`} aria-label={`Slide ${i + 1}`} />
        ))}
      </div>
    </section>
  );
}
