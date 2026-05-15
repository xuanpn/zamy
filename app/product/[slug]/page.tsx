"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import {
  ChevronLeft,
  ChevronRight,
  Heart,
  ShoppingBag,
  Share2,
  Minus,
  Plus,
  Star,
  Truck,
  RotateCcw,
  Shield,
  Search,
  User,
  MapPin,
  Phone,
  Mail,
  Play,
  ArrowLeft,
} from "lucide-react";

/* ───── PRODUCT DATA ───── */

const allProducts = [
  {
    slug: "ao-ren-theu-no-den",
    name: "Áo Ren Thêu Nơ Đen",
    price: 495000,
    oldPrice: 650000,
    sold: 245,
    tag: "Bán chạy",
    images: ["/products/1.jpg", "/products/2.jpg", "/products/3.jpg", "/products/4.jpg"],
    video: "/videos/sample.mp4",
    colors: ["Đen", "Trắng", "Hồng pastel"],
    sizes: ["S", "M", "L", "XL"],
    rating: 4.8,
    reviews: 128,
    category: "Áo",
    sku: "ZAMY-AO-001",
    description: `Áo ren thêu tinh tế với nơ đen thanh lịch, tôn dáng vẻ nữ tính và sang trọng. Chất liệu ren cao cấp nhập khẩu, mềm mại và thoáng mát.\n\nThiết kế phù hợp cho nhiều dịp từ đi làm, dạo phố đến dự tiệc nhẹ nhàng.`,
    details: [
      "Chất liệu: Ren cotton pha polyester cao cấp",
      "Kiểu dáng: Regular fit, tay ngắn",
      "Chi tiết: Thêu hoa nổi, nơ đen cổ tròn",
      "Lưu ý: Giặt tay hoặc giặt máy chế độ nhẹ",
      "Xuất xứ: Việt Nam",
    ],
  },
  {
    slug: "dam-xep-ly-co-thuyen",
    name: "Đầm Xếp Ly Cổ Thuyền",
    price: 585000,
    oldPrice: null,
    sold: 89,
    tag: null,
    images: ["/products/2.jpg", "/products/1.jpg", "/products/4.jpg", "/products/3.jpg"],
    video: null,
    colors: ["Navy", "Đen", "Xanh rêu"],
    sizes: ["S", "M", "L"],
    rating: 4.9,
    reviews: 67,
    category: "Đầm",
    sku: "ZAMY-DAM-002",
    description: `Đầm xếp ly cổ thuyền duyên dáng, mang phong cách cổ điển Hội An. Chất vải mềm rũ, tạo nếp xếp ly tự nhiên và thanh thoát khi di chuyển.\n\nPhù hợp cho những buổi hẹn hò, đi chơi cuối tuần hay du lịch.`,
    details: [
      "Chất liệu: Vải chiffon lụa pha",
      "Kiểu dáng: A-line, dài qua gối",
      "Chi tiết: Cổ thuyền, xếp ly đều toàn thân",
      "Lưu ý: Là hơi nước, không vắt mạnh",
      "Xuất xứ: Việt Nam",
    ],
  },
  {
    slug: "dam-hoa-nhi-vintage",
    name: "Đầm Hoa Nhí Vintage",
    price: 455000,
    oldPrice: 599000,
    sold: 310,
    tag: "Hot",
    images: ["/products/3.jpg", "/products/1.jpg", "/products/2.jpg", "/products/4.jpg"],
    video: "/videos/sample.mp4",
    colors: ["Hoa cam", "Hoa xanh", "Hoa đỏ"],
    sizes: ["S", "M", "L", "XL"],
    rating: 4.7,
    reviews: 234,
    category: "Đầm",
    sku: "ZAMY-DAM-003",
    description: `Đầm hoa nhí phong cách vintage nhẹ nhàng, nữ tính. Họa tiết hoa nhí được in kỹ thuật số sắc nét, không phai màu sau nhiều lần giặt.\n\nThiết kế dáng xòe trẻ trung, phù hợp cho các cô nàng yêu thích phong cách retro.`,
    details: [
      "Chất liệu: Cotton 100% in hoa kỹ thuật số",
      "Kiểu dáng: Xòe, dài mini",
      "Chi tiết: Cổ vuông, tay bồng ngắn",
      "Lưu ý: Giặt lộn trái, không dùng chất tẩy",
      "Xuất xứ: Việt Nam",
    ],
  },
  {
    slug: "dam-trang-voan-du-tiec",
    name: "Đầm Trắng Voan Dự Tiệc",
    price: 895000,
    oldPrice: null,
    sold: 56,
    tag: "Mới",
    images: ["/products/4.jpg", "/products/2.jpg", "/products/3.jpg", "/products/1.jpg"],
    video: null,
    colors: ["Trắng", "Champagne"],
    sizes: ["S", "M", "L"],
    rating: 5.0,
    reviews: 23,
    category: "Đầm",
    sku: "ZAMY-DAM-004",
    description: `Đầm trắng voan dự tiệc sang trọng và lộng lẫy. Chất voan nhiều lớp tạo độ bồng bềnh, kết hợp lót satin mềm mại bên trong.\n\nLựa chọn hoàn hảo cho tiệc cưới, sinh nhật hay các sự kiện đặc biệt.`,
    details: [
      "Chất liệu: Voan cao cấp, lót satin",
      "Kiểu dáng: A-line bồng, dài midi",
      "Chi tiết: Eo cao, nơ lưng, vai bồng nhẹ",
      "Lưu ý: Nên giặt khô chuyên nghiệp",
      "Xuất xứ: Việt Nam",
    ],
  },
  {
    slug: "ao-blouse-tay-phong",
    name: "Áo Blouse Tay Phồng",
    price: 395000,
    oldPrice: 520000,
    sold: 432,
    tag: null,
    images: ["/products/1.jpg", "/products/3.jpg", "/products/4.jpg", "/products/2.jpg"],
    video: null,
    colors: ["Trắng", "Hồng nhạt", "Xanh baby"],
    sizes: ["S", "M", "L", "XL"],
    rating: 4.6,
    reviews: 312,
    category: "Áo",
    sku: "ZAMY-AO-005",
    description: `Áo blouse tay phồng nữ tính, thiết kế đơn giản nhưng tinh tế. Tay phồng nhẹ tạo điểm nhấn thanh lịch, phù hợp mặc đi làm và dạo phố.`,
    details: [
      "Chất liệu: Vải tơ nhân tạo",
      "Kiểu dáng: Regular fit, tay phồng",
      "Chi tiết: Cổ tròn, khuy sau lưng",
      "Lưu ý: Là ở nhiệt độ thấp",
      "Xuất xứ: Việt Nam",
    ],
  },
  {
    slug: "vay-lien-than-a-line",
    name: "Váy Liền Thân A-line",
    price: 755000,
    oldPrice: null,
    sold: 167,
    tag: "Mới",
    images: ["/products/2.jpg", "/products/4.jpg", "/products/1.jpg", "/products/3.jpg"],
    video: null,
    colors: ["Đen", "Nâu", "Navy"],
    sizes: ["S", "M", "L"],
    rating: 4.8,
    reviews: 89,
    category: "Váy",
    sku: "ZAMY-VAY-006",
    description: `Váy liền thân dáng A-line thanh lịch, tôn vóc dáng mọi cô nàng. Thiết kế tối giản nhưng tinh tế, phù hợp cho môi trường công sở và các buổi gặp mặt.`,
    details: [
      "Chất liệu: Vải tweed pha cotton",
      "Kiểu dáng: A-line, dài qua gối",
      "Chi tiết: Eo cao, túi ẩn hai bên",
      "Lưu ý: Giặt máy chế độ nhẹ",
      "Xuất xứ: Việt Nam",
    ],
  },
  {
    slug: "set-croptop-chan-vay",
    name: "Set Croptop & Chân Váy",
    price: 850000,
    oldPrice: 1050000,
    sold: 78,
    tag: null,
    images: ["/products/3.jpg", "/products/2.jpg", "/products/4.jpg", "/products/1.jpg"],
    video: "/videos/sample.mp4",
    colors: ["Trắng đen", "Hồng nude"],
    sizes: ["S", "M", "L"],
    rating: 4.9,
    reviews: 45,
    category: "Set",
    sku: "ZAMY-SET-007",
    description: `Set croptop phối chân váy hiện đại, trẻ trung. Croptop ôm body tôn đường cong, kết hợp chân váy xòe tạo nên bộ đôi hoàn hảo cho mùa hè.`,
    details: [
      "Chất liệu: Thun cotton co giãn + Vải taffeta",
      "Kiểu dáng: Croptop ôm + Váy xòe",
      "Chi tiết: Set 2 món, có thể mix riêng",
      "Lưu ý: Giặt riêng 2 món",
      "Xuất xứ: Việt Nam",
    ],
  },
  {
    slug: "dam-suong-toi-gian",
    name: "Đầm Suông Tối Giản",
    price: 695000,
    oldPrice: null,
    sold: 120,
    tag: "Mới",
    images: ["/products/4.jpg", "/products/1.jpg", "/products/2.jpg", "/products/3.jpg"],
    video: null,
    colors: ["Be", "Đen", "Xám"],
    sizes: ["S", "M", "L", "XL"],
    rating: 4.7,
    reviews: 98,
    category: "Đầm",
    sku: "ZAMY-DAM-008",
    description: `Đầm suông tối giản phong cách minimalist hiện đại. Dáng suông rộng thoải mái, che khuyết điểm cơ thể, phù hợp mặc hàng ngày lẫn đi làm.`,
    details: [
      "Chất liệu: Linen pha viscose",
      "Kiểu dáng: Suông rộng, dài midi",
      "Chi tiết: Cổ tròn, túi ẩn bên hông",
      "Lưu ý: Là hơi nước ở nhiệt độ trung bình",
      "Xuất xứ: Việt Nam",
    ],
  },
];

