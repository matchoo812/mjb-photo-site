import env from "@/utils/env";
import { BasicPhoto, PhotoWithInfo } from "./types";

export async function fetchImageInfo(photo: BasicPhoto): Promise<PhotoWithInfo> {
  try {
    const res = await fetch(
      `https://www.flickr.com/services/rest/?method=flickr.photos.getSizes&api_key=${env.FLICKR_API_KEY}&photo_id=${photo.id}&format=json&nojsoncallback=1`
    );
    if (!res.ok) throw new Error("There was a problem fetching image sizes");

    const imageSizes = await res.json();
    // const smallImg: object = imageSizes.sizes.size[6];
    // const medImg: object = imageSizes.sizes.size[8];
    const largeImg = imageSizes.sizes.size[10];
    const photoWithInfo: PhotoWithInfo = {
      ...photo,
      width: largeImg.width,
      height: largeImg.height,
      src: largeImg.source,
    };

    return photoWithInfo;
  } catch (err) {
    if (err instanceof Error) console.log(err.stack);
  }
}

export async function fetchImageList(url: string): Promise<PhotoWithInfo[]> {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error("There was a problem fetching the image list");

    const imageResults = await res.json();
    const imageList: BasicPhoto[] = imageResults.photoset.photo;

    const imageListWithInfo = await Promise.all(
      imageList.map(async (img) => fetchImageInfo(img))
    );

    return imageListWithInfo;
  } catch (err) {
    if (err instanceof Error) console.log(err.stack);
  }
}

export async function fetchBackgroundImage(id: string, sizeIndex: number) {
  try {
    const res = await fetch(
      `https://www.flickr.com/services/rest/?method=flickr.photos.getSizes&api_key=${env.FLICKR_API_KEY}&photo_id=${id}&format=json&nojsoncallback=1`
    );
    if (!res.ok) throw new Error("There was a problem fetching image sizes");

    const imageSizes = await res.json();
    return imageSizes.sizes.size[sizeIndex];
  } catch (err) {
    if (err instanceof Error) console.log(err.stack);
  }
}
