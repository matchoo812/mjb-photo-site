import { socialLinks } from "@/utils/links";

function SocialLinks() {
  return (
    <div className='flex items-center justify-center group mr-4'>
      {socialLinks.map((link, index) => (
        <a key={index} href={link.href} className='mx-1 my-auto hover-link '>
          <link.icon className='h-[1.6rem] w-[1.6rem] rounded-[4px] hover:shadow-md dark:glow dark:hover:glow-yellow duration-300' />
        </a>
      ))}
    </div>
  );
}
export default SocialLinks;
