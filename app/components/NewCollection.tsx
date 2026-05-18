"use client";

import Link from "next/link";
import { ArrowRight, Heart } from "lucide-react";
import { FadeImage, Reveal, fmt } from "./Shared";

const products = [
  { slug: "dam-linen-mira-be-sua", name: "Đầm Linen Mira", color: "Bé sữa", price: 689000, oldPrice: null, sold: 245, tag: "Mẫu mới", image: "/products/4.jpg" },
  { slug: "dam-xep-ly-co-thuyen", name: "Đầm Xếp Ly Cổ Thuyền", color: "Nude", price: 585000, oldPrice: null, sold: 89, tag: null, image: "/products/2.jpg" },
  { slug: "dam-hoa-nhi-vintage", name: "Đầm Hoa Nhí Vintage", color: "Hồng nhạt", price: 455000, oldPrice: 599000, sold: 310, tag: "Hot", image: "/products/3.jpg" },
  { slug: "ao-ren-theu-no-den", name: "Áo Ren Thêu Nơ", color: "Đen", price: 495000, oldPrice: 650000, sold: 245, tag: "Bán chạy", image: "/products/1.jpg" },
  { slug: "ao-blouse-tay-phong", name: "Áo Blouse Tay Phồng", color: "Trắng kem", price: 395000, oldPrice: 520000, sold: 432, tag: null, image: "/products/1.jpg" },
  { slug: "vay-lien-than-a-line", name: "Váy Liền Thân A-line", color: "Be nhạt", price: 755000, oldPrice: null, sold: 167, tag: "Mới", image: "/products/2.jpg" },
  { slug: "set-croptop-chan-vay", name: "Set Croptop & Chân Váy", color: "Pastel", price: 850000, oldPrice: 1050000, sold: 78, tag: null, image: "/products/3.jpg" },
  { slug: "dam-suong-toi-gian", name: "Đầm Suông Tối Giản", color: "Trắng", price: 695000, oldPrice: null, sold: 120, tag: "Mới", image: "/products/4.jpg" },
];

export function NewCollection() {
  return (
    <section id="new" className="max-w-[1280px] mx-auto px-5 py-14 lg:py-20">
      <Reveal>
        <div className="text-center mb-12">
          <p className="text-[10px] tracking-[0.32em] text-warm-gray uppercase mb-2.5">Bộ sưu tập mới</p>
          <h2 className="font-display text-3xl lg:text-[42px] text-charcoal italic">New Arrivals</h2>
          <div className="w-10 h-[2px] bg-peony mx-auto mt-4" />
        </div>
      </Reveal>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
        {products.map((p, i) => (
          <Reveal key={i} delay={i * 60}>
            <Link href={`/product/${p.slug}`} className="product-card group block">
              <div className="card-img relative aspect-[3/4] bg-petal mb-3 overflow-hidden rounded-sm">
                <div className="card-img-inner relative w-full h-full">
                  <FadeImage src={p.image} alt={p.name} fill sizes="(max-width:768px) 50vw, 25vw" className="object-cover" />
                </div>
                {p.tag && <span className="absolute top-2 left-2 z-10 bg-peony text-white text-[9px] tracking-[0.1em] uppercase px-2.5 py-1 font-medium rounded-sm">{p.tag}</span>}
                <button onClick={(e) => e.preventDefault()} className="absolute top-2 right-2 z-10 w-8 h-8 bg-white/85 hover:bg-white text-charcoal hover:text-peony backdrop-blur-sm rounded-full flex items-center justify-center transition-colors opacity-0 group-hover:opacity-100">
                  <Heart size={13} strokeWidth={1.5} />
                </button>
                <div className="card-overlay absolute inset-0 z-10 bg-black/5 flex items-end justify-center pb-4">
                  <span className="bg-white text-charcoal text-[10px] tracking-[0.12em] uppercase px-5 py-2.5 font-medium hover:bg-peony hover:text-white transition-colors rounded-sm">Xem chi tiết</span>
                </div>
              </div>
              <div className="px-0.5">
                <h3 className="text-[13px] text-charcoal leading-snug mb-0.5 group-hover:text-peony transition-colors line-clamp-1">{p.name}</h3>
                <p className="text-[11px] text-warm-gray mb-1.5">{p.color}</p>
                <div className="flex items-center gap-2">
                  <span className="text-[14px] text-peony font-semibold">{fmt(p.price)}</span>
                  {p.oldPrice && <span className="text-[12px] text-warm-gray-light line-through">{fmt(p.oldPrice)}</span>}
                </div>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <div className="text-center mt-12">
          <a href="#" className="inline-flex items-center gap-2.5 border border-charcoal text-charcoal px-9 py-3 text-[11px] tracking-[0.22em] uppercase font-medium hover:bg-charcoal hover:text-white transition-all rounded-sm">
            Xem tất cả <ArrowRight size={13} />
          </a>
        </div>
      </Reveal>
    </section>
  );
}
