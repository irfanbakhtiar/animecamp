import Search from "@/components/Search";

export const metadata = {
  title: "Search Anime - ANIMECAMP",
  description:
    "Explore top anime series with reviews and a passionate community.",
};

const Page = () => {
  return (
    <div className="max-w-screen-lg pt-20 pb-6 mx-auto xl:px-0 ">
      <div className="w-full lg:pt-6">
        <div className="flex items-center justify-center ">
          <h1 className="pb-4 text-xl font-semibold tracking-wide text-teal-400 lg:text-2xl">
            Search Anime
          </h1>
        </div>
        <Search />
      </div>
    </div>
  );
};

export default Page;
