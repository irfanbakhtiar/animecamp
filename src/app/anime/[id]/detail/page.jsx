import { getAnimeResponse } from "@/libs/api";
import AnimeDetail from "@/components/Anime/Detail";
import { notFound } from "next/navigation";

export const generateMetadata = async ({ params }) => {
  const { id } = params;
  const anime = await getAnimeResponse(`anime/${id}`);

  return {
    title: `${anime.data.title} - ANIMECAMP`,
    description: anime.data.synopsis || "Anime synopsis not available",
    images: [{ url: anime.data.images.webp.image_url }],
  };
};

const Page = async ({ params: { id } }) => {
  const anime = await getAnimeResponse(`anime/${id}`);
  const music = await getAnimeResponse(`anime/${id}/themes`);

  if (anime.status === 404) {
    notFound();
  }

  return (
    <>
      <div className="mx-auto lg:max-w-screen-md">
        <AnimeDetail anime={anime} music={music} />
      </div>
    </>
  );
};

export default Page;
