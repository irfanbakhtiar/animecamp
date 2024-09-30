"use client";

import { useState } from "react";

const SynopsisAnime = ({ anime }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      {anime.data.synopsis ? (
        <div className="relative py-4">
          {anime.data.synopsis.length > 200 ? (
            <>
              <div
                className={`text-sm tracking-wide md:text-base text-gray-100 ${
                  isExpanded ? "" : "max-h-24 overflow-hidden relative"
                }`}
              >
                {anime.data.synopsis}
                {!isExpanded && (
                  <div className="absolute bottom-0 left-0 w-full h-12 rounded bg-gradient-to-t from-gray-900 to-transparent"></div>
                )}
              </div>
              <button
                className="block w-full mx-auto mt-2 text-sm font-medium text-teal-400 uppercase hover:text-teal-600 md:text-base"
                onClick={toggleReadMore}
              >
                {isExpanded ? "Read Less" : "Read More"}
              </button>
            </>
          ) : (
            <div className="text-sm tracking-wide text-gray-100 md:text-base">
              {anime.data.synopsis}
            </div>
          )}
        </div>
      ) : null}
    </>
  );
};

export default SynopsisAnime;
