import Image from "next/image";
import React from "react";

const SectionLanding = ({sectionTitle, sectionText, svg}) => {
  
  return (
    <div className="flex justify-center py-20 px-30 max-w-80 mx-8 my-8">
        <Image className="h-24 w-20" alt="landings" width={20} height={20} src={svg}/>
        <div className="flex flex-col">
            <h6 className="text-mjtitleldg text-md">{sectionTitle}</h6>
            <span className="text-spanldg text-sm">{sectionText}</span>
        </div>
    </div>
  );
};

export default SectionLanding;
