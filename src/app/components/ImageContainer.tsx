import { FetchedImageProps } from "@/utils/types";
import { fetchImageSizes } from "@/utils/fetchImages";
import Image from "next/image";

async function ImageContainer({ photo }: FetchedImageProps) {
  const largeImg: { height: number; width: number; source: string } =
    await fetchImageSizes(photo.id);
  const { height, width, source: src } = largeImg;

  // const aspectRatio = height / width;
  // const frameHeight = Math.ceil(250 * aspectRatio);
  // const photoSpans = Math.ceil(frameHeight / 10) + 1;
  // const frameHeight = Math.ceil(375 * aspectRatio);
  // const photoSpans = Math.ceil(frameHeight / 10) + 1;

  return (
    // <div className='w-[250px] justify-self-center ' style={{ gridRow: `span ${photoSpans}` }}>
    //   <div className='grid place-content-center'>
    //     <div className=' bg-slate-50 border border-slate-300 shadow-md'>
    //       <Image src={src} alt={photo.title} height={height} width={width} />
    //     </div>
    //   </div>
    // </div>
    <div className='justify-self-center'>
      <div className='grid place-content-center'>
        <div className=' bg-slate-50 border border-slate-300 shadow-md mt-2'>
          <Image src={src} alt={photo.title} height={height} width={width} />
        </div>
      </div>
    </div>
  );
}
export default ImageContainer;
