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

      <div className="relative max-w-[920px] mx-auto px-5 py-10 lg:py-14 text-white">
        <Reveal>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-10">
            {/* Left: headline */}
            <div className="text-center lg:text-left lg:flex-1">
              <p className="text-[10px] tracking-[0.32em] uppercase text-white/80 mb-2 inline-flex items-center gap-2 font-medium">
                <Mail size={12} strokeWidth={1.6} /> Letter from Zamy
              </p>
              <h2 className="font-display text-2xl lg:text-[30px] italic leading-tight mb-1.5">
                Một lá thư nhỏ, mỗi sáng Chủ Nhật.
              </h2>
              <p className="text-[12.5px] text-white/85 leading-relaxed">
                Đăng ký nhận <span className="font-medium text-white border-b border-white/50">voucher 50.000₫</span> cho đơn đầu tiên.
              </p>
            </div>

            {/* Right: form */}
            <form className="flex w-full lg:w-auto lg:min-w-[420px] max-w-md">
              <input
                type="email"
                placeholder="Email của bạn"
                className="flex-1 bg-white/15 backdrop-blur-sm border border-white/30 border-r-0 px-4 py-3 text-[13px] text-white placeholder:text-white/60 focus:outline-none focus:border-white/70 focus:bg-white/20 rounded-l-sm transition-colors"
                required
              />
              <button type="submit" className="bg-white text-peony hover:bg-charcoal hover:text-white px-6 py-3 text-[10px] tracking-[0.22em] uppercase font-medium transition-colors rounded-r-sm whitespace-nowrap">
                Đăng ký
              </button>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
