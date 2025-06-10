import { useState, useEffect } from "react";

export const useScreenSize = () => {
  const [slidesPerView, setSlidesPerView] = useState<number>(2);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSlidesPerView(1);
      } else if (window.innerWidth >= 768 && window.innerWidth < 1280) {
        setSlidesPerView(2);
      } else if (window.innerWidth < 1536) {
        setSlidesPerView(3);
      } else {
        setSlidesPerView(3);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return slidesPerView;
};
