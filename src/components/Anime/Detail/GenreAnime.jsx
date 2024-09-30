const GenreAnime = ({ anime }) => {
  return (
    <>
      {anime.data.genres.length > 0 ? (
        <div className="flex flex-row gap-2 pt-2 overflow-x-auto">
          {anime.data.genres.map((genre, index) => {
            return (
              <div className="flex flex-row" key={index}>
                <div className="px-2 py-1 md:px-3 md:py-1.5 text-xs font-medium text-teal-400 uppercase border rounded-full md:text-sm border-teal-400 tracking-wide">
                  {genre.name}
                </div>
              </div>
            );
          })}
        </div>
      ) : null}
    </>
  );
};

export default GenreAnime;
