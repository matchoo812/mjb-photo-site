import { PhotoWithInfo } from "@/utils/types";
import { TfiAngleLeft, TfiAngleRight } from "react-icons/tfi";
import ImageSlide from "./ImageSlide";

export default function ImageSlider({
  imageList,
  activeIndex,
  setActiveIndex,
}: {
  imageList: PhotoWithInfo[];
  activeIndex: number;
  setActiveIndex: () => void;
}) {
  function showPrevImage() {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    } else {
      setActiveIndex(imageList.length - 1);
    }
  }

  function showNextImage() {
    if (activeIndex < imageList.length - 1) {
      setActiveIndex(activeIndex + 1);
    } else {
      setActiveIndex(0);
    }
  }

  return (
    <>
      <div className='absolute top-0 left-0 flex flex-nowrap h-screen w-screen justify-between align-center overflow-hidden'>
        <button onClick={() => showPrevImage()} className='slider-btn pl-6 pr-5'>
          <TfiAngleLeft className='h-8 w-8' />
        </button>

        {imageList.map((img, index) => {
          const { id, src, height, width, title } = img;
          return (
            <ImageSlide
              key={id}
              src={src}
              height={height}
              width={width}
              title={title}
              active={index === activeIndex}
              activeIndex={activeIndex}
            />
          );
        })}

        <button onClick={() => showNextImage()} className='slider-btn pr-6 pl-5'>
          <TfiAngleRight className='h-8 w-8' />
        </button>
      </div>
    </>
  );
}
