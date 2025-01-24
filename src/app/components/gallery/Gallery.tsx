import env from "@/utils/env";
import { fetchImageList } from "@/utils/fetchImages";
import GalleryCoverImage from "./GalleryCoverImage";
import GalleryWrapper from "./GalleryWrapper";

async function Gallery({ term = "featured" }: { term: string }) {
  let galleryId: string;
  let galleryImageId: string;

  if (term === "outdoors") {
    galleryId = env.OUTDOOR_GALLERY_ID;
    galleryImageId = env.OUTDOOR_GALLERY_IMG_ID;
  } else if (term === "street") {
    galleryId = env.STREET_GALLERY_ID;
    galleryImageId = env.STREET_GALLERY_IMG_ID;
  } else if (term === "busan") {
    galleryId = env.BUSAN_GALLERY_ID;
    galleryImageId = env.BUSAN_GALLERY_IMG_ID;
  } else {
    galleryId = env.PUBLIC_GALLERY_ID;
    galleryImageId = env.FEATURED_GALLERY_IMG_ID;
  }

  const imgListUrl = `https://www.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=${env.FLICKR_API_KEY}&photoset_id=${galleryId}&extras=tags&format=json&nojsoncallback=1`;
  const coverImageUrl = `https://live.staticflickr.com/${env.SERVER_ID}/${galleryImageId}_k.jpg`;

  let imageList = await fetchImageList(imgListUrl);
  if (!imageList) return <h2>There was a problem fetching the images</h2>;

  // filter list for featured photos
  if (imageList.length > 0 && term === "featured") {
    imageList = imageList.filter((img) => img.tags?.toLowerCase().includes(term));
  }

  return (
    // TODO: Add loading state
    <div className='overflow-x-hidden z-20'>
      <GalleryCoverImage imageUrl={coverImageUrl} />
      <section className='m-5' id='gallery'>
        <GalleryWrapper imageList={imageList} />
      </section>
    </div>
  );
}
export default Gallery;
