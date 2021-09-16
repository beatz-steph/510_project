import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

// comment out after api implementation
import fox from "../assets/images/fox.png";
// import { useQuery } from "react-query";

//components
import { Header } from "../components";

const Result = () => {
  const { name } = useParams();

  // make apirequest and use data to fill page
  // const { isLoading, error, data } = useQuery("animal data", () => {
  //   fetch("").then((res) => res.json());
  // });

  useEffect(() => {
    console.log({ name });
  }, [name]);
  return (
    <div className="h-screen">
      <Header alt />
      <div className=" w-screen h-full  flex">
        <div className="ml-auto w-5/12  flex px-8">
          <div
            className="w-full mt-40 ring-gray-600 ring-2 rounded-sm py-8 px-8"
            style={{ height: "fit-content" }}
          >
            <h1 className="text-6xl font-bold mb-5 w-full break-words">
              {name}
            </h1>
            <span className="italic font-thin text-2xl">/fndvjndf/</span>

            <span className="mt-8 block font-bold text-4xl mb-3">Kolokolo</span>
            <span className="font-thin italic text-2xl">/dnjfknd/</span>
            <div className="mt-10">
              <span className="font-bold mb-5 text-2xl text-gray-900">
                Description
              </span>
              <p className="font-thin text-xl italics">
                Foxes are small to medium-sized, omnivorous mammals belonging to
                several genera of the family Canidae. They have a flattened
                skull, upright triangular ears, a pointed, slightly upturned
                snout, and a long bushy tail (or brush).
              </p>
            </div>
          </div>
        </div>
        <div
          className="w-6/12 h-full bg-gray-300 bg-center bg-cover bg-no-repeat"
          style={{ backgroundImage: `url(${fox})` }}
        ></div>
      </div>
    </div>
  );
};

export default Result;
