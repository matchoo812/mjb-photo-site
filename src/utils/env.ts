import { cleanEnv, str } from "envalid";

const env = cleanEnv(process.env, {
  FLICKR_API_KEY: str(),
  PUBLIC_GALLERY_ID: str(),
  OUTDOOR_GALLERY_ID: str(),
  STREET_GALLERY_ID: str(),
  BUSAN_GALLERY_ID: str(),
  PROFILE_IMG_ID: str(),
  BUSAN_COVER_IMG_ID: str(),
});

export default env;
