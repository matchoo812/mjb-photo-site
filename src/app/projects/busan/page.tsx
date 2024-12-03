import Gallery from "@/app/components/gallery/Gallery";
import Title from "@/app/components/Title";

export default function BusanGalleryPage() {
  return (
    <section className='bg-background text-foreground'>
      <Title text='Busan: Portrait of a City | 부산' isGallery />
      <Gallery term='busan' />
    </section>
  );
}
