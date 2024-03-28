import Image from "next/image";
import React from "react";

const Filters = () => {
  return (
    <>
      <div className="flex flex-wrap grid-cols-1 gap-2 items-center ml=52">
        <div className="flex">
          <h6 className="text-sm text-light pt-3 pl-0 mb-1">Search</h6>
          <div className="items-center flex font-medium text-sm p-x-6 p-y-4">
            <Image
              height={10}
              width={10}
              alt="chevron"
              src={
                "https://anifinder.netlify.app/static/media/icons-search.aeb48093.svg"
              }
            />
            <input className="flex ml-1" placeholder="search..." />
          </div>
        </div>

        <div className="cursor-pointer">
          <h6 className="text-txtfilter text-base font-medium pt-3 mb-1">
            Genres
          </h6>
          <div className="items-center justify-center bg-white box-border shadow-filter grid p-y-4 p-x-6">
            <input placeholder="any" />
            <Image
              height={10}
              width={10}
              alt="chevron"
              src={
                <path
                  d="M6.34317 7.75732L4.92896 9.17154L12 16.2426L19.0711 9.17157L17.6569 7.75735L12 13.4142L6.34317 7.75732Z"
                  fill="currentColor"
                ></path>
              }
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Filters;
