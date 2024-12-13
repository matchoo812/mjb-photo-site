import Image from "next/image";
import TextCursor from "./TextCursor";

const ImageSlide = ({
  src,
  height,
  width,
  title,
  active,
}: {
  src: string;
  height: number;
  width: number;
  title: string;
  active: boolean;
}) => {
  return (
    <div className='image-slide'>
      <div
        className={`h-[90vw] m-auto duration-200 ${
          active ? "opacity-100" : "opacity-0"
        }`}>
        <Image
          src={src}
          height={height}
          width={width}
          alt={title}
          className='max-h-[95vh] w-auto max-w-[90vw] p-5 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-overlay backdrop-blur-md border-overlay border-4 shadow-xl object-cover dark:glow'
        />
        <TextCursor text={title} />
      </div>
    </div>
  );
};

export default ImageSlide;
