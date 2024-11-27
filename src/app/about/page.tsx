import env from "@/utils/env";
import { fetchProfileImage } from "@/utils/fetchImages";
// import Image from "next/image";

async function AboutPage() {
  const profileImage: { width: number; height: number; source: string } =
    await fetchProfileImage(env.PROFILE_IMG_ID);
  const { width, height, source: src } = profileImage;

  return (
    <section className='grid grid-flow-col place-content-center mt-4'>
      <div
        style={{ backgroundImage: `url(${src})`, width: width, height: height }}
        className='m-4 border border-foreground dark:border-background object-cover bg-center shadow-lg dark:glow-yellow'></div>

      <div className='p-5 m-4 max-w-[36rem] leading-6 tracking-wide'>
        <p>I&apos;m Matt, a freelance photographer and web developer.</p>
        <br />
        <p>
          My photographic interests range far and wide, but most of what I do is
          primarily outdoors and street photography.
        </p>
      </div>
    </section>
  );
}
export default AboutPage;
