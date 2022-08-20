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
export async function get_airing_tv(page) {
  let airing_today_tv=`${base_url}/tv/airing_today?api_key=${api_key}&page=${page}`;
  return FeachFromTMDB(airing_today_tv);
}

export async function get_on_tv(page) {
  let on_the_air_tv=`${base_url}/tv/on_the_air?api_key=${api_key}&page=${page}`;
  return FeachFromTMDB(on_the_air_tv);
}

 export async function get_topRated_tv(page) {
  let top_rated_tv=`${base_url}/tv/top_rated?api_key=${api_key}&page=${page}`;
  return FeachFromTMDB(top_rated_tv);
}

export async function get_Search(searchText) {
  return FeachFromTMDB(Search + "&" + searchText);
}

export async function get_movie_Details(id,genre_ids){
  let movie_detail=`${base_url}/movie/${id}?api_key=${api_key}&language=en-US&with_genres=${genre_ids}`;
  let response = await fetch(movie_detail);
  let body = await response.json();
  let data = body;
  return data;
}
export async function get_tv_Details(id, genre_ids) {
  let tv_Details=`${base_url}/tv/${id}?api_key=${api_key}&language=en-US&with_genres=${genre_ids}`;
  let response = await fetch(tv_Details);
  let body = await response.json();
  let data = body;
  return data;
}

export async function get_popular_people(page) {
  let popular_people = `${base_url}/person/popular?api_key=${api_key}&language=en-US&page=${page}`;
  return FeachFromTMDB( popular_people);
}

export async function get_person_info(id) {
  let person_info=`${base_url}/person/${id}?api_key=${api_key}&language=en-US`;
  let response = await fetch(person_info);
  let body = await response.json();
  let data = body;
  return data;
}


export async function get_movie_credits(id) {
  let movie_credits=`${base_url}/movie/${id}/credits?api_key=${api_key}`;
  let response = await fetch(movie_credits);
  let body = await response.json();
  let data = body;
  return data;
}
export async function get_tv_credits(id) {
  let tv_credits=`${base_url}/tv/${id}/credits?api_key=${api_key}&sort_by=known_for_department.desc`;
  let response = await fetch(tv_credits);
  let body = await response.json();
  let data = body;
  return data;
}


export async function get_person_credits(id) {
  let person_credits=`${base_url}/person/${id}/movie_credits?api_key=${api_key}&sort_by=release_date.desc`;
    let response = await fetch(person_credits);
    let body = await response.json();
    let data = body;
    return data;
}
export async function get_movie_recommendations(id) {
  let movie_recommendations=`${base_url}/movie/${id}/recommendations?api_key=${api_key}`;
  let response = await fetch(movie_recommendations);
  let body = await response.json();
  let data = body;
  return data;
}

export async function get_credits(id) {
  let response = await fetch(`${base_url}/person/${id}/combined_credits?api_key=${api_key}`)
  let body = await response.json();
  let data = body.cast;
  console.log(data)
  return data;
}

export async function get_movie_genre() {
  let movie_genre=`${base_url}/genre/movie/list?api_key=${api_key}`;
  let response = await fetch(movie_genre);
  let body = await response.json();
  let data = body;
  return data;
}


export async function get_discover_movie(page,genres_id) {
  let discover_movie=`${base_url}/discover/movie?api_key=${api_key}&page=${page}&with_genres=${genres_id}`;
  let response = await fetch(discover_movie);
  let body = await response.json();
  let data = body;
  return data;
}

export async function get_discover_tv(page,genres_id) {
  let discover_tv=`${base_url}/discover/tv?api_key=${api_key}&page=${page}&with_genres=${genres_id}`;
  let response = await fetch(discover_tv);
  let body = await response.json();
  let data = body;
  return data;
}