import { footerLinks } from "@/utils/links";

function Footer() {
  return (
    <footer className='w-full h-max pt-6 mt-5 backdrop-blur-sm bg-overlay shadow-xl border-b-[25px] border-b-foreground dark:glow z-25'>
      <ul className='flex justify-center items-center group w-max mx-auto'>
        {footerLinks.map((link, index) => (
          <a
            href={link.href}
            key={index}
            target='_blank'
            className='mx-2 my-auto group-hover-link'>
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