const fmt = (n: number) => n.toLocaleString("vi-VN") + "₫";

/* ───── FADE IMAGE ───── */

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

/* ───── COMPONENT ───── */

export default function ProductPage() {
  const params = useParams();
  const slug = params.slug as string;
  const product = allProducts.find((p) => p.slug === slug);

  const [activeMedia, setActiveMedia] = useState(0);
  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedSize, setSelectedSize] = useState<number | null>(null);
  const [qty, setQty] = useState(1);
  const [liked, setLiked] = useState(false);
  const [tab, setTab] = useState<"desc" | "details" | "reviews">("desc");
  const [scrolled, setScrolled] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const thumbContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center font-body">
        <div className="text-center">
          <p className="text-6xl font-serif text-peony mb-4">404</p>
          <p className="text-warm-gray mb-6">Sản phẩm không tồn tại</p>
          <Link href="/" className="text-peony underline underline-offset-4">Về trang chủ</Link>
        </div>
      </div>
    );
  }

  const mediaItems: { type: "image" | "video"; src: string }[] = [
    ...product.images.map((src) => ({ type: "image" as const, src })),
    ...(product.video ? [{ type: "video" as const, src: product.video }] : []),
  ];

  const discount = product.oldPrice
    ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)
    : null;

  const relatedProducts = allProducts.filter((p) => p.slug !== slug).slice(0, 4);

  return (
    <div className="w-full font-body">
      {/* ══════ HEADER ══════ */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "header-scrolled py-3" : "bg-white py-4"
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-5 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-charcoal hover:text-peony transition-colors">
            <ArrowLeft size={18} />
            <span className="text-xs tracking-[0.15em] uppercase hidden sm:inline">Quay lại</span>
          </Link>
          <Link href="/">
            <Image src="/logos/LOGOTYPE_REDWOOD.png" alt="ZAMY" width={100} height={28} className="h-6 w-auto" />
          </Link>
          <div className="flex items-center gap-4">
            <button className="text-charcoal hover:text-peony transition-colors"><Search size={18} /></button>
            <button className="text-charcoal hover:text-peony transition-colors"><User size={18} /></button>
            <button className="relative text-charcoal hover:text-peony transition-colors">
              <ShoppingBag size={18} />
              <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-peony text-white text-[9px] rounded-full flex items-center justify-center">0</span>
            </button>
          </div>
        </div>
      </header>

      <main className="pt-20">
        {/* ══════ BREADCRUMB ══════ */}
        <div className="max-w-[1200px] mx-auto px-5 py-4">
          <nav className="flex items-center gap-2 text-xs text-warm-gray">
            <Link href="/" className="hover:text-peony transition-colors">Trang chủ</Link>
            <span>/</span>
            <span className="hover:text-peony transition-colors cursor-pointer">{product.category}</span>
            <span>/</span>
            <span className="text-charcoal">{product.name}</span>
          </nav>
        </div>

        {/* ══════ PRODUCT MAIN ══════ */}
        <div className="max-w-[1200px] mx-auto px-5 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

            {/* ── MEDIA GALLERY ── */}
            <div className="space-y-3">
              {/* Main image / video */}
              <div className="relative aspect-[3/4] rounded-lg overflow-hidden bg-petal group">
                {mediaItems[activeMedia].type === "video" ? (
                  <video
                    ref={videoRef}
                    src={mediaItems[activeMedia].src}
                    className="w-full h-full object-cover"
                    controls
                    playsInline
                    preload="metadata"
                  />
                ) : (
                  <FadeImage
                    src={mediaItems[activeMedia].src}
                    alt={product.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />
                )}

                {/* Sale tag */}
                {discount && (
                  <div className="absolute top-4 left-4 bg-peony text-white text-xs tracking-wider px-3 py-1.5 rounded-sm">
                    -{discount}%
                  </div>
                )}

                {/* Like button */}
                <button
                  onClick={() => setLiked(!liked)}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-sm hover:scale-110 transition-transform"
                >
                  <Heart
                    size={18}
                    className={liked ? "fill-peony text-peony" : "text-charcoal"}
                  />
                </button>

                {/* Nav arrows */}
                {mediaItems.length > 1 && (
                  <>
                    <button
                      onClick={() => setActiveMedia((i) => (i - 1 + mediaItems.length) % mediaItems.length)}
                      className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-sm"
                    >
                      <ChevronLeft size={16} />
                    </button>
                    <button
                      onClick={() => setActiveMedia((i) => (i + 1) % mediaItems.length)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-sm"
                    >
                      <ChevronRight size={16} />
                    </button>
                  </>
                )}
              </div>

              {/* Thumbnails */}
              <div ref={thumbContainerRef} className="flex gap-2 overflow-x-auto pb-1 scrollbar-none">
                {mediaItems.map((item, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveMedia(i)}
                    className={`relative flex-shrink-0 w-16 h-20 rounded overflow-hidden border-2 transition-all ${
                      activeMedia === i ? "border-peony" : "border-transparent hover:border-warm-gray-light"
                    }`}
                  >
                    {item.type === "video" ? (
                      <div className="w-full h-full bg-charcoal/10 flex items-center justify-center">
                        <Play size={14} className="text-peony" />
                      </div>
                    ) : (
                      <Image src={item.src} alt="" fill className="object-cover" sizes="64px" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* ── PRODUCT INFO ── */}
            <div className="lg:py-2">
              {/* Tag */}
              {product.tag && (
                <span className="inline-block text-[10px] tracking-[0.2em] uppercase text-peony border border-peony/30 px-2.5 py-1 rounded-sm mb-3">
                  {product.tag}
                </span>
              )}

              <h1 className="font-serif text-2xl sm:text-3xl text-charcoal leading-tight mb-2">
                {product.name}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center gap-0.5">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star
                      key={s}
                      size={13}
                      className={s <= Math.round(product.rating) ? "fill-gold text-gold" : "text-warm-gray-light"}
                    />
                  ))}
                </div>
                <span className="text-xs text-warm-gray">{product.rating} ({product.reviews} đánh giá)</span>
                <span className="text-xs text-warm-gray">|</span>
                <span className="text-xs text-warm-gray">Đã bán {product.sold}</span>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-3 mb-6 pb-6 border-b border-petal">
                <span className="text-2xl font-serif text-peony">{fmt(product.price)}</span>
                {product.oldPrice && (
                  <>
                    <span className="text-sm text-warm-gray line-through">{fmt(product.oldPrice)}</span>
                    <span className="text-xs bg-peony/10 text-peony px-2 py-0.5 rounded">-{discount}%</span>
                  </>
                )}
              </div>

              {/* Color */}
              <div className="mb-5">
                <p className="text-xs tracking-[0.1em] uppercase text-charcoal-light mb-2.5">
                  Màu sắc: <span className="text-charcoal font-medium">{product.colors[selectedColor]}</span>
                </p>
                <div className="flex gap-2">
                  {product.colors.map((c, i) => (
                    <button
                      key={c}
                      onClick={() => setSelectedColor(i)}
                      className={`px-4 py-2 text-xs border rounded transition-all ${
                        selectedColor === i
                          ? "border-peony text-peony bg-peony/5"
                          : "border-warm-gray-light text-charcoal-light hover:border-charcoal"
                      }`}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </div>

              {/* Size */}
              <div className="mb-5">
                <div className="flex items-center justify-between mb-2.5">
                  <p className="text-xs tracking-[0.1em] uppercase text-charcoal-light">Kích thước</p>
                  <button className="text-[11px] text-peony underline underline-offset-2">Hướng dẫn chọn size</button>
                </div>
                <div className="flex gap-2">
                  {product.sizes.map((s, i) => (
                    <button
                      key={s}
                      onClick={() => setSelectedSize(i)}
                      className={`w-12 h-10 text-xs border rounded transition-all ${
                        selectedSize === i
                          ? "border-peony text-peony bg-peony/5 font-medium"
                          : "border-warm-gray-light text-charcoal-light hover:border-charcoal"
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div className="mb-6">
                <p className="text-xs tracking-[0.1em] uppercase text-charcoal-light mb-2.5">Số lượng</p>
                <div className="inline-flex items-center border border-warm-gray-light rounded">
                  <button
                    onClick={() => setQty((q) => Math.max(1, q - 1))}
                    className="w-10 h-10 flex items-center justify-center text-charcoal-light hover:text-charcoal transition-colors"
                  >
                    <Minus size={14} />
                  </button>
                  <span className="w-12 h-10 flex items-center justify-center text-sm border-x border-warm-gray-light">
                    {qty}
                  </span>
                  <button
                    onClick={() => setQty((q) => q + 1)}
                    className="w-10 h-10 flex items-center justify-center text-charcoal-light hover:text-charcoal transition-colors"
                  >
                    <Plus size={14} />
                  </button>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex gap-3 mb-6">
                <button className="flex-1 h-12 bg-peony text-white text-xs tracking-[0.2em] uppercase rounded hover:bg-peony-dark transition-colors flex items-center justify-center gap-2">
                  <ShoppingBag size={15} />
                  Thêm vào giỏ
                </button>
                <button className="flex-1 h-12 border border-peony text-peony text-xs tracking-[0.2em] uppercase rounded hover:bg-peony hover:text-white transition-all flex items-center justify-center">
                  Mua ngay
                </button>
              </div>

              {/* Share */}
              <button className="flex items-center gap-2 text-xs text-warm-gray hover:text-peony transition-colors mb-8">
                <Share2 size={14} />
                Chia sẻ sản phẩm
              </button>

              {/* Perks */}
              <div className="grid grid-cols-3 gap-3 py-5 border-t border-b border-petal">
                <div className="flex flex-col items-center text-center gap-1.5">
                  <Truck size={18} className="text-peony" />
                  <span className="text-[10px] text-warm-gray leading-tight">Miễn phí giao<br />đơn từ 500K</span>
                </div>
                <div className="flex flex-col items-center text-center gap-1.5">
                  <RotateCcw size={18} className="text-peony" />
                  <span className="text-[10px] text-warm-gray leading-tight">Đổi trả<br />30 ngày</span>
                </div>
                <div className="flex flex-col items-center text-center gap-1.5">
                  <Shield size={18} className="text-peony" />
                  <span className="text-[10px] text-warm-gray leading-tight">Bảo hành<br />chất lượng</span>
                </div>
              </div>

              {/* SKU */}
              <p className="text-[10px] text-warm-gray mt-4">SKU: {product.sku}</p>
            </div>
          </div>

          {/* ══════ TABS ══════ */}
          <div className="mt-16 border-t border-petal pt-8">
            <div className="flex gap-8 border-b border-petal mb-8">
              {([
                { key: "desc", label: "Mô tả" },
                { key: "details", label: "Chi tiết" },
                { key: "reviews", label: `Đánh giá (${product.reviews})` },
              ] as const).map((t) => (
                <button
                  key={t.key}
                  onClick={() => setTab(t.key)}
                  className={`pb-3 text-sm tracking-wide transition-colors relative ${
                    tab === t.key ? "text-peony" : "text-warm-gray hover:text-charcoal"
                  }`}
                >
                  {t.label}
                  {tab === t.key && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-peony" />
                  )}
                </button>
              ))}
            </div>

            {tab === "desc" && (
              <div className="max-w-2xl">
                {product.description.split("\n\n").map((p, i) => (
                  <p key={i} className="text-sm text-charcoal-light leading-relaxed mb-4">{p}</p>
                ))}
              </div>
            )}

            {tab === "details" && (
              <ul className="max-w-2xl space-y-3">
                {product.details.map((d, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-charcoal-light">
                    <span className="w-1 h-1 rounded-full bg-peony mt-2 flex-shrink-0" />
                    {d}
                  </li>
                ))}
              </ul>
            )}

            {tab === "reviews" && (
              <div className="max-w-2xl">
                <div className="flex items-center gap-6 mb-8 p-6 bg-petal/50 rounded-lg">
                  <div className="text-center">
                    <p className="text-4xl font-serif text-peony">{product.rating}</p>
                    <div className="flex items-center gap-0.5 mt-1 justify-center">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <Star key={s} size={12} className={s <= Math.round(product.rating) ? "fill-gold text-gold" : "text-warm-gray-light"} />
                      ))}
                    </div>
                    <p className="text-xs text-warm-gray mt-1">{product.reviews} đánh giá</p>
                  </div>
                  <div className="flex-1 space-y-1.5">
                    {[5, 4, 3, 2, 1].map((stars) => {
                      const pct = stars === 5 ? 72 : stars === 4 ? 20 : stars === 3 ? 5 : stars === 2 ? 2 : 1;
                      return (
                        <div key={stars} className="flex items-center gap-2 text-xs text-warm-gray">
                          <span className="w-3">{stars}</span>
                          <Star size={10} className="fill-gold text-gold" />
                          <div className="flex-1 h-1.5 bg-warm-gray-light/30 rounded-full overflow-hidden">
                            <div className="h-full bg-gold rounded-full" style={{ width: `${pct}%` }} />
                          </div>
                          <span className="w-8 text-right">{pct}%</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Sample reviews */}
                <div className="space-y-6">
                  {[
                    { name: "Minh Anh", date: "15/04/2025", rating: 5, text: "Đầm rất đẹp, đúng như hình. Vải mềm mịn, mặc rất thoải mái. Giao hàng nhanh, đóng gói cẩn thận." },
                    { name: "Thúy Ngân", date: "10/04/2025", rating: 5, text: "Mua lần thứ 2 rồi, chất lượng luôn ổn định. Màu rất đẹp, form chuẩn." },
                    { name: "Hương Giang", date: "02/04/2025", rating: 4, text: "Sản phẩm ổn, chất vải tốt. Chỉ hơi rộng so với size thường mặc." },
                  ].map((r, i) => (
                    <div key={i} className="pb-6 border-b border-petal last:border-0">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-8 h-8 bg-blush-light rounded-full flex items-center justify-center text-xs font-medium text-peony-deep">
                          {r.name[0]}
                        </div>
                        <div>
                          <p className="text-sm font-medium text-charcoal">{r.name}</p>
                          <div className="flex items-center gap-2">
                            <div className="flex">
                              {[1, 2, 3, 4, 5].map((s) => (
                                <Star key={s} size={10} className={s <= r.rating ? "fill-gold text-gold" : "text-warm-gray-light"} />
                              ))}
                            </div>
                            <span className="text-[10px] text-warm-gray">{r.date}</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-sm text-charcoal-light leading-relaxed">{r.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* ══════ RELATED PRODUCTS ══════ */}
          <div className="mt-20">
            <h2 className="font-serif text-xl text-center mb-8">Sản phẩm liên quan</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {relatedProducts.map((p) => (
                <Link key={p.slug} href={`/product/${p.slug}`} className="product-card group block">
                  <div className="card-img relative aspect-[3/4] rounded-lg overflow-hidden bg-petal mb-3">
                    <div className="card-img-inner relative w-full h-full">
                      <FadeImage src={p.images[0]} alt={p.name} fill className="object-cover" sizes="(max-width: 640px) 50vw, 25vw" />
                    </div>
                    {p.tag && (
                      <span className="absolute top-2 left-2 bg-peony text-white text-[9px] tracking-wider px-2 py-1">
                        {p.tag}
                      </span>
                    )}
                    <div className="card-overlay absolute inset-0 bg-charcoal/10 flex items-center justify-center">
                      <span className="bg-white text-charcoal text-[10px] tracking-[0.15em] uppercase px-5 py-2.5 rounded-sm">Xem chi tiết</span>
                    </div>
                  </div>
                  <h3 className="text-xs text-charcoal mb-1 group-hover:text-peony transition-colors line-clamp-1">{p.name}</h3>
                  <div className="flex items-baseline gap-2">
                    <span className="text-sm font-serif text-peony">{fmt(p.price)}</span>
                    {p.oldPrice && <span className="text-[10px] text-warm-gray line-through">{fmt(p.oldPrice)}</span>}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* ══════ FOOTER ══════ */}
      <footer className="bg-charcoal text-white/70">
        <div className="max-w-[1200px] mx-auto px-5 py-14">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            <div>
              <Image src="/logos/LOGOTYPE_WHITE.png" alt="ZAMY" width={120} height={34} className="h-7 w-auto mb-4 opacity-90" />
              <p className="text-xs leading-relaxed">Casually Perfect since 2012. Thương hiệu thời trang nữ với phong cách thanh lịch và hiện đại.</p>
            </div>
            <div>
              <h4 className="text-white text-[11px] tracking-[0.2em] uppercase mb-4">Hỗ trợ</h4>
              <ul className="space-y-2 text-xs">
                <li><a href="#" className="hover:text-white transition-colors">Hướng dẫn mua hàng</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Chính sách đổi trả</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Bảng size</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white text-[11px] tracking-[0.2em] uppercase mb-4">Chính sách</h4>
              <ul className="space-y-2 text-xs">
                <li><a href="#" className="hover:text-white transition-colors">Chính sách bảo mật</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Điều khoản sử dụng</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Chính sách vận chuyển</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white text-[11px] tracking-[0.2em] uppercase mb-4">Liên hệ</h4>
              <ul className="space-y-2.5 text-xs">
                <li className="flex items-start gap-2"><MapPin size={13} className="mt-0.5 flex-shrink-0 text-blush" /> 123 Nguyễn Huệ, Q.1, TP.HCM</li>
                <li className="flex items-center gap-2"><Phone size={13} className="flex-shrink-0 text-blush" /> 0901 234 567</li>
                <li className="flex items-center gap-2"><Mail size={13} className="flex-shrink-0 text-blush" /> hello@zamy.vn</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 py-5">
          <p className="text-center text-[10px] text-white/40 tracking-wide">© 2025 ZAMY. All rights reserved.</p>
        </div>
      </footer>

      {/* ══════ MOBILE STICKY CTA ══════ */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-petal p-3 flex gap-2 lg:hidden z-40">
        <button className="flex-1 h-11 bg-peony text-white text-xs tracking-[0.15em] uppercase rounded flex items-center justify-center gap-2">
          <ShoppingBag size={14} />
          Thêm vào giỏ — {fmt(product.price)}
        </button>
      </div>
    </div>
  );
}
