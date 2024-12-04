import Gallery from "./components/gallery/Gallery";
import Title from "./components/Title";

export default function Home() {
  return (
    <section className='bg-background text-foreground'>
      <Title text='Featured Images' isGallery isOverlay />
      <Gallery term='featured' />
    </section>
  );
}
