"use client";

import { useState } from "react";
import { Reveal, VideoCard, VideoLightbox } from "./Shared";

const looks = [
  {
    src: "/videos/1.mp4",
    number: "01",
    season: "Summer '26",
    title: "Whisper Bloom",
    note: "La Mienne",
  },
  {
    src: "/videos/2.mp4",
    number: "02",
    season: "Collection",
    title: "La Mienne",
    note: "Editorial",
  },
];

export function VideoLookbook() {
  const [lightboxVideo, setLightboxVideo] = useState<string | null>(null);

  return (
    <section className="bg-white">
      <div className="max-w-[1280px] mx-auto px-5 py-20 lg:py-28">
        {/* Editorial header — restrained */}
        <Reveal>
          <div className="mb-12 lg:mb-16 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <p className="text-[10px] tracking-[0.4em] text-peony uppercase mb-3 font-medium">— Lookbook —</p>
              <h2 className="font-display text-charcoal italic leading-[0.95]">
                <span className="block text-4xl lg:text-[68px]">In motion.</span>
              </h2>
            </div>
            <a href="#" className="hidden sm:inline-flex items-center gap-2 text-[10px] tracking-[0.28em] uppercase text-charcoal-light hover:text-peony border-b border-charcoal-light/25 hover:border-peony pb-1.5 transition-colors">
              Xem tất cả videos →
            </a>
          </div>
        </Reveal>

        {/* Asymmetric video grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-14">
          {looks.map((l, i) => (
            <Reveal
              key={l.number}
              delay={i * 200}
              className={i === 1 ? "lg:mt-24" : ""}
            >
              <div className="group">
                <VideoCard
                  src={l.src}
                  className="aspect-[3/4] max-h-[640px]"
                  onPlay={() => setLightboxVideo(l.src)}
                />

                {/* Caption below — editorial style */}
                <div className="mt-5 lg:mt-7 flex items-baseline justify-between gap-6 border-b border-charcoal/8 pb-4">
                  <div className="flex items-baseline gap-5">
                    <span className="font-display italic text-3xl lg:text-4xl text-peony leading-none">
                      No. {l.number}
                    </span>
                    <div className="hidden sm:block w-12 h-px bg-charcoal/20 self-center" />
                    <div>
                      <p className="text-[10px] tracking-[0.28em] text-warm-gray uppercase mb-1">{l.season}</p>
                      <h3 className="font-display italic text-2xl lg:text-3xl text-charcoal leading-none">
                        {l.title}
                      </h3>
                    </div>
                  </div>
                  <span className="hidden sm:inline-block text-[10px] tracking-[0.25em] uppercase text-warm-gray italic shrink-0">
                    {l.note}
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
      {lightboxVideo && <VideoLightbox src={lightboxVideo} onClose={() => setLightboxVideo(null)} />}
    </section>
  );
}
