"use client";

import { ArrowRight } from "lucide-react";
import { FadeImage, Reveal } from "./Shared";

// Each banner: image + script-style title + small subtitle + CTA (admin-configurable link)
const collections = [
  {
    name: "Buổi sớm bình yên",
    subtitle: "Whisper Bloom — Summer '26",
    image: "/Banners/3.jpg",
    href: "#bst-whisper-bloom",
    align: "left",
    tone: "light",
  },
  {
    name: "Thanh thoát",
    subtitle: "Linen Capsule",
    image: "/products/2.jpg",
    href: "#bst-linen",
    align: "right",
    tone: "light",
  },
  {
    name: "Chuyện nhẹ tênh",
    subtitle: "Casual Edit",
    image: "/Banners/1.JPG",
    href: "#bst-casual",
    align: "right",
    tone: "dark",
  },
  {
    name: "Hẹn hò lãng mạn",
    subtitle: "Date Night",
    image: "/products/4.jpg",
    href: "#bst-date-night",
    align: "left",
    tone: "light",
  },
  {
    name: "Em thanh xuân",
    subtitle: "Young Spirit",
    image: "/products/3.jpg",
    href: "#bst-young-spirit",
    align: "left",
    tone: "dark",
  },
  {
    name: "Casually Perfect",
    subtitle: "Signature Capsule",
    image: "/Banners/2.JPG",
    href: "#bst-signature",
    align: "right",
    tone: "light",
  },
];

export function Collections() {
  return (
    <section id="collections" className="bg-white">
      <div className="max-w-[1360px] mx-auto px-5 py-14 lg:py-20">
        <Reveal>
          <div className="text-center mb-12 lg:mb-16 max-w-xl mx-auto">
            <p className="text-[10px] tracking-[0.4em] text-peony uppercase mb-4 font-medium">— Bộ sưu tập —</p>
            <h2 className="font-display text-3xl lg:text-[48px] text-charcoal italic leading-[1.1] mb-4">Khoảnh khắc của bạn.</h2>
            <p className="text-[14px] text-warm-gray leading-relaxed">
              Mỗi bộ sưu tập là một câu chuyện riêng — chọn theo tâm trạng, không cần suy nghĩ.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-5">
          {collections.map((c, i) => {
            const textColor = c.tone === "dark" ? "text-white" : "text-charcoal";
            const dividerColor = c.tone === "dark" ? "border-white/55" : "border-charcoal/35";
            const subColor = c.tone === "dark" ? "text-white/80" : "text-charcoal/70";
            const ctaBase = c.tone === "dark" ? "text-white border-white/55" : "text-charcoal border-charcoal/40";
            const veil = c.tone === "dark"
              ? c.align === "left"
                ? "bg-gradient-to-r from-charcoal/55 via-charcoal/15 to-transparent"
                : "bg-gradient-to-l from-charcoal/55 via-charcoal/15 to-transparent"
              : c.align === "left"
              ? "bg-gradient-to-r from-white/35 via-transparent to-transparent"
              : "bg-gradient-to-l from-white/35 via-transparent to-transparent";
            const flexAlign = c.align === "right" ? "justify-end" : "justify-start";
            const textShadow = c.tone === "dark" ? { textShadow: "0 2px 14px rgba(0,0,0,0.25)" } : undefined;

            return (
              <Reveal key={c.name} delay={i * 80}>
                <a href={c.href} className="group block relative aspect-[5/2] overflow-hidden rounded-sm bg-petal">
                  <div className="absolute inset-0 transition-transform duration-[1100ms] ease-out group-hover:scale-[1.04]">
                    <FadeImage src={c.image} alt={c.name} fill sizes="(max-width:768px) 100vw, 50vw" className="object-cover" />
                  </div>

                  {/* Subtle gradient veil for legibility */}
                  <div className={`absolute inset-0 ${veil}`} />

                  <div className={`absolute inset-0 flex items-center ${flexAlign} px-6 lg:px-9`}>
                    <div className={`${textColor} max-w-[60%]`} style={textShadow}>
                      <h3 className="zamy-script text-[38px] sm:text-[44px] lg:text-[54px] leading-[1] mb-1.5 lg:mb-2">
                        {c.name}
                      </h3>
                      <p className={`text-[9.5px] tracking-[0.3em] uppercase ${subColor} mb-3 ${c.align === "right" ? "text-right" : ""}`}>
                        <span className={`inline-block w-5 h-px ${dividerColor.replace("border-", "bg-")} align-middle mr-2`} />
                        {c.subtitle}
                      </p>
                      <span className={`inline-flex items-center gap-1.5 text-[10px] tracking-[0.25em] uppercase font-medium border-b ${ctaBase} pb-1 transition-all group-hover:!text-peony group-hover:!border-peony group-hover:gap-2.5`}>
                        Khám phá <ArrowRight size={10} />
                      </span>
                    </div>
                  </div>
                </a>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
