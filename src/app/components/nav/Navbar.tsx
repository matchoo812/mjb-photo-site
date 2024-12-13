"use client";

import { useState } from "react";
import Logo from "./Logo";
import MobileMenuTrigger from "./MobileMenuTrigger";
import { ModeToggle } from "./ModeToggle";
import NavLinks from "./NavLinks";
import SocialLinks from "./SocialLinks";

function Navbar() {
  const [clicked, setClicked] = useState(false);

  const toggleMobileMenu = () => {
    if (!clicked) {
      setClicked(true);
      document.body.classList.add("overflow-hidden");
    } else {
      setClicked(false);
      document.body.classList.remove("overflow-hidden");
    }
  };

  return (
    <header className='w-full shadow-md dark:glow mb-2 z-20' id='header'>
      <nav className='flex flex-col md:flex-row sm:justify-between items-center py-5 px-[5vw] mx-auto text-foreground brightness-110 bg-overlay backdrop-blur-sm'>
        <Logo />
        <NavLinks clicked={clicked} setClicked={setClicked} />
        <div className='flex justify-center items-center mt-2 md:mt-0'>
          <SocialLinks />
          <ModeToggle />
        </div>
        <MobileMenuTrigger
          clicked={clicked}
          setClicked={setClicked}
          toggleMobileMenu={toggleMobileMenu}
        />
      </nav>
    </header>
  );
}
export default Navbar;
