import env from "@/utils/env";
import { fetchProfileImage } from "@/utils/fetchImages";
import { SiNextdotjs, SiGithub, SiTypescript, SiTailwindcss } from "react-icons/si";
import { TfiFlickr } from "react-icons/tfi";
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

      <div className='p-5 m-4 max-w-[36rem]'>
        <h2 className='text-2xl uppercase dark:text-glow-yellow mb-5 p-2 w-max'>
          About Me
        </h2>
        <p>I&apos;m Matt, a freelance photographer and self-taught web developer.</p>
        <br />
        <p>Most of what I do is outdoors and street photography.</p>
      </div>
    </section>
  );
}
export default AboutPage;
