"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, User, ShoppingBag, Heart, Menu, X, Globe } from "lucide-react";

const navLinks = [
  { label: "Mới về", href: "#new" },
  { label: "Đầm", href: "#dam" },
  { label: "Áo", href: "#ao" },
  { label: "Quần & Chân váy", href: "#quan" },
  { label: "Set & BST", href: "#set" },
  { label: "Phụ kiện", href: "#phukien" },
  { label: "Sale", href: "#sale", sale: true },
  { label: "Câu chuyện Zamy", href: "#story" },
];

export function Topbar() {
  return (
    <div className="bg-peony overflow-hidden">
      <div className="marquee-track flex items-center gap-16 py-2 whitespace-nowrap" style={{ width: "200%" }}>
        {[0, 1].map((k) => (
          <div key={k} className="flex items-center gap-16 text-white text-[10px] tracking-[0.3em] uppercase">
            <span>Miễn phí giao hàng đơn từ 599K</span>
            <span className="opacity-40">✦</span>
            <span>Đổi trả 7 ngày</span>
            <span className="opacity-40">✦</span>
            <span>Hotline 1900 8688</span>
            <span className="opacity-40">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header className={`sticky top-0 z-50 bg-white transition-all duration-300 ${scrolled ? "header-scrolled" : ""}`}>
      <div className="max-w-[1280px] mx-auto px-5">
        <div className="flex items-center justify-between h-16 lg:h-[78px]">
          {/* Mobile menu */}
          <button className="lg:hidden text-charcoal" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          {/* Logo */}
          <Link href="/" className="lg:order-2 lg:absolute lg:left-1/2 lg:-translate-x-1/2 flex items-center gap-2">
            <Image src="/logos/SUBMARK_GRADIENT.png" alt="ZAMY Peony" width={32} height={32} className="h-7 lg:h-9 w-auto" priority />
            <Image src="/logos/LOGOTYPE_REDWOOD.png" alt="ZAMY" width={90} height={30} className="h-5 lg:h-6 w-auto" priority />
          </Link>

          {/* Desktop nav links */}
          <nav className="hidden lg:flex items-center gap-6 lg:order-1">
            {navLinks.slice(0, 4).map((l) => (
              <a key={l.label} href={l.href} className={`nav-link text-[11px] tracking-[0.15em] uppercase font-medium transition-colors ${l.sale ? "text-peony" : "text-charcoal-light hover:text-peony"}`}>{l.label}</a>
            ))}
          </nav>

          <div className="flex items-center gap-5 lg:order-3">
            <nav className="hidden lg:flex items-center gap-6">
              {navLinks.slice(4).map((l) => (
                <a key={l.label} href={l.href} className={`nav-link text-[11px] tracking-[0.15em] uppercase font-medium transition-colors ${l.sale ? "text-peony" : "text-charcoal-light hover:text-peony"}`}>{l.label}</a>
              ))}
            </nav>
            <div className="flex items-center gap-3.5">
              <button className="text-charcoal hover:text-peony transition-colors" aria-label="Tìm kiếm"><Search size={18} strokeWidth={1.5} /></button>
              <button className="hidden sm:flex items-center gap-1 text-charcoal hover:text-peony transition-colors text-[10px] tracking-[0.15em] font-medium" aria-label="Ngôn ngữ">
                <Globe size={16} strokeWidth={1.5} /> VN
              </button>
              <button className="hidden sm:block text-charcoal hover:text-peony transition-colors" aria-label="Tài khoản"><User size={18} strokeWidth={1.5} /></button>
              <button className="text-charcoal hover:text-peony transition-colors" aria-label="Yêu thích"><Heart size={18} strokeWidth={1.5} /></button>
              <button className="relative text-charcoal hover:text-peony transition-colors" aria-label="Giỏ hàng">
                <ShoppingBag size={18} strokeWidth={1.5} />
                <span className="absolute -top-1 -right-1.5 w-3.5 h-3.5 bg-peony text-white text-[8px] rounded-full flex items-center justify-center">2</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="h-px bg-gray-100" />
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100">
          <nav className="flex flex-col px-5 py-4 gap-3">
            {navLinks.map((l) => (
              <a key={l.label} href={l.href} className={`text-[12px] tracking-[0.15em] uppercase py-1 transition-colors ${l.sale ? "text-peony font-medium" : "text-charcoal-light hover:text-peony"}`}>{l.label}</a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
