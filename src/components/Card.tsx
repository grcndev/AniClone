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
    <div>
      <Link href={`/anime/${anime.id}`}>
        <div className="grid grid-cols-5 auto-rows-auto">
          <div className="flex flex-col">
          <Image
            className="h-52 w-44"
            height={210}
            width={150}
            alt="poster"
            src={poster}
          ></Image>

        <div className="color-txtcard">{title}</div>
        </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
