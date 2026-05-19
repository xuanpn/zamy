"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { FadeImage, Reveal } from "./Shared";

export function PeonyStory() {
  return (
    <section id="story" className="relative bg-gradient-to-br from-petal/60 via-cream to-blush-light/30 overflow-hidden">
      {/* Watermark peony — large, top-right (mirrors Newsletter wallpaper style) */}
      <div className="absolute -right-28 -top-28 lg:-right-40 lg:-top-32 opacity-[0.11] pointer-events-none select-none">
        <Image
          src="/logos/SUBMARK_GRADIENT.png"
          alt=""
          width={640}
          height={640}
          className="w-[380px] lg:w-[620px] h-auto"
          style={{ transform: "rotate(-14deg)" }}
        />
      </div>

      {/* Watermark peony — large, bottom-left */}
      <div className="absolute -left-24 -bottom-32 lg:-left-36 lg:-bottom-40 opacity-[0.09] pointer-events-none select-none">
        <Image
          src="/logos/SUBMARK_GRADIENT.png"
          alt=""
          width={540}
          height={540}
          className="w-[300px] lg:w-[540px] h-auto"
          style={{ transform: "rotate(28deg)" }}
        />
      </div>

      {/* Centered mid peony — fills the empty space to the right of text */}
      <div className="hidden lg:block absolute right-[14%] top-1/2 -translate-y-1/2 opacity-[0.06] pointer-events-none select-none">
        <Image
          src="/logos/SUBMARK_GRADIENT.png"
          alt=""
          width={260}
          height={260}
          className="w-[240px] h-auto"
          style={{ transform: "rotate(10deg)" }}
        />
      </div>

      <div className="relative max-w-[1280px] mx-auto px-5 py-12 lg:py-16">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <Reveal className="lg:col-span-5">
            <div className="relative aspect-[4/4.5] overflow-hidden rounded-sm">
              <FadeImage src="/products/2.jpg" alt="ZAMY Story" fill sizes="(max-width:1024px) 100vw, 40vw" className="object-cover" />
              <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur px-4 py-2.5 rounded-sm shadow-sm">
                <Image src="/logos/SUBMARK_GRADIENT.png" alt="" width={32} height={32} className="w-8 h-8 inline-block align-middle mr-2" />
                <span className="font-serif italic text-[13px] text-charcoal align-middle">Inspired by peony</span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={150} className="lg:col-span-7 relative">
            <p className="text-[10px] tracking-[0.32em] text-peony uppercase mb-3 font-medium">Zamy Story</p>
            <h2 className="font-display text-3xl lg:text-[40px] text-charcoal mb-2 leading-tight">Như một bông mẫu đơn.</h2>
            <p className="font-serif italic text-xl lg:text-[22px] text-peony-dark mb-6">Inspired by peony.</p>

            <div className="space-y-4 text-[14px] lg:text-[15px] text-charcoal-light leading-[1.8] max-w-2xl">
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

            <div className="flex items-center gap-4 mt-6 pt-5 border-t border-peony/15 max-w-md">
              <div className="w-9 h-px bg-peony" />
              <div>
                <p className="font-serif italic text-[15px] text-charcoal mb-0.5">&ldquo;Phụ nữ Zamy — nở theo nhịp của riêng mình.&rdquo;</p>
                <p className="text-[11px] tracking-[0.2em] text-warm-gray uppercase">— Đội ngũ Zamy</p>
              </div>
            </div>

            <a href="#" className="inline-flex items-center gap-2 mt-6 text-peony text-[11px] tracking-[0.22em] uppercase font-medium hover:gap-4 transition-all">
              Đọc tiếp câu chuyện <ArrowRight size={13} />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
