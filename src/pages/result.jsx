import React, { useState, useContext } from "react";

//components
import { Header, LazyImage, Search } from "../components";

// app context
import AppContext from "../context";

const Result = () => {
  const { animal, loading, error } = useContext(AppContext);

  const [imageLoad, setImageLoad] = useState(false);

  // make apirequest and use data to fill page

  const onload = () => {
    setImageLoad(true);
  };

  return (
    <div className="h-screen">
      <Header alt />

      <div className=" w-screen h-full  flex">
        <div className="ml-auto w-5/12 px-8">
          <div className="mt-60 ring-1 max-w-max rounded-lg">
            <Search />
          </div>
          <div
            className="w-full mt-10 ring-gray-600 ring-2 rounded-sm py-8 px-8"
            style={{ height: "fit-content" }}
          >
            {!error && animal?.Animals ? (
              <>
                <h1 className="text-6xl font-bold mb-5 w-full break-words">
                  {animal?.Animals}
                </h1>
                <span className="italic font-thin text-2xl">
                  {animal["Transcription English"]}
                </span>

                <span className="mt-8 block font-bold text-4xl mb-3">
                  {animal["Translation (Yoruba)"]}
                </span>
                <span className="font-thin italic text-2xl">
                  {animal["Transcription Yoruba"]}
                </span>
                <div className="mt-10">
                  <span className="font-bold mb-5 text-2xl text-gray-900">
                    Description
                  </span>
                  <p className="font-thin text-xl italics">
                    {animal?.Description}
                  </p>
                </div>
              </>
            ) : (
              <span className="font-bold mb-5 text-2xl text-gray-900">
                {error}
              </span>
            )}
          </div>
        </div>
        {!loading ? (
          <LazyImage
            className={`w-6/12 h-full ${
              imageLoad ? "bg-gray-700" : "bg-gray-900"
            } bg-center bg-contain bg-no-repeat`}
            link={animal["Image URL"]}
            onload={onload}
          ></LazyImage>
        ) : (
          <div className="w-6/12 h-full bg-gray-700"></div>
        )}
      </div>
    </div>
  );
};

export default Result;
