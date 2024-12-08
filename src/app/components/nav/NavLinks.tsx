"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { navLinks } from "@/utils/links";

function NavLinks({ clicked }: { clicked: boolean }) {
  const path = usePathname();
  const pathSegment = path.split("/")[1];

  return (
    // hidden lg:flex
    <div
      className={`flex flex-col z-30 group h-[90vh] items-center justify-center absolute top-full w-1/2 bg-background backdrop-blur-md lg:flex-row lg:h-max lg:static lg:bg-transparent lg:backdrop-blur-none dark:border-none duration-500 ${
        clicked ? "right-0" : "-right-1/2"
      }`}>
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
