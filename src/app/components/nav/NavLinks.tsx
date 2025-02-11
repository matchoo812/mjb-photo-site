"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { navLinks } from "@/utils/links";

function NavLinks({
  open,
  closeMobileMenu,
}: {
  open: boolean;
  closeMobileMenu: () => void;
}) {
  const path = usePathname();
  const pathSegment = path.split("/")[1];

  return (
    <div
      onClick={closeMobileMenu}
      //  open ? "right-0 opacity-100" : "-right-full"
      className={`flex flex-col z-30 group h-[90vh] items-center justify-center absolute top-full w-full lg:w-1/2 bg-overlay backdrop-blur-md lg:opacity-100 lg:flex-row lg:h-max lg:static lg:bg-transparent lg:backdrop-blur-none dark:border-none duration-500 ${
        open ? "left-0" : "left-full"
      }`}>
      <div className='flex flex-col items-center -mt-[15vh] lg:mt-0 px-[25vw] py-[5vh] bg-background lg:flex-row dark:drop-shadow-glowYellow lg:dark:drop-shadow-none lg:bg-transparent lg:p-0'>
        {navLinks.map((link) => {
          const { href, label } = link;
          return (
            <Link
              key={label}
              href={href}
              onClick={closeMobileMenu}
              className={`uppercase text-lg p-4 lg:p-3 tracking-wide nav-link hover-glow-link select-none ${
                pathSegment === label ? "active" : ""
              }`}>
              {label}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
export default NavLinks;
