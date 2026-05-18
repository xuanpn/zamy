"use client";

import { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function PageLoader() {
  const pathname = usePathname();
  const [loading, setLoading] = useState(true);
  const isFirstLoad = useRef(true);

  useEffect(() => {
    setLoading(true);
    const duration = isFirstLoad.current ? 900 : 550;
    isFirstLoad.current = false;
    const timer = setTimeout(() => setLoading(false), duration);
    return () => clearTimeout(timer);
  }, [pathname]);

  if (!loading) return null;

  return (
    <div className="page-loader fixed inset-0 z-[200] bg-cream/95 backdrop-blur-sm flex flex-col items-center justify-center">
      <div className="zamy-loader">
        <Image
          src="/logos/SUBMARK_GRADIENT.png"
          alt="ZAMY"
          width={76}
          height={76}
          className="zamy-loader-logo"
          priority
        />
        <div className="zamy-orbit">
          <span className="zamy-star" />
        </div>
      </div>
      <p className="mt-6 text-[9px] tracking-[0.45em] text-peony-dark uppercase font-serif italic opacity-70">
        zamy
      </p>
    </div>
  );
}
