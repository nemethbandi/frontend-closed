import { useEffect, useState } from "react";
import slideOne from "../../assets/slideshow-1.jpg";
import slideTwo from "../../assets/slideshow-2.jpg";
import slideThree from "../../assets/slideshow-3.jpg";

const slides = [
  {
    image: slideOne,
    eyebrow: "Gyűjtői fókusz",
    title: "Időtlen legendák méretarányban",
    description: "Fedezd fel a kézzel válogatott prémium sportkocsi replikákat, amelyek az ikonikus dizájnt, a részleteket és a motorsport örökséget idézik.",
  },
  {
    image: slideTwo,
    eyebrow: "Prémium kézművesség",
    title: "Komoly gyűjteményekre tervezve",
    description: "A panelvonalaktól a belső kidolgozásig minden sportkocsi modell hosszú távú értékre van válogatva.",
  },
  {
    image: slideThree,
    eyebrow: "Új érkezések",
    title: "A következő prémium replikád már vár",
    description: "Fedezd fel a megbízható gyártók friss kiadásait, és bővítsd a gyűjteményed magabiztosan.",
  },
];

const SLIDE_DURATION_MS = 5000;

export default function SlideshowSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, SLIDE_DURATION_MS);

    return () => {
      window.clearInterval(intervalId);
    };
  }, []);

  return (
    <section className="relative overflow-hidden rounded-3xl border border-[var(--border-strong)] bg-[#162521] shadow-[0_24px_52px_-36px_rgba(22,37,33,0.9)]">
      <div className="relative h-[24rem] sm:h-[28rem]">
        {slides.map((slide, index) => {
          const isActive = index === activeIndex;
          return (
            <div
              aria-hidden={!isActive}
              className={`absolute inset-0 transition-opacity duration-700 ease-out ${isActive ? "opacity-100" : "opacity-0"}`}
              key={slide.title}
            >
              <img alt={slide.title} className="h-full w-full object-cover" src={slide.image} />
              <div className="absolute inset-0 bg-gradient-to-r from-[rgba(22,37,33,0.82)] via-[rgba(22,37,33,0.48)] to-[rgba(22,37,33,0.18)]" />
            </div>
          );
        })}

        <div className="pointer-events-none absolute inset-0 flex items-end">
          <div className="pointer-events-auto w-full space-y-4 p-6 text-left text-[var(--color-mist-200)] sm:p-10">
            <p className="text-xs uppercase tracking-[0.22em] text-[rgba(243,255,185,0.88)]">{slides[activeIndex].eyebrow}</p>
            <h1 className="max-w-2xl text-3xl font-semibold leading-tight sm:text-4xl">{slides[activeIndex].title}</h1>
            <p className="max-w-2xl text-sm text-[rgba(243,255,185,0.9)] sm:text-base">{slides[activeIndex].description}</p>
            <a
              className="ui-btn inline-flex rounded-xl border border-[#FFFD98] bg-[#FFFD98] px-5 py-2.5 text-sm font-semibold !text-[#162521] hover:bg-[#F3FFB9] hover:!text-[#162521]"
              href="/TERMÉKEK"
            >
              Vásárlás
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-2 rounded-full bg-[rgba(15,21,19,0.42)] px-3 py-2 backdrop-blur-sm">
        {slides.map((slide, index) => {
          const isActive = index === activeIndex;
          return (
            <button
              aria-label={`Ugrás a(z) ${index + 1}. diára`}
              className={`h-2.5 w-2.5 rounded-full border transition-all ${isActive ? "border-[#FFFD98] bg-[#FFFD98]" : "border-[rgba(243,255,185,0.45)] bg-transparent hover:bg-[rgba(243,255,185,0.5)]"}`}
              key={slide.title}
              onClick={() => setActiveIndex(index)}
              type="button"
            />
          );
        })}
      </div>
    </section>
  );
}
