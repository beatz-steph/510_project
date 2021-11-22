import React, { useRef } from "react";
import { useHistory } from "react-router-dom";

// import
import { Search as SearchIcon } from "../assets/svg";

const Search = () => {
  const inputRef = useRef("");
  const history = useHistory();

  const focusInput = () => {
    inputRef.current.focus();
  };
  const search = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const string = inputRef.current.value || "";

    string.toLowerCase();

    let stringArray = string.split("");

    stringArray[0] = stringArray[0].toUpperCase();

    const term = stringArray.join("");

    console.log({ term, stringArray });

    history.push(`/result/${term}`);
  };
  return (
    <form
      onSubmit={search}
      onClick={focusInput}
      className="flex items-center rounded-sm bg-white rounded-lg overflow-hidden "
    >
      <input
        ref={inputRef}
        className="text-2xl w-96 px-4 py-2 focus:outline-none"
      />
      <div
        onClick={search}
        className="bg-gray-900 h-12 w-20 text-white flex items-center justify-center cursor-pointer font-4xl"
      >
        <SearchIcon />
      </div>
    </form>
  );
};

export default Search;
