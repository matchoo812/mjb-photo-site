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

  function openImageSlider(index) {
    setActiveIndex(index);
    setShow(true);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    document.body.classList.add("overflow-hidden");
  }

  function closeImageSlider() {
    setShow(false);
    // galleryCoverImage?.classList.remove("h-0");
    document.body.classList.remove("overflow-hidden");
  }

  return (
    <>
      <ImageSliderModal show={show} closeImageSlider={closeImageSlider}>
        <ImageSlider
          imageList={imageList}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        />
      </ImageSliderModal>
      <div className='mt-[75vh] p-6 columns-1 sm:columns-2 md:columns-3 lg:columns-4 2xl:columns-5 gap-2 bg-overlay border-2 border-overlay backdrop-blur-sm'>
        {imageList.map((image, index) => {
          const { id, src, title, height, width } = image;
          return (
            <div
              key={id}
              className='justify-self-center cursor-pointer'
              onClick={() => openImageSlider(index)}>
              <div className='grid place-content-center'>
                <figure className='relative bg-slate-50 border border-slate-300 shadow-md mt-2 group'>
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
    </>
  );
}
