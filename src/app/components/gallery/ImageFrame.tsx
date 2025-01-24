import { PhotoWithInfo } from "@/utils/types";
import Image from "next/image";
import { GiExpand } from "react-icons/gi";

function ImageFrame({
  image,
  index,
  openImageSlider,
}: {
  image: PhotoWithInfo;
  index: number;
  openImageSlider: (index: number) => void;
}) {
  const { src, title, height, width } = image;
  return (
    <div
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
}
export default ImageFrame;
