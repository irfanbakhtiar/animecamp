import Link from "next/link";

export const metadata = {
  title: "Page Not Found - ANIMECAMP",
  description:
    "Explore top anime series with reviews and a passionate community.",
};

const NotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex flex-col items-center">
        <p className="pb-2 text-sm font-medium text-teal-400 md:text-base">
          ごめんなさい
        </p>
        <h3 className="pb-6 text-xl font-bold text-neutral-100 md:text-2xl">
          Gomennasai, Page Not Found.
        </h3>
        <Link
          href={"/"}
          className="text-sm font-semibold uppercase md:text-base text-neutral-400 hover:text-neutral-100"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
