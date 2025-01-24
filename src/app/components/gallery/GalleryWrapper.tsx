"use client";

import { useEffect, useState, createContext, useContext } from "react";
import { GalleryContextType, PhotoWithInfo } from "@/utils/types";
import ImageSliderModal from "./ImageSliderModal";
import ImageSlider from "./ImageSlider";
import ImageFrame from "./ImageFrame";

export const GalleryContext = createContext<GalleryContextType | null>(null);
export const useGalleryContext = () => useContext(GalleryContext);

export default function GalleryWrapper({
  imageList,
}: {
  imageList: PhotoWithInfo[];
}) {
  const [show, setShow] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [mounted, setMounted] = useState(false);
  const navBar: Element | null = mounted ? document.querySelector("#header") : null;

  useEffect(() => {
    if (typeof document !== "undefined") setMounted(true);
  }, []);

  function openImageSlider(index: number) {
    setActiveIndex(index);
    setShow(true);
    navBar?.classList.remove("z-20");
    navBar?.classList.add("z-10");
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    if (mounted) document.body.classList.add("overflow-hidden");
  }

  function closeImageSlider() {
    setShow(false);
    navBar?.classList.remove("z-10");
    navBar?.classList.add("z-20");
    if (mounted) document.body.classList.remove("overflow-hidden");
  }

  return (
    <GalleryContext.Provider
      value={{ imageList, activeIndex, setActiveIndex, closeImageSlider }}>
      <div className='z-40'>
        <ImageSliderModal show={show} closeImageSlider={closeImageSlider}>
          <ImageSlider />
        </ImageSliderModal>
        <div className='mt-[35vh] sm:mt-[40vh] md:mt-[80vh] max-w-[1650px] p-6 columns-1 md:columns-2 lg:columns-3 xl:columns-4 2xl:columns-5 gap-2 bg-overlay border-2 border-overlay backdrop-blur-sm'>
          {imageList.map((image, index) => {
            return (
              <ImageFrame
                key={image.id}
                image={image}
                index={index}
                openImageSlider={openImageSlider}
              />
            );
          })}
        </div>
      </div>
    </GalleryContext.Provider>
  );
}
