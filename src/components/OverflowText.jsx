import { useRef, useState, useEffect } from "react";

export default function OverflowText({ text }) {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const [translate, setTranslate] = useState(0);
  const [isOverflow, setIsOverflow] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    const textEl = textRef.current;

    if (!container || !textEl) return;

    const checkOverflow = () => {
      const overflow = textEl.scrollWidth > container.clientWidth;
      setIsOverflow(overflow);

      if (overflow) {
        setTranslate(textEl.scrollWidth - container.clientWidth);
      }
    };

    checkOverflow();
    window.addEventListener("resize", checkOverflow);

    return () => window.removeEventListener("resize", checkOverflow);
  }, [text]);

  return (
    <div ref={containerRef} className="relative overflow-hidden w-full">
      <p
        ref={textRef}
        className="text-sm text-zinc-400 whitespace-nowrap transition-transform duration-700 ease-in-out"
        onMouseEnter={(e) => {
          if (isOverflow) {
            e.currentTarget.style.transform = `translateX(-${translate}px)`;
          }
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateX(0)";
        }}
      >
        {text}
      </p>
    </div>
  );
}