import { getAnimeResponse } from "@/libs/api";

import LatestAnime from "@/components/Latest";
import HeaderMenu from "@/utils/HeaderMenu";

export const metadata = {
  title: "Latest Anime - ANIMECAMP",
  description:
    "Explore top anime series with reviews and a passionate community.",
};

const Page = async () => {
  const initialData = await getAnimeResponse("seasons/now", `page=1`);

  return (
    <div className="pt-20 pb-6 xl:px-0">
      <div className="max-w-screen-lg mx-auto lg:py-6">
        <HeaderMenu title={`All Latest Series`} />
        <LatestAnime
          initialData={initialData.data}
          hasNextPage={initialData.pagination.has_next_page}
        />
      </div>
    </div>
  );
};

export default Page;
