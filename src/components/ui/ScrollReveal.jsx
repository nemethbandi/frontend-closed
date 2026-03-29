import { useEffect, useRef, useState } from "react";

export default function ScrollReveal({ children, className = "", direction = "left" }) {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        threshold: 0.2,
        rootMargin: "0px 0px -8% 0px"
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  const directionClass = direction === "right" ? "scroll-reveal-right" : "scroll-reveal-left";
  const visibleClass = isVisible ? "is-visible" : "";

  return (
    <div ref={containerRef} className={`scroll-reveal ${directionClass} ${visibleClass} ${className}`.trim()}>
      {children}
    </div>
  );
}
