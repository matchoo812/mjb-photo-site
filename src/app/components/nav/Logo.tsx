import Link from "next/link";

function Logo() {
  return (
    <Link
      href='/'
      className='text-3xl uppercase tracking-wider border-[3px] bg-overlay border-foreground dark:border-none py-1 px-4 select-none cursor-pointer hover:backdrop-blur-md light:hover:shadow-lg dark:text-glow dark:hover:text-glow-yellow duration-300'>
      <h1>Matt Ballard</h1>
    </Link>
  );
}
export default Logo;
