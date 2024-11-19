import Gallery from "../components/gallery/Gallery";
import Title from "../components/Title";

export default function StreetPage() {
  return (
    <section className='bg-background text-foreground'>
      <Title text='Urban and Street Photography' />
      <Gallery term='street' />
    </section>
  );
}
