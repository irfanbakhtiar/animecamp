import Image from "next/image";
import Link from "next/link";

const Anime = ({ api }) => {
  return (
    <div className="grid grid-cols-3 gap-2 px-4 mx-auto lg:px-0 md:gap-4 lg:gap-5 md:grid-cols-4 lg:grid-cols-6">
      {api?.map((anime, index) => {
        return (
          <Link
            href={`/anime/${anime.mal_id}/detail`}
            className="flex flex-col items-center my-1 text-gray-100 transition-all border border-gray-700 rounded-lg md:max-w-xl hover:text-teal-400 md:my-2"
            key={index}
          >
            <Image
              src={anime.images.webp.image_url}
              alt={anime.title}
              width={225}
              height={318}
              className="w-full h-40 rounded-t-lg md:h-56"
            />
            <div className="p-2 lg:p-3">
              <p className="text-xs font-medium md:text-sm line-clamp-2">
                {anime.title}
              </p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Anime;
