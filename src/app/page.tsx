import AnimeContainer from "@/components/AnimeContainer"

 const Home = async ({searchParams}) => {
  const genre = searchParams.genre
  const res = await fetch(`https://kitsu.io/api/edge/trending/anime?page[limit]=5&sort=-${genre ==='averageRating'}`)
    
  const {data} = await res.json()
  if(!res.ok) {
    throw new Error('failed to fetch data')
  }
 
  return (
    <AnimeContainer data={data}/>
  );
}

export default Home;


 //const animesUrl = "https://kitsu.io/api/edge/trending/anime?limit=20?";
  // const topMangasUrl = 'https://kitsu.io/api/edge/trending/manga?page[limit]=5&sort=-averageRating';
  // const averageRatingUrl = 'https://kitsu.io/api/edge/anime?page[limit]=5&sort=-averageRating';
  // const highestUrl = 'https://kitsu.io/api/edge/manga?page[limit]=20&page[offset]=0&sort=-startDate&sort=-averageRating';