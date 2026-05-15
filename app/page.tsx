"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Search,
  User,
  ShoppingBag,
  Heart,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Phone,
  Mail,
  Menu,
  X,
  ArrowRight,
  Play,
} from "lucide-react";

/* ───── DATA ───── */

const heroSlides = [
  { image: "/Banners/3.jpg", title: "Casually Perfect", subtitle: "La Mienne — Whisper Bloom Summer '26", cta: "KHÁM PHÁ BST" },
  { image: "/Banners/1.JPG", title: "Chạm Hè — Deal Tới 50%", subtitle: "Ưu đãi trọn mùa hè rực rỡ", cta: "MUA NGAY" },
  { image: "/Banners/2.JPG", title: "Deal Xinh — Hè Rực Rỡ", subtitle: "Bộ sưu tập mới nhất 2025", cta: "KHÁM PHÁ" },
];

const products = [
  { slug: "ao-ren-theu-no-den", name: "Áo Ren Thêu Nơ Đen", price: 495000, oldPrice: 650000, sold: 245, tag: "Bán chạy", image: "/products/1.jpg" },
  { slug: "dam-xep-ly-co-thuyen", name: "Đầm Xếp Ly Cổ Thuyền", price: 585000, oldPrice: null, sold: 89, tag: null, image: "/products/2.jpg" },
  { slug: "dam-hoa-nhi-vintage", name: "Đầm Hoa Nhí Vintage", price: 455000, oldPrice: 599000, sold: 310, tag: "Hot", image: "/products/3.jpg" },
  { slug: "dam-trang-voan-du-tiec", name: "Đầm Trắng Voan Dự Tiệc", price: 895000, oldPrice: null, sold: 56, tag: "Mới", image: "/products/4.jpg" },
  { slug: "ao-blouse-tay-phong", name: "Áo Blouse Tay Phồng", price: 395000, oldPrice: 520000, sold: 432, tag: null, image: "/products/1.jpg" },
  { slug: "vay-lien-than-a-line", name: "Váy Liền Thân A-line", price: 755000, oldPrice: null, sold: 167, tag: "Mới", image: "/products/2.jpg" },
  { slug: "set-croptop-chan-vay", name: "Set Croptop & Chân Váy", price: 850000, oldPrice: 1050000, sold: 78, tag: null, image: "/products/3.jpg" },
  { slug: "dam-suong-toi-gian", name: "Đầm Suông Tối Giản", price: 695000, oldPrice: null, sold: 120, tag: "Mới", image: "/products/4.jpg" },
];

const fmt = (n: number) => n.toLocaleString("vi-VN") + "₫";

/* ───── IMAGE WITH LOADING EFFECT ───── */

function FadeImage({ src, alt, fill, className, sizes, priority }: {
  src: string; alt: string; fill?: boolean; className?: string; sizes?: string; priority?: boolean;
}) {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className={`relative ${fill ? "w-full h-full" : ""}`}>
      {!loaded && (
        <div className="absolute inset-0 bg-gradient-to-br from-petal to-blush-light animate-pulse" />
      )}
      <Image
        src={src}
        alt={alt}
        fill={fill}
        sizes={sizes}
        priority={priority}
        className={`${className ?? ""} transition-all duration-700 ${loaded ? "opacity-100 scale-100" : "opacity-0 scale-[1.02]"}`}
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
}

/* ───── SCROLL REVEAL ───── */

function Reveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${className} transition-all duration-700 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

/* ───── VIDEO CARD ───── */

function VideoCard({ src, title, className }: { src: string; title: string; className?: string }) {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <div className={`video-card relative overflow-hidden rounded-sm cursor-pointer group ${className ?? ""}`} onClick={() => {
      if (videoRef.current) {
        if (playing) { videoRef.current.pause(); } else { videoRef.current.play(); }
        setPlaying(!playing);
      }
    }}>
      <video
        ref={videoRef}
        src={src}
        className="w-full h-full object-cover"
        loop
        muted
        playsInline
        preload="metadata"
        onEnded={() => setPlaying(false)}
      />
      {!playing && (
        <div className="absolute inset-0 bg-charcoal/20 flex items-center justify-center">
          <div className="play-btn w-14 h-14 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg">
            <Play size={20} className="text-peony ml-1" fill="currentColor" />
          </div>
        </div>
      )}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-charcoal/60 to-transparent">
        <p className="text-white text-xs tracking-[0.1em] uppercase">{title}</p>
      </div>
    </div>
  );
}

