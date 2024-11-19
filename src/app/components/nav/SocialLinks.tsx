import { TfiInstagram, TfiFacebook } from "react-icons/tfi";

function SocialLinks() {
  return (
    <div className='flex items-center justify-center group mr-4'>
      <a
        href='https://www.instagram.com/matthew.james.812'
        className='mx-1 my-auto hover-link '>
        <TfiInstagram className='h-7 w-7 rounded-[4px] hover:-translate-y-[2px] hover:shadow-lg duration-300' />
      </a>
      <a
        href='https://www.facebook.com/matthewjamesph/'
        className='mx-1 my-auto hover-link'>
        <TfiFacebook className='h-7 w-7 p-1 border border-foreground rounded-[4px] hover:-translate-y-[2px] hover:shadow-lg duration-300' />
      </a>
    </div>
  );
}
export default SocialLinks;
