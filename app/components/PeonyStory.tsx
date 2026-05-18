"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { FadeImage, Reveal } from "./Shared";

export function PeonyStory() {
  return (
    <section id="story" className="relative bg-gradient-to-br from-petal/60 via-cream to-blush-light/30 overflow-hidden">
      {/* Decorative peony submark */}
      <div className="absolute -right-20 -top-20 lg:-right-32 lg:top-10 opacity-[0.06] pointer-events-none">
        <Image src="/logos/SUBMARK_GRADIENT.png" alt="" width={480} height={480} className="w-[280px] lg:w-[480px] h-auto" />
      </div>

      <div className="relative max-w-[1280px] mx-auto px-5 py-16 lg:py-24">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <Reveal className="lg:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
              <FadeImage src="/products/2.jpg" alt="ZAMY Story" fill sizes="(max-width:1024px) 100vw, 40vw" className="object-cover" />
              <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur px-4 py-2.5 rounded-sm shadow-sm">
                <Image src="/logos/SUBMARK_GRADIENT.png" alt="" width={32} height={32} className="w-8 h-8 inline-block align-middle mr-2" />
                <span className="font-serif italic text-[13px] text-charcoal align-middle">Inspired by peony</span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={150} className="lg:col-span-7">
            <p className="text-[10px] tracking-[0.32em] text-peony uppercase mb-3 font-medium">Zamy Story</p>
            <h2 className="font-display text-3xl lg:text-[44px] text-charcoal mb-2 leading-tight">Như một bông mẫu đơn.</h2>
            <p className="font-serif italic text-xl lg:text-2xl text-peony-dark mb-7">Inspired by peony.</p>

            <div className="space-y-5 text-[14px] lg:text-[15px] text-charcoal-light leading-[1.85] max-w-2xl">
              <p>
                Hoa mẫu đơn không vội nở. Nó mở ra từ tốn — lớp này dịu dàng đón lớp khác — và khi đầy đặn, nó không cần phải hét lên rằng mình đẹp.
              </p>
              <p>
                Zamy tin vẻ đẹp của người phụ nữ cũng vậy. Không phải thứ đẹp gấp gáp. Mà là vẻ đẹp lớn lên từ từ — qua từng buổi sáng cô ấy chọn cho mình, qua chất liệu vừa chạm vào da đã thấy dễ chịu, qua cách một chiếc đầm vừa vặn ôm lấy người.
              </p>
              <p>
                Mỗi thiết kế của Zamy là một cánh hoa nhỏ. Riêng lẻ, chúng giản dị. Cùng nhau, chúng tạo nên phong cách của một người phụ nữ — đầy đặn, ấm áp, và rất thật.
              </p>
            </div>

            <div className="flex items-center gap-4 mt-8 pt-7 border-t border-peony/15 max-w-md">
              <div className="w-9 h-px bg-peony" />
              <div>
                <p className="font-serif italic text-[15px] text-charcoal mb-0.5">&ldquo;Phụ nữ Zamy — nở theo nhịp của riêng mình.&rdquo;</p>
                <p className="text-[11px] tracking-[0.2em] text-warm-gray uppercase">— Đội ngũ Zamy</p>
              </div>
            </div>

            <a href="#" className="inline-flex items-center gap-2 mt-7 text-peony text-[11px] tracking-[0.22em] uppercase font-medium hover:gap-4 transition-all">
              Đọc tiếp câu chuyện <ArrowRight size={13} />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
