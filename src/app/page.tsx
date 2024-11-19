import Gallery from "./components/gallery/Gallery";

export default function Home() {
  return (
    <section className='bg-background text-foreground'>
      <h2 className='text-2xl pb-3 text-center'>Featured Images</h2>
      <Gallery term='featured' />
    </section>
  );
}
