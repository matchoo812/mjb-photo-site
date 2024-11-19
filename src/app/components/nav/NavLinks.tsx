import Link from "next/link";
import { links } from "@/utils/links";

function NavLinks() {
  return (
    <div className='flex items-center justify-center group '>
      {links.map((link) => {
        const { href, label } = link;
        return (
          <Link
            key={label}
            href={href}
            className='uppercase p-3 tracking-wide underline-animation hover-link select-none'>
            {label}
          </Link>
        );
      })}
    </div>
  );
}
export default NavLinks;
