"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, User, ShoppingBag, Heart, Menu, X, Globe, ChevronDown } from "lucide-react";

type SubItem = { label: string; href: string };
type NavItem = { label: string; href: string; items?: SubItem[]; sale?: boolean };

const leftLinks: NavItem[] = [
  { label: "Bộ sưu tập", href: "#collections" },
  {
    label: "Sản phẩm",
    href: "#products",
    items: [
      { label: "Đầm", href: "#dam" },
      { label: "Váy", href: "#vay" },
      { label: "Áo", href: "#ao" },
      { label: "Quần & Chân váy", href: "#quan" },
      { label: "Set & BST", href: "#set" },
      { label: "Phụ kiện", href: "#phukien" },
    ],
  },
  { label: "Video Lookbook", href: "#lookbook" },
];

const rightLinks: NavItem[] = [
  { label: "Sale", href: "#sale", sale: true },
  { label: "Câu chuyện Zamy", href: "#story" },
];

function DesktopNavLink({ link }: { link: NavItem }) {
  if (link.items) {
    return (
      <div className="relative group">
        <a
          href={link.href}
          className="nav-link flex items-center gap-1 text-[11px] tracking-[0.15em] uppercase font-medium text-charcoal-light hover:text-peony transition-colors"
        >
          {link.label}
          <ChevronDown size={11} strokeWidth={2} className="opacity-60 transition-transform duration-300 group-hover:rotate-180" />
        </a>
        <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 invisible opacity-0 translate-y-1 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 pointer-events-none group-hover:pointer-events-auto z-50">
          <div className="bg-white shadow-xl border border-petal/60 rounded-sm py-2.5 min-w-[200px]">
            {link.items.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block px-5 py-2 text-[12px] tracking-[0.08em] text-charcoal-light hover:text-peony hover:bg-petal/40 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    );
  }
  return (
    <a
      href={link.href}
      className={`nav-link text-[11px] tracking-[0.15em] uppercase font-medium transition-colors ${
        link.sale ? "text-peony" : "text-charcoal-light hover:text-peony"
      }`}
    >
      {link.label}
    </a>
  );
}

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
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header className={`sticky top-0 z-50 bg-white transition-all duration-300 ${scrolled ? "header-scrolled" : ""}`}>
      <div className="max-w-[1320px] mx-auto px-5">
        <div className="flex items-center justify-between h-16 lg:h-[80px]">
          {/* Mobile menu trigger */}
          <button className="lg:hidden text-charcoal" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          {/* Left nav (desktop) */}
          <nav className="hidden lg:flex items-center gap-7 lg:order-1">
            {leftLinks.map((l) => (
              <DesktopNavLink key={l.label} link={l} />
            ))}
          </nav>

          {/* Logo (center on desktop) */}
          <Link href="/" className="lg:order-2 lg:absolute lg:left-1/2 lg:-translate-x-1/2 flex items-center gap-2">
            <Image src="/logos/SUBMARK_GRADIENT.png" alt="ZAMY Peony" width={32} height={32} className="h-7 lg:h-9 w-auto" priority />
            <Image src="/logos/LOGOTYPE_REDWOOD.png" alt="ZAMY" width={90} height={30} className="h-5 lg:h-6 w-auto" priority />
          </Link>

          {/* Right side: links + icons */}
          <div className="flex items-center gap-6 lg:order-3">
            <nav className="hidden lg:flex items-center gap-7">
              {rightLinks.map((l) => (
                <DesktopNavLink key={l.label} link={l} />
              ))}
            </nav>
            <div className="flex items-center gap-3.5">
              <button className="text-charcoal hover:text-peony transition-colors" aria-label="Tìm kiếm"><Search size={18} strokeWidth={1.5} /></button>
              <button className="hidden sm:flex items-center gap-1 text-charcoal hover:text-peony transition-colors text-[10px] tracking-[0.15em] font-medium" aria-label="Ngôn ngữ">
                <Globe size={16} strokeWidth={1.5} /> VN
              </button>
              <button className="hidden sm:block text-charcoal hover:text-peony transition-colors" aria-label="Tài khoản"><User size={18} strokeWidth={1.5} /></button>
              <button className="text-charcoal hover:text-peony transition-colors relative" aria-label="Yêu thích">
                <Heart size={18} strokeWidth={1.5} />
                <span className="absolute -top-1 -right-1.5 w-3.5 h-3.5 bg-blush text-charcoal text-[8px] rounded-full flex items-center justify-center font-medium">5</span>
              </button>
              <button className="relative text-charcoal hover:text-peony transition-colors" aria-label="Giỏ hàng">
                <ShoppingBag size={18} strokeWidth={1.5} />
                <span className="absolute -top-1 -right-1.5 w-3.5 h-3.5 bg-peony text-white text-[8px] rounded-full flex items-center justify-center">2</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="h-px bg-gray-100" />

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 max-h-[80vh] overflow-y-auto">
          <nav className="flex flex-col px-5 py-4 gap-1">
            {[...leftLinks, ...rightLinks].map((l) => {
              if (l.items) {
                return (
                  <div key={l.label}>
                    <button
                      onClick={() => setMobileProductsOpen((o) => !o)}
                      className="w-full flex items-center justify-between text-[12px] tracking-[0.15em] uppercase py-2.5 text-charcoal-light hover:text-peony transition-colors"
                    >
                      {l.label}
                      <ChevronDown size={13} className={`transition-transform ${mobileProductsOpen ? "rotate-180" : ""}`} />
                    </button>
                    {mobileProductsOpen && (
                      <div className="pl-4 pb-2 flex flex-col gap-1.5 border-l border-petal/60 ml-1">
                        {l.items.map((s) => (
                          <a key={s.label} href={s.href} className="text-[12px] text-charcoal-light hover:text-peony py-1 transition-colors">
                            {s.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }
              return (
                <a
                  key={l.label}
                  href={l.href}
                  className={`text-[12px] tracking-[0.15em] uppercase py-2.5 transition-colors ${l.sale ? "text-peony font-medium" : "text-charcoal-light hover:text-peony"}`}
                >
                  {l.label}
                </a>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
