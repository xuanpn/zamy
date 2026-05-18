"use client";

import { ArrowRight } from "lucide-react";
import { FadeImage, Reveal } from "./Shared";

const looks = [
  {
    key: "workwear",
    label: "Workwear",
    sub: "Buổi họp đầu tuần",
    desc: "Đường cắt may sắc nét, gam màu trung tính — sẵn sàng cho mọi cuộc gặp.",
    image: "/products/1.jpg",
    href: "#workwear",
  },
  {
    key: "casual",
    label: "Casual",
    sub: "Ngày tự do của bạn",
    desc: "Chất liệu thoáng mát, dáng suông dễ phối — thoải mái từ sáng tới chiều.",
    image: "/products/2.jpg",
    href: "#casual",
  },
  {
    key: "party",
    label: "Party",
    sub: "Buổi hẹn cuối tuần",
    desc: "Lụa, voan và những chi tiết bồng bềnh — toả sáng theo cách riêng của bạn.",
    image: "/products/4.jpg",
    href: "#party",
  },
];

export function DailyWardrobe() {
  return (
    <section className="bg-white">
      <div className="max-w-[1280px] mx-auto px-5 py-16 lg:py-24">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-[10px] tracking-[0.32em] text-warm-gray uppercase mb-3">Daily Wardrobe</p>
            <h2 className="font-display text-3xl lg:text-[42px] text-charcoal italic mb-4">Tủ đồ mỗi ngày của bạn</h2>
            <div className="w-10 h-[2px] bg-peony mx-auto mb-5" />
            <p className="text-[14px] text-charcoal-light leading-relaxed">
              Từ buổi họp đầu tuần đến buổi hẹn cuối tuần — chọn theo cảm hứng, không cần suy nghĩ.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-4 lg:gap-6">
          {looks.map((l, i) => (
            <Reveal key={l.key} delay={i * 120}>
              <a href={l.href} className="group block relative overflow-hidden rounded-sm aspect-[3/4] bg-petal">
                <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-[1.04]">
                  <FadeImage src={l.image} alt={l.label} fill sizes="(max-width:768px) 100vw, 33vw" className="object-cover" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/75 via-charcoal/15 to-transparent" />

                <div className="absolute inset-x-0 bottom-0 p-6 lg:p-7 text-white">
                  <p className="text-[10px] tracking-[0.28em] uppercase text-white/70 mb-2">{l.sub}</p>
                  <h3 className="font-display text-3xl lg:text-4xl italic mb-3 tracking-wide">{l.label}</h3>
                  <p className="text-[13px] text-white/85 leading-relaxed mb-4 max-w-[260px]">{l.desc}</p>
                  <span className="inline-flex items-center gap-2 text-[11px] tracking-[0.22em] uppercase font-medium border-b border-white/70 pb-0.5 group-hover:gap-3.5 transition-all">
                    Khám phá <ArrowRight size={12} />
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
