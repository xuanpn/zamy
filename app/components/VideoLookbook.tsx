"use client";

import { useState } from "react";
import { Reveal, VideoCard, VideoLightbox } from "./Shared";

export function VideoLookbook() {
  const [lightboxVideo, setLightboxVideo] = useState<string | null>(null);

  return (
    <section className="bg-petal">
      <div className="max-w-[1280px] mx-auto px-5 py-16 lg:py-24">
        <Reveal>
          <div className="text-center mb-12">
            <p className="text-[10px] tracking-[0.32em] text-warm-gray uppercase mb-3">Lookbook</p>
            <h2 className="font-display text-3xl lg:text-[42px] text-charcoal italic">Video lookbook</h2>
            <div className="w-10 h-[2px] bg-peony mx-auto mt-4" />
          </div>
        </Reveal>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
          <Reveal>
            <VideoCard
              src="/videos/1.mp4"
              title="Whisper Bloom — Summer '26"
              className="aspect-[9/16] max-h-[560px] lg:max-h-none"
              onPlay={() => setLightboxVideo("/videos/1.mp4")}
            />
          </Reveal>
          <Reveal delay={150}>
            <VideoCard
              src="/videos/2.mp4"
              title="La Mienne Collection"
              className="aspect-[9/16] max-h-[560px] lg:max-h-none"
              onPlay={() => setLightboxVideo("/videos/2.mp4")}
            />
          </Reveal>
        </div>
      </div>
      {lightboxVideo && <VideoLightbox src={lightboxVideo} onClose={() => setLightboxVideo(null)} />}
    </section>
  );
}
