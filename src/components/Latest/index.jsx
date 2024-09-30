"use client";

import { getAnimeResponse } from "@/libs/api";
import { useEffect, useState } from "react";
import Anime from "../Anime";
import NoMoreLoad from "../../utils/NoMoreLoad";
import LoadingIndicator from "../../utils/LoadingIndicator";
import ErrorMessage from "../../utils/ErrorMessage";

const LatestAnime = ({ initialData, hasNextPage }) => {
  const [latestAnime, setLatestAnime] = useState(initialData || []);
  const [page, setPage] = useState(2);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(hasNextPage);
  const [error, setError] = useState(null);

  const fetchData = async (pageNumber) => {
    if (loading || !hasMore) return;
    setLoading(true);

    try {
      const getLatestAnime = await getAnimeResponse(
        "seasons/now",
        `page=${pageNumber}`
      );

      if (getLatestAnime && getLatestAnime.data) {
        setLatestAnime([...latestAnime, ...getLatestAnime.data]);
        setPage(pageNumber + 1);
        setHasMore(getLatestAnime.pagination.has_next_page);
      }
    } catch (err) {
      setError("Error Fetching Latest Anime");
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
      <Anime api={latestAnime} />
      {loading && <LoadingIndicator />}
      {!hasMore && !loading && <NoMoreLoad />}
      {error && <ErrorMessage message={message} />}
    </>
  );
};

export default LatestAnime;
