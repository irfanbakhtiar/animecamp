import InfoData from "./InfoData";

const InfoAnime = ({ anime }) => {
  return (
    <div className="py-4 tracking-wide">
      <h5 className="pb-2 text-lg font-semibold text-teal-400">Information</h5>
      {anime.data.studios.length < 1 ? null : (
        <InfoData textTitle={"Studios"} api={anime.data.studios} />
      )}
      {!anime.data.source ? null : (
        <InfoData textTitle={"Source"} textData={anime.data.source} />
      )}
      {!anime.data.title_english && !anime.data.title_japanese ? null : (
        <InfoData
          textTitle={"Titles"}
          textData={anime.data.title_english}
          moreTextData={anime.data.title_japanese}
        />
      )}
      {!anime.data.status ? null : (
        <InfoData textTitle={"Status"} textData={anime.data.status} />
      )}
      {!anime.data.aired.string ? null : (
        <InfoData textTitle={"Aired"} textData={anime.data.aired.string} />
      )}
      {!anime.data.duration ? null : (
        <InfoData textTitle={"Duration"} textData={anime.data.duration} />
      )}
      {!anime.data.rating ? null : (
        <InfoData textTitle={"Rating"} textData={anime.data.rating} />
      )}
      {!anime.data.score ? null : (
        <InfoData textTitle={"Score"} textData={anime.data.score.toFixed(1)} />
      )}
    </div>
  );
};

export default InfoAnime;
