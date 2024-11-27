import { Button } from "@/components/ui/button";

function Title({ text }: { text: string }) {
  return (
    <div className='title relative'>
      <h2 className='text-2xl text-center my-3 select-none uppercase dark:text-glow-yellow'>
        {text}
      </h2>
    </div>
  );
}
export default Title;
