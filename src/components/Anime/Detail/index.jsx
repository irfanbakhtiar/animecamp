import ButtonCampList from "./ButtonCampList";
import GenreAnime from "./GenreAnime";
import InfoAnime from "./InfoAnime";
import MusicAnime from "./MusicAnime";
import PosterAnime from "./PosterAnime";
import SynopsisAnime from "./SynopsisAnime";
import TitleAnime from "./TitleAnime";
import TrailerAnime from "./TrailerAnime";

const AnimeDetail = ({ anime, music }) => {
  return (
    <div className="px-4 pt-20 pb-6 xl:px-0">
      <div className="lg:py-6">
        <div className="py-4">
          <PosterAnime anime={anime} />
          <TitleAnime anime={anime} />
          {/* <ButtonCampList /> */}
          <SynopsisAnime anime={anime} />
          <GenreAnime anime={anime} />
        </div>
        <TrailerAnime anime={anime} />
        <InfoAnime anime={anime} />
        <MusicAnime music={music} />
      </div>
    </div>
  );
};

export default AnimeDetail;
