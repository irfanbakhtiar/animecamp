import TrailerVideo from "../../../utils/TrailerVideo";

const TrailerAnime = ({ anime }) => {
  return (
    <div className="py-4">
      <h5 className="pb-2 text-lg font-semibold tracking-wide text-teal-400">
        Trailer
      </h5>
      <TrailerVideo youtubeId={anime.data.trailer.youtube_id} />
    </div>
  );
};

export default TrailerAnime;
