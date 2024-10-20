import HomePageSlider from "@/components/templates/HomePageSlider/HomePageSlider";
import MoviesSection from "@/components/templates/MoviesSection/MoviesSection";


export default function Home() {
  // const fe = async () => {
  //   const baseUrl = 'https://api.themoviedb.org/3/'
  //   const apiKey = '275fa05f4a9fc2a08e709dfa2ad6141d'
  //   const url = `${baseUrl}discover/movie?api_key=${apiKey}`


  //   const fetchRes = await fetch((url));
  //   const result = await fetchRes.json();
  //   console.log(result);

  // }
  // fe()
  return (
    <>
      <HomePageSlider />
      <MoviesSection />
    </>
  );
}
