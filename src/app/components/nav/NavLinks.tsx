"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { navLinks } from "@/utils/links";

function NavLinks() {
  const path = usePathname();
  // console.log(path);
  const pathSegment = path.split("/")[1];

  return (
    <div className='flex items-center justify-center bg-overlay border-2 border-foreground dark:border-none group'>
      {navLinks.map((link) => {
        const { href, label } = link;
        return (
          <Link
            key={label}
            href={href}
            className={`uppercase p-3 tracking-wide nav-link hover-glow-link select-none ${
              pathSegment === label ? "active" : ""
            }`}>
            {label}
          </Link>
        );
      })}
    </div>
  );
}
export default NavLinks;
