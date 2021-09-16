import React from "react";

// background Image
import animal_bg from "../assets/images/animal_bg.png";

//components
import { Header, Search } from "../components";

const SearchPage = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${animal_bg})`,
      }}
      className="w-screen h-screen bg-center bg-cover bg-norepeat"
    >
      <Header />

      <div className="w-full h-full flex items-center justify-center">
        <Search />
      </div>
    </div>
  );
};

export default SearchPage;
