import { TfiAngleLeft, TfiAngleRight } from "react-icons/tfi";
import ImageSlide from "./ImageSlide";
import { useGalleryContext } from "./GalleryWrapper";
import { GalleryContextType, PhotoWithInfo } from "@/utils/types";

export default function ImageSlider() {
  const { imageList, activeIndex, setActiveIndex, closeImageSlider } =
    useGalleryContext() as GalleryContextType;

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
      <div className='absolute top-0 left-0 flex flex-nowrap h-screen w-screen justify-between align-center overflow-hidden z-30'>
        <button
          onClick={() => showPrevImage()}
          className='slider-btn cursor-w-resize'>
          <TfiAngleLeft />
        </button>

        <div className='mx-auto cursor-n-resize' onClick={closeImageSlider}>
          {imageList.map((img: PhotoWithInfo, index: number) => {
            const { id, src, height, width, title } = img;
            return (
              <ImageSlide
                key={id}
                src={src}
                height={height}
                width={width}
                title={title}
                active={index === activeIndex}
              />
            );
          })}
        </div>

        <button
          onClick={() => showNextImage()}
          className='slider-btn cursor-e-resize'>
          <TfiAngleRight className='justify-self-end' />
        </button>
      </div>
    </>
  );
}
