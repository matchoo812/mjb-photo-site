import { footerLinks } from "@/utils/links";

function Footer() {
  return (
    <footer className='w-full h-max pt-6 border-t-2 mt-5 border-t-overlay border-b-[20px] backdrop-blur-sm border-b-foreground dark:glow'>
      <ul className='flex justify-center items-center group w-max mx-auto'>
        {footerLinks.map((link, index) => (
          <a href={link.href} key={index} className='mx-2 my-auto group-hover-link'>
            <link.icon className='social-link hover-glow-link' />
          </a>
        ))}
      </ul>
      <div className='flex justify-center items-center mt-6 mb-3 font-light tracking-wide text-sm drop-shadow-sm dark:text-glow-yellow select-none'>
        &copy; Matt Ballard {new Date().getFullYear()} - All Rights Reserved
      </div>
    </footer>
  );
}
export default Footer;
