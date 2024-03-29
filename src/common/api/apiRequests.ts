// eslint-disable-next-line import/named
import axios from "axios";
import { GenresData } from "../types/genres.ts";
import { Credits, Movie, MovieCredits, MovieListData, Params, PeopleListData, Person } from "../types/apiData.ts";
import { wait } from "../utils/wait.ts";

const languageOptions = "en-US";

const getData = async (url: string, params?: Params) => {
  const options = {
    method: "GET",
    url: url,
    baseURL: "https://api.themoviedb.org/3",
    params: params,
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZDUzMDk1NWFjZWRjMjQ3OGNiOTJhMTk0YWZkNDVhYiIsInN1YiI6IjYzZTdlYjNhNjNhYWQyMDA4NTg3NTIzMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oxv_MlyvRTPzhd8zo1ddZvSkPgbC4gip6lYNwMbUYvs",
    },
  };

  try {
    await wait();
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getMovieList = (page: number): Promise<MovieListData> =>
  getData("/movie/popular", { language: languageOptions, page: `${page}` });

export const getMoviesByQuery = (page: number, query: string): Promise<MovieListData> =>
  getData("/search/movie", { language: languageOptions, page: `${page}`, query: `${query}` });

export const getGenres = (): Promise<GenresData> => getData("/genre/movie/list");

export const getMovieDetails = (id: string): Promise<Movie> => getData(`movie/${id}`, { language: languageOptions });

export const getPeopleList = (page: number): Promise<PeopleListData> =>
  getData("/person/popular", { language: languageOptions, page: `${page}` });

export const getPersonByQuery = (page: number, query: string): Promise<PeopleListData> =>
  getData("/search/person", { language: languageOptions, page: `${page}`, query: `${query}` });

export const getCredits = (id: string): Promise<Credits> =>
  getData(`movie/${id}/credits`, { language: languageOptions });

export const getPersonDetails = (id: string): Promise<Person> => getData(`person/${id}`, { language: languageOptions });

export const getMovieCredits = (id: string): Promise<MovieCredits> =>
  getData(`person/${id}/movie_credits`, { language: languageOptions });
