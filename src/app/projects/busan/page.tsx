import Gallery from "@/app/components/gallery/Gallery";
import Title from "@/app/components/Title";

export default function BusanGalleryPage() {
  return (
    <section className='bg-background text-foreground'>
      <Title text='Busan: Portrait of a City' />
      <Gallery term='busan' />
    </section>
  );
}
