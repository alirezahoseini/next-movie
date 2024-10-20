import MainSlider from "@/components/modules/MainSlider/MainSlider";
import MoviesSection from "@/components/templates/MoviesSection/MoviesSection";
import getMovies from "@/services/getMovies";


export default async function Home() {
  const trendingMovies = await getMovies('trending/movie/week');
  const trendingSeries = await getMovies('trending/tv/week');
  // const series = await getMovies('discover/tv');


  return (
    <>
      <MainSlider items={trendingMovies} />
      <MoviesSection
        trendingSeries={trendingSeries}
      />
    </>
  );
}
