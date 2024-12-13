"use client";

import { useState } from "react";
import { PhotoWithInfo } from "@/utils/types";
import ImageSliderModal from "./ImageSliderModal";
import ImageSlider from "./ImageSlider";
import Image from "next/image";
import { GiExpand } from "react-icons/gi";

export default function GalleryWrapper({
  imageList,
}: {
  imageList: PhotoWithInfo[];
}) {
  const [show, setShow] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const navBar = document.querySelector("#header");

  function openImageSlider(index) {
    setActiveIndex(index);
    setShow(true);
    navBar?.classList.remove("z-20");
    navBar?.classList.add("z-10");
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    document.body.classList.add("overflow-hidden");
  }

  function closeImageSlider() {
    setShow(false);
    navBar?.classList.remove("z-10");
    navBar?.classList.add("z-20");
    document.body.classList.remove("overflow-hidden");
  }

  return (
    <div className='z-40'>
      <ImageSliderModal show={show} closeImageSlider={closeImageSlider}>
        <ImageSlider
          imageList={imageList}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          closeImageSlider={closeImageSlider}
        />
      </ImageSliderModal>
      <div className='mt-[40vh] md:mt-[80vh] max-w-[1650px] p-6 columns-1 md:columns-2 lg:columns-3 xl:columns-4 2xl:columns-5 gap-2 bg-overlay border-2 border-overlay backdrop-blur-sm'>
        {imageList.map((image, index) => {
          const { id, src, title, height, width } = image;
          return (
            <div
              key={id}
              className='justify-self-center cursor-pointer'
              onClick={() => openImageSlider(index)}>
              <div className='grid place-content-center'>
                <figure className='relative bg-overlay border border-slate-300 shadow-md mt-2 group'>
                  <Image src={src} alt={title} height={height} width={width} />
                  <button data-index={index} className='expand-img-btn'>
                    <GiExpand />
                  </button>
                </figure>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
