import Image from "next/image";
import Link from "next/link";
import React from "react";

const Card = ({ anime }) => {
  const title = anime.attributes.titles.en;
  const poster = anime.attributes.posterImage.large;
  //   const score = anime.attributes.averageRating;
  //   const synopsis = anime.attributes.synopsis;
  //   const year = anime.attributes.createdAt.slice(0, 4);
  //   const rank = anime.attributes.popularityRank;
  //   const rate = anime.attributes.ratingRank;
  return (
    <div className="w-full mx-auto">
      <div className="p-4 max-w-6xl mx-auto">
        <Link href={`/anime/${anime.id}`}>
          <div className="flex flex-col justify-evenly">
            <Image
              className="h-full max-w-full mb-3"
              height={265}
              width={185}
              alt="poster"
              src={poster}
              style={{ height: "100%", width: "100%" }}
            />
            <div className="text-sm mb-3 text-txtcard">{title}</div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Card;
