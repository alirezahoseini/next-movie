import MainSlider from "@/components/modules/MainSlider/MainSlider";
import MoviesSection from "@/components/templates/MoviesSection/MoviesSection";
import getMovies from "@/services/getMovies";


export default async function Home() {
  const movies = await getMovies('discover/movie');
  const series = await getMovies('discover/tv');


  return (
    <>
      <MainSlider items={movies} />
      {/* <MoviesSection /> */}
    </>
  );
}
