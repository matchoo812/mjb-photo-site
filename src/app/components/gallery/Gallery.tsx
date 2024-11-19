import env from "@/utils/env";
import { fetchImageList } from "@/utils/fetchImages";
import ImageContainer from "./ImageContainer";
import ImageSlider from "./ImageSlider";

async function Gallery({ term = "featured" }: { term?: string }) {
  let galleryId;

  if (term === "outdoors") {
    galleryId = env.OUTDOOR_GALLERY_ID;
  } else if (term === "street") {
    galleryId = env.STREET_GALLERY_ID;
  } else if (term === "busan") {
    galleryId = env.BUSAN_GALLERY_ID;
  } else {
    galleryId = env.PUBLIC_GALLERY_ID;
  }

  const imgListUrl = `https://www.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=${env.FLICKR_API_KEY}&photoset_id=${galleryId}&extras=tags&format=json&nojsoncallback=1`;
  // &extras=tags

  let imageList = await fetchImageList(imgListUrl);
  if (!imageList) return <h2>There was a problem fetching the image list</h2>;

  // filter list for featured photos
  if (imageList && term === "featured") {
    imageList = imageList.filter((img) => img.tags.toLowerCase().includes(term));
  }
  // console.log(imageList);

  return (
    // <section className='px-1 my-3 grid grid-cols-gallery auto-rows-[10px]'>

    <section className='columns-1 sm:columns-2 md:columns-3 lg:columns-4 2xl:columns-5 gap-2 '>
      {imageList.map((image) => {
        return <ImageContainer key={image.id} photo={image} />;
      })}
      <ImageSlider imageList={imageList} />
    </section>
  );
}
export default Gallery;
