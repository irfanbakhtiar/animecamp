import { FilmSlate } from "@phosphor-icons/react/dist/ssr";

const SearchInput = ({ searchQuery, handleInputSearch }) => {
  return (
    <div className="relative max-w-2xl px-4 mx-auto">
      <div className="absolute pt-2.5 pl-4 text-gray-300">
        <FilmSlate size={28} />
      </div>
      <input
        className="block w-full max-w-screen-md pl-14 pr-6 py-3.5 text-gray-100 bg-gray-700 rounded-full shadow-sm placeholder:text-gray-400 placeholder:font-medium placeholder:text-base focus:outline-none sm:text-sm"
        placeholder="Search..."
        type="text"
        name="search"
        autoComplete="off"
        autoCorrect="off"
        spellCheck="false"
        value={searchQuery}
        onChange={handleInputSearch}
      />
    </div>
  );
};

export default SearchInput;
