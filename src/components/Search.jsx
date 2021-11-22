import React, { useRef, useContext } from "react";
import { toast } from "react-toastify";
import axios from "axios";

// import
import { Search as SearchIcon } from "../assets/svg";

// context
import AppContext from "../context";

// baseurl
const baseUrl = "https://cpe-510-service.herokuapp.com/animal";

const Search = () => {
  const { setAnimal, loading, setLoading, setError } = useContext(AppContext);

  const inputRef = useRef("");

  const focusInput = () => {
    inputRef.current.focus();
  };

  const cleanString = () => {
    let string = inputRef.current.value || "";

    if (string.length < 1) return;

    string = string.toLowerCase();

    let stringArray = string.split("");

    stringArray[0] = stringArray[0].toUpperCase();

    const term = stringArray.join("");

    return term;
  };

  const termSearch = async (term) => {
    try {
      setLoading(true);
      setError(null);
      const { data } = await axios.get(`${baseUrl}?Animals=${term}`);

      setAnimal(data?.data);

      setLoading(false);
    } catch (err) {
      console.log({ err });
      setAnimal({});
      toast.error("Something went wrong");
      setError(`Animal with name  '${term}'  not found`);
      setLoading(false);
    }
  };

  const search = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    const term = cleanString();

    await termSearch(term);
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
        disabled={loading}
      />
      <button
        onClick={search}
        disabled={loading}
        className="bg-gray-900 h-12 w-20 text-white flex items-center justify-center cursor-pointer font-4xl"
      >
        <SearchIcon />
      </button>
    </form>
  );
};

export default Search;
