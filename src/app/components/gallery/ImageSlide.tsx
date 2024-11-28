import Image from "next/image";
import TextCursor from "./TextCursor";

const ImageSlide = ({
  src,
  height,
  width,
  title,
  active,
  activeIndex,
}: {
  src: string;
  height: number;
  width: number;
  title: string;
  active: boolean;
  activeIndex: number;
}) => {
  return (
    <div className='image-slide'>
      <div
        className={`h-[90vw] m-auto z-20 duration-200 cursor-none ${
          active ? "opacity-100" : "opacity-0"
        }`}>
        <Image
          src={src}
          height={height}
          width={width}
          alt={title}
          className='max-h-[90vh] w-auto max-w-[90vw] p-5 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 backdrop-blur-sm border-overlay border-2 shadow-xl object-cover dark:glow'
        />
        <TextCursor text={title} />
      </div>
    </div>
  );
};

export default ImageSlide;
