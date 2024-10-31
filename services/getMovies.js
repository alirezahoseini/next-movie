const getMovies = async (value = "movies", queries = false) => {
  const baseUrl = "https://api.themoviedb.org/3/";
  const apiKey = "275fa05f4a9fc2a08e709dfa2ad6141d";
  const url = `${baseUrl}${value}${
    queries ? `?${queries}&` : "?"
  }include_adult=true&api_key=${apiKey}`;

  try {
    const fetchRes = await fetch(url);
    const result = await fetchRes.json();
    return { status: fetchRes.status, data: result };
  } catch (error) {
    return { status: "error", error };
  }
};

export default getMovies;
