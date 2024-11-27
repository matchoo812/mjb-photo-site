"use client";

import { useState } from "react";
import { PhotoWithInfo } from "@/utils/types";
// import ImageContainer from "./ImageContainer";
// import ImageSlider from "./ImageSlider";
import ImageSliderModal from "./ImageSliderModal";
import ImageSlider from "./ImageSlider";
// import ImageContainer from "./ImageContainer";
import Image from "next/image";
import { RiFullscreenLine } from "react-icons/ri";

export default function GalleryWrapper({
  imageList,
}: {
  imageList: PhotoWithInfo[];
}) {
  const [show, setShow] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  function openImageSlider(index) {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    document.body.classList.add("overflow-hidden");
    setActiveIndex(index);
    setShow(true);
  }

  function closeImageSlider() {
    setShow(false);
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
                <button
                  data-index={index}
                  className='absolute h-full w-full top-0 left-0  backdrop-blur-sm opacity-0 group-hover:opacity-100 duration-300'>
                  <RiFullscreenLine className='h-full w-full p-10 scale-0 group-hover:scale-100 glow duration-500' />
                </button>
              </figure>
            </div>
          </div>
        );
      })}
    </>
  );
}
