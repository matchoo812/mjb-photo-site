"use client";

import { useState } from "react";
import Image from "next/image";
import { TfiAngleLeft, TfiAngleRight } from "react-icons/tfi";
import { PhotoWithInfo } from "@/utils/types";

function ImageSlider({ imageList }: { imageList: PhotoWithInfo[] }) {
  // console.log(imageList);
  const [imageIndex, setImageIndex] = useState(0);

  function showPrevImage() {
    setImageIndex((imageIndex) => {
      if (imageIndex === 0) return imageList.length - 1;
      return imageIndex - 1;
    });
  }

  function showNextImage() {
    setImageIndex((imageIndex) => {
      if (imageIndex === imageList.length - 1) return 0;
      return imageIndex + 1;
    });
  }

  return (
    <div className='absolute top-0 left-0 w-screen h-screen mx-auto bg-overlay overflow-clip'>
      <div className='h-full flex w-full justify-between'>
        <button
          onClick={showPrevImage}
          className='pl-6 pr-5 border-r border-overlay hover:bg-overlay hover:glow duration-300 z-10'>
          <TfiAngleLeft className='h-8 w-8 justify-self-end' />
        </button>
        <div className='bg-transparent p-2 my-[3vh]'>
          <div className='w-full h-full flex flex-nowrap overflow-hidden'>
            {imageList.map((img) => {
              const { id, src, title, height, width } = img;
              return (
                <div
                  className='w-full h-full shrink-0 grow-0 duration-300 relative group'
                  key={id}
                  style={{ translate: `${-100 * imageIndex}%` }}>
                  <h3 className='text-xl mx-auto rounded-sm shadow-sm w-max select-none bg-overlay py-2 px-5 absolute bottom-8 left-1/2 -translate-x-[50%] opacity-0 group-hover:opacity-100 duration-200'>
                    {title && title}
                  </h3>
                  <Image
                    src={src}
                    height={height}
                    width={width}
                    alt={title}
                    className='h-full w-auto object-contain block bg-overlay border border-overlay p-5 mx-auto shadow-2xl'
                  />
                </div>
              );
            })}
          </div>
        </div>
        <button
          onClick={showNextImage}
          className='pr-6 pl-5 border-l border-overlay hover:bg-overlay hover:glow duration-300'>
          <TfiAngleRight className='h-8 w-8' />
        </button>
      </div>
    </div>
  );
}
export default ImageSlider;
