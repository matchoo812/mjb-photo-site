import Link from "next/link";
import { navLinks } from "@/utils/links";

function NavLinks() {
  return (
    <div className='flex items-center justify-center group '>
      {navLinks.map((link) => {
        const { href, label } = link;
        // TODO: add active appearance to current page
        return (
          <Link
            key={label}
            href={href}
            className='uppercase p-3 tracking-wide underline-animation hover-link hover:drop-shadow-sm dark:text-glow dark:hover:text-glow-yellow select-none'>
            {label}
          </Link>
        );
      })}
    </div>
  );
}
export default NavLinks;
