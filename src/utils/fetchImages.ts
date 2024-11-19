import env from "@/utils/env";

export async function fetchImageList(url: string) {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error("There was a problem fetching the image list");

    const imageResults = await res.json();
    const imageList: [object] = imageResults.photoset.photo;
    return imageList;
  } catch (err) {
    if (err instanceof Error) console.log(err.stack);
  }
}

export async function fetchImageSizes(id: string) {
  try {
    const res = await fetch(
      `https://www.flickr.com/services/rest/?method=flickr.photos.getSizes&api_key=${env.FLICKR_API_KEY}&photo_id=${id}&format=json&nojsoncallback=1`
    );
    if (!res.ok) throw new Error("There was a problem fetching image sizes");

    const imageSizes = await res.json();
    // const smallImg: object = imageSizes.sizes.size[6];
    // const medImg: object = imageSizes.sizes.size[8];
    const largeImg: object = imageSizes.sizes.size[10];
    return largeImg;
  } catch (err) {
    if (err instanceof Error) console.log(err.stack);
  }
}
