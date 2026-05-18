"use client";

import Image from "next/image";
import { Mail } from "lucide-react";
import { Reveal } from "./Shared";

export function Newsletter() {
  return (
    <section className="bg-gradient-to-br from-peony via-peony-dark to-peony-deep relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute -left-20 -bottom-20 opacity-10 pointer-events-none">
        <Image src="/logos/SUBMARK_GRADIENT.png" alt="" width={420} height={420} className="w-[380px] h-auto invert brightness-200" />
      </div>
      <div className="absolute -right-32 -top-32 opacity-10 pointer-events-none">
        <Image src="/logos/SUBMARK_GRADIENT.png" alt="" width={500} height={500} className="w-[460px] h-auto invert brightness-200" />
      </div>

      <div className="relative max-w-[820px] mx-auto px-5 py-20 lg:py-24 text-center text-white">
        <Reveal>
          <p className="text-[10px] tracking-[0.32em] uppercase text-white/80 mb-3 inline-flex items-center gap-2">
            <Mail size={13} strokeWidth={1.5} /> Letter from Zamy
          </p>
          <h2 className="font-display text-3xl lg:text-[44px] italic mb-5 leading-tight">
            Một lá thư nhỏ,<br/>gửi đến bạn vào sáng Chủ Nhật.
          </h2>
          <p className="text-[14px] lg:text-[15px] text-white/85 leading-relaxed max-w-xl mx-auto mb-8">
            Gợi ý phong cách, mẫu mới và những câu chuyện đằng sau từng thiết kế.
            Đăng ký để nhận <span className="font-medium text-white border-b border-white/50">voucher 50.000₫</span> cho đơn đầu tiên.
          </p>

          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Email của bạn"
              className="flex-1 bg-white/15 backdrop-blur-sm border border-white/30 px-5 py-3.5 text-[14px] text-white placeholder:text-white/60 focus:outline-none focus:border-white/70 focus:bg-white/20 rounded-sm transition-colors"
              required
            />
            <button type="submit" className="bg-white text-peony hover:bg-charcoal hover:text-white px-7 py-3.5 text-[10px] tracking-[0.25em] uppercase font-medium transition-colors rounded-sm whitespace-nowrap">
              Đăng ký nhận thư
            </button>
          </form>

          <p className="text-[11px] text-white/60 mt-5">
            Không spam. Hủy đăng ký bất kỳ lúc nào.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
