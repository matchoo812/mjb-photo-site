import Gallery from "../components/Gallery";
import Title from "../components/Title";

export default function OutdoorsPage() {
  return (
    <section className='bg-background text-foreground'>
      <Title text='Outdoors and Travel Photography' />
      <Gallery term='outdoors' />
    </section>
  );
}
