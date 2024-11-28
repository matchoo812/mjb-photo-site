import Link from "next/link";

function ProjectCard({
  image,
  title,
  description,
}: {
  image: { height: number; width: number; src: string };
  title: string;
  description: string;
}) {
  const { height, width, source: src } = image;
  return (
    <div className='flex max-w-5xl justify-center'>
      <div
        style={{
          backgroundImage: `url(${src})`,
          maxWidth: width,
          maxHeight: height,
        }}
        className='mt-3 h-[30vh] w-[50vw] rounded-sm border-2 border-overlay dark:border-foreground shadow-md object-contain bg-center bg-no-repeat dark:glow-yellow'>
        <div className='h-full p-6 flex flex-col justify-between'>
          <div className='text-background dark:text-foreground bg-overlay backdrop-blur-sm shadow-md rounded-sm'>
            <h3 className='p-2 text-xl w-max'>{title}</h3>
            <p className='mt-1 p-2'>{description}</p>
          </div>
          <Link
            href='/projects/busan'
            className='p-2 backdrop-blur-md text-background dark:text-foreground border-2 border-background dark:border-foreground rounded-sm self-end justify-self-end hover:shadow-lg hover:bg-background hover:text-foreground dark:hover:bg-foreground dark:hover:text-background hover:scale-105 duration-500'>
            View Gallery
          </Link>
        </div>
      </div>
    </div>
  );
}
export default ProjectCard;
