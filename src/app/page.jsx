import Anime from "@/components/Anime";
import HeaderMenu from "@/utils/HeaderMenu";
import { getAnimeResponse } from "@/libs/api";

const Page = async () => {
  const popAnimes = await getAnimeResponse("top/anime", "limit=6");
  const ongoingAnimes = await getAnimeResponse("seasons/now", "limit=12");

  return (
    <div className="pt-20 pb-6 xl:px-0">
      <section className="max-w-screen-lg mx-auto lg:py-6">
        <HeaderMenu
          title="Most Popular"
          linkTitle="View All"
          linkHref="/popular"
        />
        <Anime api={popAnimes.data} />
      </section>
      <section className="max-w-screen-lg pt-6 mx-auto lg:py-6">
        <HeaderMenu
          title="Latest Series"
          linkTitle="View All"
          linkHref="/latest"
        />
        <Anime api={ongoingAnimes.data} />
      </section>
    </div>
  );
};

export default Page;
