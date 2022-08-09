let api_key = "89b7aec3483c3e4b2c9b62cf7eb1f31f";
let base_url = "https://api.themoviedb.org/3";
let Search = `${base_url}/search/multi?api_key=${api_key}`;

export async function FeachFromTMDB(props) {
  let response = await fetch(props);
  let body = await response.json();
  let data = body.results;
  return data;
}

export async function get_popular_movie(page) {
  let popular_movie=`${base_url}/movie/popular?api_key=${api_key}&language=en-US&page=${page}`;
  return FeachFromTMDB(popular_movie);
}

export async function get_Playing_movie(page) {
  let Playing_movie = `${base_url}/movie/now_playing?api_key=${api_key}&language=en-US&page=${page}`;
  return FeachFromTMDB(Playing_movie);
}
export async function get_Upcoming_movie(page) {
  let Upcoming_movie = `${base_url}/movie/upcoming?api_key=${api_key}&language=en-US&page=${page}`;
  return FeachFromTMDB(Upcoming_movie);
}

export async function get_Toprated_movie(page) {
  let Toprated_movie = `${base_url}/movie/top_rated?api_key=${api_key}&language=en-US&page=${page}`;
  return FeachFromTMDB(Toprated_movie);
}

export async function get_popular_tv(page) {
  let popular_tv = `${base_url}/tv/popular?api_key=${api_key}&language=en-US&page=${page}`;
   return FeachFromTMDB(popular_tv);
}

export async function get_Search(searchText) {
  return FeachFromTMDB(Search + "&" + searchText);
}

export async function get_movie_Details(id){
  let movie_detail=`${base_url}/movie/${id}?api_key=${api_key}&language=en-US`;
  let response = await fetch(movie_detail);
  let body = await response.json();
  let data = body;
  return data;
}


export async function get_popular_people(page) {
  let popular_people = `${base_url}/person/popular?api_key=${api_key}&language=en-US&page=${page}`;
  return FeachFromTMDB( popular_people);
}
