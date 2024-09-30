"use client";

import TextResult from "./TextResult";
import Anime from "../Anime";
import ErrorMessage from "../../utils/ErrorMessage";
import LoadingIndicator from "../../utils/LoadingIndicator";
import InputMinCharacter from "./InputMinChar";
import NoMoreLoad from "../../utils/NoMoreLoad";

const SearchResults = ({
  searchResults,
  searchQuery,
  loading,
  hasMore,
  error,
}) => {
  return (
    <>
      {searchResults && (
        <div className="mx-auto">
          {!searchQuery || searchQuery.trim() == "" ? null : (
            <>
              {searchQuery.length >= 3 && (
                <TextResult
                  text={`Results ${searchResults.length} anime from`}
                  keyword={searchQuery}
                />
              )}
              <Anime api={searchResults} />
              {loading && <LoadingIndicator />}
              {searchQuery.length < 3 && <InputMinCharacter />}
              {!hasMore && !loading && <NoMoreLoad />}
              {error && <ErrorMessage message={error} />}
            </>
          )}
        </div>
      )}
    </>
  );
};

export default SearchResults;
