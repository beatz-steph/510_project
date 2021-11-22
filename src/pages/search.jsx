import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

//components
import { Header, Search, LazyImage } from "../components";

const SearchPage = ({ animal }) => {
  const history = useHistory();

  const animal_bg =
    "https://res.cloudinary.com/dunevr8hc/image/upload/v1631800324/ndqrdntdx0vosqgiytwm.png";

  const [load, setLoad] = useState(false);
  const onLoad = () => {
    setLoad(true);
  };

  useEffect(() => {
    if (!animal?.Animals) return;

    history.push("/result");
  });

  return (
    <LazyImage
      link={animal_bg}
      className={`w-screen h-screen bg-center bg-cover bg-norepeat ${
        load ? "" : "bg-black"
      }`}
      onload={onLoad}
    >
      <Header />

      <div className="w-full h-full flex items-center justify-center">
        <div className="mt-72">
          <Search />
        </div>
      </div>
    </LazyImage>
  );
};

export default SearchPage;
