import env from "@/utils/env";
import Link from "next/link";
import { techLinks } from "@/utils/links";
import { fetchBackgroundImage } from "@/utils/fetchImages";

async function AboutPage() {
  const profileImage: { width: number; height: number; source: string } =
    await fetchBackgroundImage(env.PROFILE_IMG_ID, 6);
  const { width, height, source: src } = profileImage;

  return (
    <section className='grid grid-flow-row lg:grid-flow-col place-content-center mt-4'>
      <div
        style={{ backgroundImage: `url(${src})`, width: width, height: height }}
        className='m-4 border border-foreground dark:border-background object-cover bg-center shadow-lg dark:glow-yellow'></div>

      <div className='p-5 m-4 max-w-[38rem]'>
        <h2 className='text-2xl uppercase dark:text-glow-yellow mb-5 w-max'>
          About Me
        </h2>
        <p>
          I&apos;m Matt, a freelance photographer and web developer. Available for
          hire on both counts. Most of the photography I do is outdoors, travel, and
          street photography.
        </p>
        <br />
        <hr />

        <p className='mt-2'>
          For the gear nerds out there, information about the photo gear I use can be
          found{" "}
          <Link
            href='/about/gear'
            className='underline dark:drop-shadow-glow dark:hover:drop-shadow-glowYellow'>
            here
          </Link>
          .
        </p>
        <br />
        <hr />

        <p className='mt-2'>For the tech-curious, this site was built using:</p>
        <ul className='flex flex-wrap justify-between align-center mt-2'>
          {techLinks.map((link) => (
            <a
              key={link.siteName}
              href={link.href}
              target='_blank'
              className='mr-2 text-cyan-700 dark:text-foreground text-border-foreground hover:scale-110 hover-glow-link duration-150'>
              <link.icon className='h-8 w-8 p-1 inline-block' /> | {link.siteName}
            </a>
          ))}
        </ul>
        <p className='mt-2'>
          It remains a work in progress, but source code for the site can be found{" "}
          <a
            href='https://github.com/matchoo812/mjb-photo-site'
            className='underline dark:drop-shadow-glow dark:hover:drop-shadow-glowYellow'>
            here
          </a>
          .
        </p>
      </div>
    </section>
  );
}
export default AboutPage;
