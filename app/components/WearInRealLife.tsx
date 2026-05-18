"use client";

import { Heart, MessageCircle } from "lucide-react";
import { FadeImage, Reveal } from "./Shared";

const InstagramIcon = ({ size = 14 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

const posts = [
  { img: "/products/1.jpg", user: "@minh_anh.vn", look: "Áo Ren Thêu Nơ", likes: 248, comments: 12 },
  { img: "/products/3.jpg", user: "@thuy_ngan", look: "Đầm Hoa Nhí Vintage", likes: 412, comments: 36 },
  { img: "/products/2.jpg", user: "@huong_giang", look: "Đầm Xếp Ly Cổ Thuyền", likes: 187, comments: 9 },
  { img: "/products/4.jpg", user: "@kim_ngan", look: "Đầm Trắng Voan", likes: 523, comments: 41 },
  { img: "/products/3.jpg", user: "@ngoc_trinh", look: "Set Croptop & Chân Váy", likes: 312, comments: 24 },
  { img: "/products/1.jpg", user: "@thu_trang", look: "Áo Blouse Tay Phồng", likes: 156, comments: 8 },
];

export function WearInRealLife() {
  return (
    <section className="bg-white">
      <div className="max-w-[1280px] mx-auto px-5 py-16 lg:py-24">
        <Reveal>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-5 mb-12">
            <div className="text-center lg:text-left">
              <p className="text-[10px] tracking-[0.32em] text-warm-gray uppercase mb-3">Cộng đồng Zamy</p>
              <h2 className="font-display text-3xl lg:text-[42px] text-charcoal italic">Wear in real life</h2>
              <div className="w-10 h-[2px] bg-peony mt-4 mx-auto lg:mx-0" />
            </div>
            <a href="#" className="inline-flex items-center gap-2 text-[11px] tracking-[0.22em] uppercase font-medium text-peony hover:gap-3 transition-all">
              <InstagramIcon size={14} /> #ZamyWomen — xem tất cả
            </a>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 lg:gap-3">
          {posts.map((p, i) => (
            <Reveal key={i} delay={i * 60}>
              <a href="#" className="group relative block aspect-[3/4] overflow-hidden rounded-sm bg-petal">
                <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-[1.06]">
                  <FadeImage src={p.img} alt={p.user} fill sizes="(max-width:768px) 50vw, 16vw" className="object-cover" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute inset-x-0 bottom-0 p-3 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="text-[11px] font-medium mb-0.5 truncate">{p.user}</p>
                  <p className="text-[10px] text-white/75 mb-2 truncate">{p.look}</p>
                  <div className="flex items-center gap-3 text-[10px]">
                    <span className="flex items-center gap-1"><Heart size={11} fill="currentColor" /> {p.likes}</span>
                    <span className="flex items-center gap-1"><MessageCircle size={11} /> {p.comments}</span>
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
