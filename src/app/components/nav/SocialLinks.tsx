import { socialLinks } from "@/utils/links";

function SocialLinks() {
  return (
    <div className='flex items-center justify-center group mr-4'>
      {socialLinks.map((link, index) => (
        <a
          key={index}
          href={link.href}
          target='_blank'
          className='mx-1 my-auto group-hover-link '>
          <link.icon className='social-link hover-glow-link' />
        </a>
      ))}
    </div>
  );
}
export default SocialLinks;
