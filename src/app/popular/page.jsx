import { getAnimeResponse } from "@/libs/api";
import HeaderMenu from "@/utils/HeaderMenu";
import PopularAnime from "@/components/Popular/";

export const metadata = {
  title: "Popular Anime - ANIMECAMP",
  description:
    "Explore top anime series with reviews and a passionate community.",
};

const Page = async () => {
  const initialData = await getAnimeResponse("top/anime", `page=1`);

  return (
    <div className="pt-20 pb-6 xl:px-0">
      <div className="max-w-screen-lg mx-auto lg:py-6">
        <HeaderMenu title={`All Popular Anime`} />
        <PopularAnime
          initialData={initialData.data}
          hasNextPage={initialData.pagination.has_next_page}
        />
      </div>
    </div>
  );
};

export default Page;
