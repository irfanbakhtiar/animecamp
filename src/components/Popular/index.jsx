"use client";

import { getAnimeResponse } from "@/libs/api";
import { useEffect, useState } from "react";
import Anime from "../Anime";
import NoMoreLoad from "../../utils/NoMoreLoad";
import LoadingIndicator from "../../utils/LoadingIndicator";
import ErrorMessage from "../../utils/ErrorMessage";

const PopularAnime = ({ initialData, hasNextPage }) => {
  const [popularAnime, setPopularAnime] = useState(initialData || []);
  const [page, setPage] = useState(2);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(hasNextPage);
  const [error, setError] = useState(null);

  const fetchData = async (pageNumber) => {
    if (loading || !hasMore) return;
    setLoading(true);

    try {
      const popAnime = await getAnimeResponse(
        "top/anime",
        `page=${pageNumber}`
      );

      if (popAnime && popAnime.data) {
        setPopularAnime([...popularAnime, ...popAnime.data]);
        setPage(pageNumber + 1);
        setHasMore(popAnime.pagination.has_next_page);
      }
    } catch (err) {
      setError("Error Fetching Popular Anime");
    } finally {
      setLoading(false);
    }
  };

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
        document.documentElement.scrollHeight &&
      !loading &&
      hasMore
    ) {
      fetchData(page);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading, hasMore]);

  return (
    <>
      <Anime api={popularAnime} />
      {loading && <LoadingIndicator />}
      {!hasMore && !loading && <NoMoreLoad />}
      {error && <ErrorMessage message={message} />}
    </>
  );
};

export default PopularAnime;
