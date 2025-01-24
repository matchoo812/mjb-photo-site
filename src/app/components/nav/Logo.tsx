import Link from "next/link";

function Logo() {
  return (
    <Link
      href='/'
      className='text-3xl uppercase tracking-wider py-2 px-4 select-none cursor-pointer hover:drop-shadow-light dark:drop-shadow-glow dark:hover:drop-shadow-glowYellow duration-300'>
      <h1>Matt Ballard</h1>
    </Link>
  );
}
export default Logo;
