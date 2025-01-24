import env from "@/utils/env";
// import Link from "next/link";
import { techLinks } from "@/utils/links";
import { fetchBackgroundImage } from "@/utils/fetchImages";

async function AboutPage() {
  const profileImage: { width: number; height: number; source: string } =
    await fetchBackgroundImage(env.PROFILE_IMG_ID, 5);
  const { width, height, source: src } = profileImage;

  return (
    <section className='grid grid-flow-row lg:grid-flow-col place-content-center mt-8 max-w-[95vw]'>
      <div
        style={{ backgroundImage: `url(${src})`, width: width, height: height }}
        className='mx-auto max-w-[90vw] md:max-w-[30rem] border border-foreground dark:border-background object-contain bg-center shadow-lg dark:glow-yellow'></div>

      <div className='p-5 m-4 max-w-[38rem]'>
        <h2 className='text-2xl uppercase dark:text-glow-yellow mb-5 w-max'>
          About Me
        </h2>
        <p>
          I&apos;m Matt, a freelance photographer. Available for hire. Most of the
          photography I do is outdoors, travel, and street photography.
        </p>
        <br />
        <hr />

        {/* <p className='mt-2'>
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
        <hr /> */}

        <p className='mt-3'>
          I&apos;m also a web developer (and also available for hire). For those who
          are curious about such things, I built this site using:
        </p>
        <ul className='flex flex-wrap justify-between align-center mt-3'>
          {techLinks.map((link) => (
            <a
              key={link.siteName}
              href={link.href}
              target='_blank'
              className='mx-3 text-cyan-700 dark:text-foreground text-border-foreground hover:scale-110 hover-glow-link duration-150'>
              <link.icon className='h-8 w-8 p-1 inline-block' /> | {link.siteName}
            </a>
          ))}
        </ul>
        <p className='mt-3'>
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
