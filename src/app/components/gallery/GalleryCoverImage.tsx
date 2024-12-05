"use client";

import { useState, useEffect, useRef } from "react";

function GalleryCoverImage({ imageUrl }: { imageUrl: string }) {
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => {
    setOffsetY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className='gallery-cover'
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundPositionY: offsetY * -0.4 + "px",
        scrollBehavior: "smooth",
      }}></div>
  );
}
export default GalleryCoverImage;
