const TitleAnime = ({ anime }) => {
  return (
    <div className="pt-6 lg:pt-10">
      <h3 className="text-xl font-semibold tracking-wide text-gray-100 md:text-2xl">
        {anime.data.title}
      </h3>
      <h5 className="py-2 text-sm font-medium text-teal-400">
        {!anime.data.episodes ? null : `${anime.data.episodes} Episodes |`}{" "}
        {anime.data.type}{" "}
        {!anime.data.season
          ? null
          : `| ${
              anime.data.season.charAt(0).toUpperCase() +
              anime.data.season.slice(1)
            }`}{" "}
        {!anime.data.year ? null : `${anime.data.year}`}{" "}
      </h5>
    </div>
  );
};

export default TitleAnime;
