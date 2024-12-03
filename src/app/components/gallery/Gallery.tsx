import env from "@/utils/env";
import { fetchImageList } from "@/utils/fetchImages";
import GalleryWrapper from "./GalleryWrapper";

async function Gallery({ term = "featured" }: { term?: string }) {
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
  const galleryImageUrl = `https://live.staticflickr.com/${env.SERVER_ID}/${galleryImageId}_k.jpg`;

  let imageList = await fetchImageList(imgListUrl);
  if (!imageList) return <h2>There was a problem fetching the images</h2>;

  // filter list for featured photos
  if (imageList && term === "featured") {
    imageList = imageList.filter((img) => img.tags.toLowerCase().includes(term));
  }

  return (
    // TODO: Add loading state
    <>
      <div
        className='gallery-cover absolute top-0 left-0 h-screen w-full max-w-screen overflow-hidden bg-fixed bg-cover bg-center bg-no-repeat shadow-lg duration-200'
        style={{
          backgroundImage: `url(${galleryImageUrl})`,
        }}></div>
      <section
        // w-11/12 max-w-[1500px] mt-[70vh]
        className='m-5'
        id='gallery'>
        <GalleryWrapper imageList={imageList} />
      </section>
    </>
  );
}
export default Gallery;
