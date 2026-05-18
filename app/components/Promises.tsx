"use client";

import { Truck, RotateCcw, Leaf, Sparkles } from "lucide-react";
import { Reveal } from "./Shared";

const promises = [
  { icon: Truck, title: "Giao hàng miễn phí", desc: "Cho đơn từ 599.000₫ trên toàn quốc" },
  { icon: RotateCcw, title: "Đổi trả 7 ngày", desc: "Không hợp size? Chúng tôi đổi cho bạn" },
  { icon: Leaf, title: "Chất liệu chọn lọc", desc: "Linen, lụa, cotton hữu cơ — nguồn gốc rõ ràng" },
  { icon: Sparkles, title: "Tư vấn 1-1", desc: "Stylist giúp bạn chọn size & phối đồ" },
];

export function Promises() {
  return (
    <section className="bg-white border-y border-petal/80">
      <div className="max-w-[1280px] mx-auto px-5 py-12 lg:py-16">
        <Reveal>
          <p className="text-center text-[10px] tracking-[0.35em] text-peony uppercase font-medium mb-8">— Cam kết của Zamy —</p>
        </Reveal>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {promises.map((p, i) => (
            <Reveal key={p.title} delay={i * 100}>
              <div className="text-center">
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gradient-to-br from-blush-light to-rose-mist-light flex items-center justify-center text-peony-deep">
                  <p.icon size={22} strokeWidth={1.5} />
                </div>
                <h3 className="text-[13px] tracking-[0.12em] uppercase text-charcoal font-semibold mb-1.5">{p.title}</h3>
                <p className="text-[12px] text-warm-gray leading-relaxed max-w-[200px] mx-auto">{p.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
