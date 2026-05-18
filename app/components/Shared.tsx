"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { X, Play } from "lucide-react";

export const fmt = (n: number) => n.toLocaleString("vi-VN") + "₫";

/* IMAGE WITH FADE LOADING */
export function FadeImage({ src, alt, fill, className, sizes, priority }: {
  src: string; alt: string; fill?: boolean; className?: string; sizes?: string; priority?: boolean;
}) {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className={`relative ${fill ? "w-full h-full" : ""}`}>
      {!loaded && <div className="absolute inset-0 bg-gradient-to-br from-petal to-blush-light animate-pulse" />}
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

/* SCROLL REVEAL */
export function Reveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
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

/* VIDEO LIGHTBOX */
export function VideoLightbox({ src, onClose }: { src: string; onClose: () => void }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    requestAnimationFrame(() => setVisible(true));
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") handleClose(); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handleClose = () => { setVisible(false); setTimeout(onClose, 300); };
  return (
    <div className={`fixed inset-0 z-[100] flex items-center justify-center transition-all duration-300 ${visible ? "opacity-100" : "opacity-0"}`} onClick={handleClose}>
      <div className="absolute inset-0 bg-charcoal/80 backdrop-blur-sm" />
      <div className={`relative z-10 w-[90vw] max-w-[480px] max-h-[85vh] transition-all duration-300 ${visible ? "scale-100 translate-y-0" : "scale-95 translate-y-4"}`} onClick={(e) => e.stopPropagation()}>
        <button onClick={handleClose} className="absolute -top-10 right-0 text-white/70 hover:text-white transition-colors text-sm tracking-wider flex items-center gap-1.5">
          Đóng <X size={16} />
        </button>
        <div className="rounded-lg overflow-hidden shadow-2xl bg-black">
          <video ref={videoRef} src={src} className="w-full max-h-[85vh] object-contain" controls autoPlay playsInline />
        </div>
      </div>
    </div>
  );
}

/* VIDEO CARD */
export function VideoCard({ src, title, className, onPlay }: { src: string; title?: string; className?: string; onPlay: () => void }) {
  return (
    <div className={`video-card relative overflow-hidden rounded-sm cursor-pointer group ${className ?? ""}`} onClick={onPlay}>
      <video src={src} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" muted playsInline preload="metadata" />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/30 via-transparent to-transparent transition-opacity duration-500 group-hover:opacity-60 opacity-100" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="play-btn w-14 h-14 lg:w-16 lg:h-16 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
          <Play size={20} className="text-peony ml-0.5" fill="currentColor" />
        </div>
      </div>
      {title && (
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-charcoal/60 to-transparent">
          <p className="text-white text-xs tracking-[0.1em] uppercase">{title}</p>
        </div>
      )}
    </div>
  );
}
