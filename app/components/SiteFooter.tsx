"use client";

import Image from "next/image";
import { MapPin, Phone, Mail } from "lucide-react";

const InstagramIcon = ({ size = 14 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);
const FacebookIcon = ({ size = 14 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const cols = [
  {
    title: "Mua sắm",
    items: ["Mới về", "Bán chạy", "Bộ sưu tập", "Sale", "Gift card"],
  },
  {
    title: "Hỗ trợ",
    items: ["Bảng size", "Đổi & trả hàng", "Vận chuyển", "Câu hỏi thường gặp", "Liên hệ"],
  },
  {
    title: "Về Zamy",
    items: ["Câu chuyện thương hiệu", "Chất liệu", "Tuyển dụng", "Cửa hàng", "Báo chí"],
  },
];

export function SiteFooter() {
  return (
    <footer className="bg-charcoal text-white/70">
      <div className="max-w-[1280px] mx-auto px-5 py-16 lg:py-20">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-5">
              <Image src="/logos/SUBMARK_GRADIENT.png" alt="ZAMY Peony" width={42} height={42} className="h-10 w-auto" />
              <Image src="/logos/LOGOTYPE_WHITE.png" alt="ZAMY" width={108} height={36} className="h-7 w-auto opacity-90" />
            </div>
            <p className="text-[13px] text-white/55 leading-relaxed mb-6 max-w-sm">
              Thời trang dành cho người phụ nữ thành thị — thanh lịch, tinh tế và nhẹ nhàng như chính bạn.
            </p>
            <div className="space-y-3 text-[12.5px] text-white/55">
              <p className="flex items-start gap-2.5"><MapPin size={14} className="text-blush/70 mt-0.5 shrink-0" /> 123 Nguyễn Huệ, Q.1, TP.HCM</p>
              <p className="flex items-center gap-2.5"><Phone size={14} className="text-blush/70 shrink-0" /> 1900 8688</p>
              <p className="flex items-center gap-2.5"><Mail size={14} className="text-blush/70 shrink-0" /> hello@zamy.vn</p>
            </div>
            <div className="flex gap-2.5 mt-6">
              <a href="#" aria-label="Instagram" className="w-9 h-9 border border-white/15 rounded-sm flex items-center justify-center text-white/55 hover:text-white hover:border-peony hover:bg-peony transition-all">
                <InstagramIcon size={14} />
              </a>
              <a href="#" aria-label="Facebook" className="w-9 h-9 border border-white/15 rounded-sm flex items-center justify-center text-white/55 hover:text-white hover:border-peony hover:bg-peony transition-all">
                <FacebookIcon size={14} />
              </a>
              <a href="#" aria-label="TikTok" className="w-9 h-9 border border-white/15 rounded-sm flex items-center justify-center text-white/55 hover:text-white hover:border-peony hover:bg-peony transition-all">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M16.6 5.82a4.28 4.28 0 0 1-1.04-2.82h-3.34v13.42c0 1.5-1.21 2.71-2.71 2.71a2.71 2.71 0 0 1 0-5.42c.28 0 .55.04.8.13v-3.42a6.13 6.13 0 0 0-.8-.05 6.13 6.13 0 1 0 6.13 6.13V9.74a7.6 7.6 0 0 0 4.45 1.43V7.84a4.28 4.28 0 0 1-3.49-2.02z"/></svg>
              </a>
            </div>
          </div>

          {/* Columns */}
          {cols.map((c) => (
            <div key={c.title} className="lg:col-span-2">
              <h4 className="text-[11px] tracking-[0.22em] uppercase text-white font-medium mb-5">{c.title}</h4>
              <ul className="space-y-3">
                {c.items.map((i) => (
                  <li key={i}><a href="#" className="text-[12.5px] text-white/55 hover:text-blush transition-colors">{i}</a></li>
                ))}
              </ul>
            </div>
          ))}

          {/* Payment */}
          <div className="lg:col-span-2">
            <h4 className="text-[11px] tracking-[0.22em] uppercase text-white font-medium mb-5">Thanh toán</h4>
            <div className="flex flex-wrap gap-2">
              {["VISA", "MoMo", "ZaloPay", "COD"].map((p) => (
                <span key={p} className="px-3 py-1.5 border border-white/15 text-[10.5px] tracking-wider text-white/65 rounded-sm">{p}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[11px] text-white/40 tracking-wider">© 2026 Zamy · Made with care in Saigon</p>
          <p className="text-[11px] text-white/40 tracking-wider">GPKD: 0123456789 — Cấp ngày 01/06/2012</p>
        </div>
      </div>
    </footer>
  );
}
