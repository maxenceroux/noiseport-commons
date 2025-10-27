import { useState } from "react";
import React from "react";

interface ScreenshotCarouselProps {
  images: string[];
}

export default function ScreenshotCarousel({ images }: ScreenshotCarouselProps) {
  const [current, setCurrent] = useState(0);
  const [fullscreen, setFullscreen] = useState(false);
  const total = images.length;

  const prev = () => setCurrent((c) => (c === 0 ? total - 1 : c - 1));
  const next = () => setCurrent((c) => (c === total - 1 ? 0 : c + 1));

  // Keyboard navigation for fullscreen
  React.useEffect(() => {
    if (!fullscreen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setFullscreen(false);
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [fullscreen]);

  return (
    <div className="relative flex flex-col items-center my-8">
      <div className="w-full max-w-xl flex items-center justify-center">
        <button
          aria-label="Précédent"
          onClick={prev}
          className="absolute left-0 z-10 bg-neutral-900/80 hover:bg-neutral-800 text-white rounded-full p-2 shadow-lg"
          style={{ top: "50%", transform: "translateY(-50%)" }}
        >
          &#8592;
        </button>
        <img
          src={images[current]}
          alt={`Screenshot ${current + 1}`}
          className="rounded-lg shadow-lg w-full object-contain cursor-pointer"
          style={{ maxHeight: "400px" }}
          onClick={() => setFullscreen(true)}
          title="Voir en plein écran"
        />
        <button
          aria-label="Suivant"
          onClick={next}
          className="absolute right-0 z-10 bg-neutral-900/80 hover:bg-neutral-800 text-white rounded-full p-2 shadow-lg"
          style={{ top: "50%", transform: "translateY(-50%)" }}
        >
          &#8594;
        </button>
      </div>
      <div className="text-xs text-neutral-400 mt-2">Capture {current + 1} / {total}</div>
      <div className="flex gap-2 mt-2">
        {images.map((_, i) => (
          <button
            key={i}
            className={`w-2 h-2 rounded-full ${i === current ? "bg-primary" : "bg-neutral-700"}`}
            onClick={() => setCurrent(i)}
            aria-label={`Aller à la capture ${i + 1}`}
          />
        ))}
      </div>
      {/* Fullscreen Modal */}
      {fullscreen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90" style={{ backdropFilter: "blur(2px)" }}>
          <button
            aria-label="Fermer"
            onClick={() => setFullscreen(false)}
            className="absolute top-6 right-6 text-white bg-neutral-900/80 hover:bg-neutral-800 rounded-full p-3 text-xl shadow-lg"
          >
            &times;
          </button>
          <button
            aria-label="Précédent"
            onClick={prev}
            className="absolute left-8 top-1/2 -translate-y-1/2 text-white bg-neutral-900/80 hover:bg-neutral-800 rounded-full p-3 text-2xl shadow-lg"
          >
            &#8592;
          </button>
          <img
            src={images[current]}
            alt={`Screenshot ${current + 1}`}
            className="rounded-lg shadow-2xl object-contain"
            style={{ maxHeight: "80vh", maxWidth: "90vw" }}
          />
          <button
            aria-label="Suivant"
            onClick={next}
            className="absolute right-8 top-1/2 -translate-y-1/2 text-white bg-neutral-900/80 hover:bg-neutral-800 rounded-full p-3 text-2xl shadow-lg"
          >
            &#8594;
          </button>
          <div className="absolute bottom-10 left-0 right-0 flex justify-center gap-2">
            {images.map((_, i) => (
              <button
                key={i}
                className={`w-3 h-3 rounded-full border-2 ${i === current ? "bg-primary border-white" : "bg-neutral-700 border-neutral-500"}`}
                onClick={() => setCurrent(i)}
                aria-label={`Aller à la capture ${i + 1}`}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}