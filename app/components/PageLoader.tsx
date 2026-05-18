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
    const duration = isFirstLoad.current ? 800 : 500;
    isFirstLoad.current = false;
    const timer = setTimeout(() => setLoading(false), duration);
    return () => clearTimeout(timer);
  }, [pathname]);

  if (!loading) return null;

  return (
    <div className="page-loader fixed inset-0 z-[200] bg-white flex flex-col items-center justify-center">
      <div className="peony-spin relative w-16 h-16 mb-4">
        <Image
          src="/logos/SUBMARK_GRADIENT.png"
          alt="Loading"
          width={64}
          height={64}
          className="w-16 h-16"
          priority
        />
      </div>
      <p className="text-[10px] tracking-[0.3em] text-warm-gray uppercase">Loading...</p>
    </div>
  );
}
