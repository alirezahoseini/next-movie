import MainSlider from "@/components/modules/MainSlider/MainSlider";
import MoviesSection from "@/components/templates/MoviesSection/MoviesSection";
import useApi from "@/hooks/useApi";
import getMovies from "@/services/getMovies";

export default async function Home() {
  return (
    <>
      <MainSlider />
      <MoviesSection />
    </>
  );
}
