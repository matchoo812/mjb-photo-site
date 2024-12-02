function Title({ text }: { text: string }) {
  return (
    <div className='title relative'>
      <h2 className='text-2xl text-center w-max my-3 mx-auto p-3 border-2 border-overlay backdrop-blur-md shadow-md select-none uppercase dark:text-glow-yellow'>
        {text}
      </h2>
    </div>
  );
}
export default Title;