/* ───── COMPONENT ───── */

export default function Home() {
  const [slide, setSlide] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const next = useCallback(() => setSlide((s) => (s + 1) % heroSlides.length), []);
  const prev = useCallback(() => setSlide((s) => (s - 1 + heroSlides.length) % heroSlides.length), []);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    const id = setInterval(next, 6000);
    return () => clearInterval(id);
  }, [next]);

  const navLinks = ["TRANG CHỦ", "SẢN PHẨM", "BỘ SƯU TẬP", "VỀ ZAMY", "CỬA HÀNG"];

  return (
    <div className="w-full">
      {/* ══════ TOPBAR ══════ */}
      <div className="bg-peony overflow-hidden">
        <div className="marquee-track flex items-center gap-16 py-2 whitespace-nowrap" style={{ width: "200%" }}>
          {[0, 1].map((k) => (
            <div key={k} className="flex items-center gap-16 text-white text-[10px] tracking-[0.3em] uppercase">
              <span>Miễn phí giao hàng đơn từ 500K</span>
              <span className="opacity-40">✦</span>
              <span>Đổi trả miễn phí 30 ngày</span>
              <span className="opacity-40">✦</span>
              <span>Ưu đãi 20% khách hàng mới</span>
              <span className="opacity-40">✦</span>
            </div>
          ))}
        </div>
      </div>

      {/* ══════ HEADER ══════ */}
      <header className={`sticky top-0 z-50 bg-white transition-all duration-300 ${scrolled ? "header-scrolled" : ""}`}>
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="flex items-center justify-between h-16 lg:h-[72px]">
            <button className="lg:hidden text-charcoal" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
            <nav className="hidden lg:flex items-center gap-7">
              {navLinks.slice(0, 3).map((l) => (
                <a key={l} href="#" className="nav-link text-[11px] tracking-[0.18em] text-charcoal-light hover:text-peony transition-colors font-medium">{l}</a>
              ))}
            </nav>
            <Link href="/" className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2">
              <Image src="/logos/SUBMARK_GRADIENT.png" alt="ZAMY Peony" width={32} height={32} className="h-7 lg:h-8 w-auto" priority />
              <Image src="/logos/LOGOTYPE_REDWOOD.png" alt="ZAMY" width={90} height={30} className="h-5 lg:h-6 w-auto" priority />
            </Link>
            <div className="flex items-center gap-6">
              <nav className="hidden lg:flex items-center gap-7">
                {navLinks.slice(3).map((l) => (
                  <a key={l} href="#" className="nav-link text-[11px] tracking-[0.18em] text-charcoal-light hover:text-peony transition-colors font-medium">{l}</a>
                ))}
              </nav>
              <div className="flex items-center gap-4">
                <button className="text-charcoal hover:text-peony transition-colors" aria-label="Tìm kiếm"><Search size={18} strokeWidth={1.5} /></button>
                <button className="hidden sm:block text-charcoal hover:text-peony transition-colors" aria-label="Tài khoản"><User size={18} strokeWidth={1.5} /></button>
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
                <a key={l} href="#" className="text-[12px] tracking-[0.15em] text-charcoal-light hover:text-peony transition-colors py-1">{l}</a>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* ══════ HERO CAROUSEL ══════ */}
      <section className="relative w-full aspect-[21/9] max-h-[600px] overflow-hidden bg-petal">
        {heroSlides.map((s, i) => (
          <div key={i} className={`hero-slide absolute inset-0 ${i === slide ? "active z-10" : "z-0"}`}>
            <FadeImage src={s.image} alt={s.title} fill sizes="100vw" className="object-cover object-center" priority={i === 0} />
            {i === 0 && (
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <div className="text-center">
                  <p className="font-serif text-white/90 text-sm sm:text-base tracking-[0.4em] uppercase mb-3" style={{ textShadow: "0 1px 8px rgba(0,0,0,0.2)" }}>EST. 2012</p>
                  <h1 className="font-display text-white text-4xl sm:text-5xl lg:text-7xl mb-4" style={{ textShadow: "0 2px 20px rgba(0,0,0,0.15)" }}>Casually Perfect</h1>
                  <p className="font-serif text-white/80 text-sm sm:text-base italic tracking-wide mb-8" style={{ textShadow: "0 1px 8px rgba(0,0,0,0.2)" }}>{s.subtitle}</p>
                  <a href="#" className="inline-block border border-white/70 text-white text-[10px] sm:text-[11px] tracking-[0.25em] uppercase px-8 py-3 hover:bg-white hover:text-charcoal transition-all">{s.cta}</a>
                </div>
              </div>
            )}
          </div>
        ))}
        <button onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white/60 hover:bg-white/90 backdrop-blur-sm flex items-center justify-center text-charcoal transition-colors rounded-full" aria-label="Trước">
          <ChevronLeft size={18} />
        </button>
        <button onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white/60 hover:bg-white/90 backdrop-blur-sm flex items-center justify-center text-charcoal transition-colors rounded-full" aria-label="Tiếp">
          <ChevronRight size={18} />
        </button>
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {heroSlides.map((_, i) => (
            <button key={i} onClick={() => setSlide(i)} className={`h-1.5 rounded-full transition-all ${i === slide ? "bg-white w-7" : "bg-white/40 w-1.5"}`} aria-label={`Slide ${i + 1}`} />
          ))}
        </div>
      </section>

      <main>
        {/* ══════ NEW COLLECTION ══════ */}
        <section className="max-w-[1200px] mx-auto px-5 py-14 lg:py-20">
          <Reveal>
            <div className="text-center mb-10">
              <p className="text-[10px] tracking-[0.3em] text-warm-gray uppercase mb-2">Bộ sưu tập</p>
              <h2 className="font-display text-3xl lg:text-4xl text-charcoal">SẢN PHẨM MỚI</h2>
              <div className="w-10 h-[2px] bg-peony mx-auto mt-3" />
            </div>
          </Reveal>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
            {products.map((p, i) => (
              <Reveal key={i} delay={i * 80}>
                <Link href={`/product/${p.slug}`} className="product-card group block">
                  <div className="card-img relative aspect-[3/4] bg-petal mb-3 overflow-hidden rounded-sm">
                    <div className="card-img-inner relative w-full h-full">
                      <FadeImage src={p.image} alt={p.name} fill sizes="(max-width:768px) 50vw, 25vw" className="object-cover" />
                    </div>
                    {p.tag && (
                      <span className="absolute top-2 left-2 z-10 bg-peony text-white text-[9px] tracking-[0.1em] uppercase px-2.5 py-1 font-medium rounded-sm">{p.tag}</span>
                    )}
                    <div className="card-overlay absolute inset-0 z-10 bg-black/5 flex items-end justify-center pb-4 gap-2">
                      <span className="bg-white text-charcoal text-[10px] tracking-[0.12em] uppercase px-5 py-2.5 font-medium hover:bg-peony hover:text-white transition-colors rounded-sm">Xem chi tiết</span>
                      <button onClick={(e) => { e.preventDefault(); }} className="bg-white text-charcoal p-2.5 hover:bg-peony hover:text-white transition-colors rounded-sm">
                        <Heart size={14} strokeWidth={1.5} />
                      </button>
                    </div>
                  </div>
                  <div className="px-0.5">
                    <h3 className="text-[13px] text-charcoal leading-snug mb-1 group-hover:text-peony transition-colors line-clamp-2">{p.name}</h3>
                    <p className="text-[11px] text-warm-gray mb-1">Đã bán {p.sold}</p>
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
            <div className="text-center mt-10">
              <a href="#" className="inline-flex items-center gap-2 border border-charcoal text-charcoal px-8 py-3 text-[11px] tracking-[0.18em] uppercase font-medium hover:bg-charcoal hover:text-white transition-all rounded-sm">
                Xem tất cả sản phẩm <ArrowRight size={13} />
              </a>
            </div>
          </Reveal>
        </section>

        {/* ══════ BRAND STORY ══════ */}
        <section className="bg-white">
          <div className="max-w-[1200px] mx-auto px-5 py-14 lg:py-20">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              <Reveal>
                <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
                  <FadeImage src="/products/2.jpg" alt="ZAMY Lookbook" fill sizes="(max-width:1024px) 100vw, 50vw" className="object-cover" />
                </div>
              </Reveal>
              <Reveal delay={150}>
                <div>
                  <p className="text-[10px] tracking-[0.3em] text-warm-gray uppercase mb-2">Câu chuyện thương hiệu</p>
                  <h2 className="font-display text-3xl lg:text-4xl text-charcoal mb-5">CÂU CHUYỆN ZAMY</h2>
                  <div className="w-10 h-[2px] bg-peony mb-6" />
                  <p className="font-serif text-lg text-charcoal-light italic mb-5 leading-relaxed">&ldquo;Casually Perfect&rdquo; — hoàn hảo trong sự giản đơn.</p>
                  <p className="text-[14px] text-warm-gray leading-[1.8] mb-4">Được thành lập năm 2012, ZAMY mang đến cho phụ nữ Việt Nam những thiết kế thanh lịch mà không kém phần thoải mái. Mỗi sản phẩm là sự kết hợp hoàn hảo giữa chất liệu cao cấp, đường cắt tinh tế và phong cách thời thượng.</p>
                  <p className="text-[14px] text-warm-gray leading-[1.8] mb-8">Chúng tôi tin rằng thời trang không cần phải cầu kỳ để trở nên đẹp đẽ. Sự hoàn hảo nằm trong những điều giản dị nhất.</p>
                  <a href="#" className="inline-flex items-center gap-2 text-peony text-[11px] tracking-[0.18em] uppercase font-medium hover:gap-4 transition-all">Tìm hiểu thêm <ArrowRight size={13} /></a>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ══════ VIDEO LOOKBOOK ══════ */}
        <section className="bg-petal">
          <div className="max-w-[1200px] mx-auto px-5 py-14 lg:py-20">
            <Reveal>
              <div className="text-center mb-10">
                <p className="text-[10px] tracking-[0.3em] text-warm-gray uppercase mb-2">Video</p>
                <h2 className="font-display text-3xl lg:text-4xl text-charcoal">LOOKBOOK VIDEO</h2>
                <div className="w-10 h-[2px] bg-peony mx-auto mt-3" />
              </div>
            </Reveal>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <Reveal>
                <VideoCard src="/videos/1.mp4" title="Whisper Bloom — Summer '26" className="aspect-[9/16] max-h-[520px] lg:max-h-none" />
              </Reveal>
              <Reveal delay={150}>
                <VideoCard src="/videos/2.mp4" title="La Mienne Collection" className="aspect-[9/16] max-h-[520px] lg:max-h-none" />
              </Reveal>
            </div>
          </div>
        </section>

        {/* ══════ LOOKBOOK ══════ */}
        <section className="max-w-[1200px] mx-auto px-5 py-14 lg:py-20">
          <Reveal>
            <div className="text-center mb-10">
              <p className="text-[10px] tracking-[0.3em] text-warm-gray uppercase mb-2">Phong cách</p>
              <h2 className="font-display text-3xl lg:text-4xl text-charcoal">LOOKBOOK</h2>
              <div className="w-10 h-[2px] bg-peony mx-auto mt-3" />
            </div>
          </Reveal>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4">
            {[
              { img: "/products/1.jpg", title: "Thanh Lịch Công Sở", cls: "lg:col-span-2 lg:row-span-2", ratio: "aspect-[4/3] lg:aspect-auto lg:h-full" },
              { img: "/products/3.jpg", title: "Dạo Phố Cuối Tuần", cls: "", ratio: "aspect-square" },
              { img: "/products/4.jpg", title: "Hẹn Hò Lãng Mạn", cls: "", ratio: "aspect-square" },
              { img: "/products/2.jpg", title: "Dạ Hội Sang Trọng", cls: "", ratio: "aspect-[3/4]" },
              { img: "/products/1.jpg", title: "Đi Biển Tự Do", cls: "", ratio: "aspect-[3/4]" },
            ].map((item, i) => (
              <Reveal key={i} delay={i * 100}>
                <a href="#" className={`lookbook-card relative overflow-hidden block rounded-sm ${item.cls} ${item.ratio}`}>
                  <FadeImage src={item.img} alt={item.title} fill sizes="(max-width:768px) 50vw, 33vw" className="object-cover" />
                  <div className="lookbook-overlay absolute inset-0 bg-charcoal/25 flex items-center justify-center z-10">
                    <span className="text-white text-[12px] tracking-[0.2em] uppercase font-medium">{item.title}</span>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ══════ INSTAGRAM ══════ */}
        <section className="pb-0">
          <Reveal>
            <div className="text-center mb-8">
              <p className="text-[10px] tracking-[0.3em] text-warm-gray uppercase mb-2">Theo dõi chúng tôi</p>
              <h2 className="font-display text-2xl lg:text-3xl text-charcoal">@zamy.official</h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-3 lg:grid-cols-6">
            {["/products/1.jpg", "/products/2.jpg", "/products/3.jpg", "/products/4.jpg", "/products/1.jpg", "/products/3.jpg"].map((img, i) => (
              <a key={i} href="#" className="social-cell relative aspect-square overflow-hidden block">
                <div className="social-bg relative w-full h-full">
                  <FadeImage src={img} alt="Instagram" fill sizes="(max-width:768px) 33vw, 16vw" className="object-cover" />
                </div>
                <div className="social-hover absolute inset-0 bg-peony/30 flex items-center justify-center z-10">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                </div>
              </a>
            ))}
          </div>
        </section>
      </main>

      {/* ══════ FOOTER ══════ */}
      <footer className="bg-charcoal text-white/60">
        <div className="border-b border-white/10">
          <div className="max-w-[1200px] mx-auto px-5 py-12 flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="text-center lg:text-left">
              <h3 className="font-display text-xl text-white mb-1">Nhận ưu đãi mới nhất</h3>
              <p className="text-[13px] text-white/40">Đăng ký để nhận thông tin bộ sưu tập và khuyến mãi</p>
            </div>
            <div className="flex w-full max-w-sm">
              <input type="email" placeholder="Email của bạn" className="flex-1 bg-transparent border border-white/15 border-r-0 px-4 py-2.5 text-[13px] text-white placeholder:text-white/25 focus:outline-none focus:border-blush/40 rounded-l-sm" />
              <button className="bg-peony hover:bg-peony-dark text-white px-6 py-2.5 text-[10px] tracking-[0.18em] uppercase font-medium transition-colors rounded-r-sm">Đăng ký</button>
            </div>
          </div>
        </div>
        <div className="max-w-[1200px] mx-auto px-5 py-12">
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-8">
            <div className="col-span-2 lg:col-span-1">
              <Image src="/logos/LOGOTYPE_WHITE.png" alt="ZAMY" width={90} height={30} className="h-6 w-auto mb-4 opacity-80" />
              <p className="text-[12px] text-white/30 leading-relaxed mb-4">Casually Perfect — Thời trang nữ Việt Nam từ 2012.</p>
              <div className="flex gap-3">
                <a href="#" className="w-8 h-8 border border-white/10 rounded-sm flex items-center justify-center text-white/30 hover:text-white hover:border-white/30 transition-all">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                </a>
                <a href="#" className="w-8 h-8 border border-white/10 rounded-sm flex items-center justify-center text-white/30 hover:text-white hover:border-white/30 transition-all">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                </a>
              </div>
            </div>
            {[
              { title: "VỀ ZAMY", items: ["Giới thiệu", "Tuyển dụng", "Tin tức", "Hệ thống cửa hàng"] },
              { title: "HỖ TRỢ", items: ["Hướng dẫn mua hàng", "Hướng dẫn đổi trả", "Theo dõi đơn hàng", "Câu hỏi thường gặp"] },
              { title: "CHÍNH SÁCH", items: ["Chính sách bảo mật", "Chính sách thanh toán", "Chính sách vận chuyển", "Chính sách đổi trả"] },
            ].map((col) => (
              <div key={col.title}>
                <h4 className="text-[10px] tracking-[0.22em] uppercase text-white/80 mb-4 font-medium">{col.title}</h4>
                <ul className="space-y-2.5">{col.items.map((item) => (<li key={item}><a href="#" className="text-[12px] text-white/35 hover:text-blush transition-colors">{item}</a></li>))}</ul>
              </div>
            ))}
            <div>
              <h4 className="text-[10px] tracking-[0.22em] uppercase text-white/80 mb-4 font-medium">LIÊN HỆ</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-2.5"><MapPin size={13} className="text-blush/60 mt-0.5 shrink-0" /><span className="text-[12px] text-white/35 leading-relaxed">123 Nguyễn Huệ, Q.1, TP.HCM</span></li>
                <li className="flex items-center gap-2.5"><Phone size={13} className="text-blush/60 shrink-0" /><span className="text-[12px] text-white/35">0815 229 797</span></li>
                <li className="flex items-center gap-2.5"><Mail size={13} className="text-blush/60 shrink-0" /><span className="text-[12px] text-white/35">hello@zamy.vn</span></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-white/5">
          <div className="max-w-[1200px] mx-auto px-5 py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
            <p className="text-[10px] text-white/20 tracking-wider">© 2012 – 2025 ZAMY. All rights reserved.</p>
            <p className="text-[10px] text-white/20 tracking-wider">GPKD: 0123456789 — Cấp ngày 01/06/2012</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
