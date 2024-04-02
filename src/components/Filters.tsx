import Image from "next/image";
import React from "react";
import Filter from "./Filter";

const Filters = () => {
  return (



    <div className="flex flex-wrap grid-cols-1 gap-2 items-center justify-center ml-90 mb-32">
        <div className="flex flex-col">
          <h6 className="text-txtfilter text-base font-medium pt-3 mb-1">Search</h6>
          <div className="items-center rounded-md outline-none bg-white shadow-filter box-border font-medium text-sm flex py-2.5 px-1.5">
            <Image height={10} width={10} alt="chevron"
              src={
                "https://anifinder.netlify.app/static/media/icons-search.aeb48093.svg"
              }
              style={{height: '20px', width:'20px'}}
            />
            <input className="flex ml-1" placeholder="search..." />
          </div>
        </div>
      <Filter category={'Genres'}/>
      <Filter category={'Year'}/>
      <Filter category={'Season'}/>
      <Filter category={'Format'}/>
      <Filter category={'Airing Status'}/>
      
    </div>
  );
};

export default Filters;

{
  /* <div className="flex flex-wrap grid-cols-1 gap-2 items-center ml=90">
        <div className="flex flex-col">
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
      </div> */
}
