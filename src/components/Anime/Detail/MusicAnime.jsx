import MusicData from "./MusicData";

const MusicAnime = ({ music }) => {
  return (
    <>
      {music.data.openings.length > 0 || music.data.endings.length > 0 ? (
        <div className="pt-4">
          <h5 className="pb-2 text-lg font-semibold tracking-wide text-teal-400">
            Music
          </h5>
          <ul className="tracking-wide">
            {music.data.openings.length > 0 ? (
              <MusicData textTitle={"Openings"} api={music.data.openings} />
            ) : null}

            {music.data.endings.length > 0 ? (
              <MusicData textTitle={"Endings"} api={music.data.endings} />
            ) : null}
          </ul>
        </div>
      ) : null}
    </>
  );
};

export default MusicAnime;
