import Image from "next/image";

const PosterAnime = ({ anime }) => {
  return (
    <Image
      src={anime.data.images.webp.large_image_url}
      alt={anime.data.title}
      width={420}
      height={500}
      className="mx-auto shadow-lg w-[250px] md:h-[400px] h-[350px] rounded-3xl"
    />
  );
};

export default PosterAnime;
