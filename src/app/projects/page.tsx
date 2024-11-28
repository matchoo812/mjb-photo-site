import env from "@/utils/env";
import Title from "../components/Title";
import { fetchBackgroundImage } from "@/utils/fetchImages";
import ProjectCard from "../components/ProjectCard";

async function ProjectsPage() {
  const busanCoverImg = await fetchBackgroundImage(env.BUSAN_COVER_IMG_ID, 9);
  const busanTitle = "Busan: Portrait of a City | 부산";
  const busanDescription =
    "A series of images of exploration and daily life in my favorite city";
  // console.log(busanCoverImg);

  return (
    <div className='flex flex-col items-center w-full'>
      <Title text='Projects' />
      <ProjectCard
        image={busanCoverImg}
        title={busanTitle}
        description={busanDescription}
      />
    </div>
  );
}
export default ProjectsPage;
