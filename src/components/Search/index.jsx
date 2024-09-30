"use client";

import { useState, useEffect } from "react";
import { getAnimeResponse } from "@/libs/api";
import SearchResults from "./SearchResults";
import SearchInput from "./SearchInput";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [debounceTimeOut, setDebounceTimeOut] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = async (query, pageNumber) => {
    if (loading) return;
    setLoading(true);
    setError(null);

    try {
      const searchAnime = await getAnimeResponse(
        "anime",
        `q=${query}&page=${pageNumber}`
      );

      if (searchAnime && searchAnime.data.length > 0) {
        setSearchResults(
          pageNumber === 1
            ? searchAnime.data
            : [...searchResults, ...searchAnime.data]
        );
        setPage(pageNumber + 1);
        setHasMore(searchAnime.pagination?.has_next_page);
      }
    } catch (err) {
      setError("Error fetching data. Please try again");
      console.error("Error Fetching Anime:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleInputSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (!query || query.trim() == "") return;

    if (debounceTimeOut) clearTimeout(debounceTimeOut);

    setDebounceTimeOut(
      setTimeout(() => {
        if (query.length >= 3) {
          setSearchResults([]);
          setPage(1);
          fetchData(query, 1);
        } else {
          setSearchResults([]);
        }
      }, 300)
    );
  };

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
        document.documentElement.scrollHeight &&
      !loading &&
      hasMore
    ) {
      fetchData(searchQuery, page);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [loading]);

  return (
    <>
      <SearchInput
        searchQuery={searchQuery}
        handleInputSearch={handleInputSearch}
      />
      <SearchResults
        searchResults={searchResults}
        searchQuery={searchQuery}
        loading={loading}
        hasMore={hasMore}
        error={error}
      />
    </>
  );
};

export default Search;
