import Logo from "./Logo";
import NavLinks from "./NavLinks";
import { ModeToggle } from "./ModeToggle";
import SocialLinks from "./SocialLinks";

function Navbar() {
  return (
    <header className='w-full shadow-md dark:glow mb-2 z-10'>
      <nav className='flex flex-col md:flex-row sm:justify-between items-center py-5 px-[5vw] mx-auto text-foreground brightness-110 bg-overlay backdrop-blur-md'>
        <Logo />
        <NavLinks />
        <div className='flex justify-center items-center'>
          <SocialLinks />
          <ModeToggle />
        </div>
      </nav>
    </header>
  );
}
export default Navbar;
