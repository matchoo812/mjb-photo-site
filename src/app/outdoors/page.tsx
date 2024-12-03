import Gallery from "../components/gallery/Gallery";
import Title from "../components/Title";

export default function OutdoorsPage() {
  return (
    <section className='bg-background text-foreground'>
      <Title text='Outdoors and Travel Photography' isGallery />
      <Gallery term='outdoors' />
    </section>
  );
}
