// eslint-disable-next-line import/named
import axios from "axios";

interface Movie {
	adult: boolean,
	backdrop_path: string,
	genre_ids: number[],
	id: number,
	original_language: string,
	original_title: string,
	overview: string,
	popularity: number,
	poster_path: string,
	release_date: string,
	title: string,
	video: boolean,
	vote_average: number,
	vote_count: number,
}

interface MovieListData {
	page: number,
	results: Movie[],
	total_pages: number,
	total_results: number,
}

interface Params {
	language: string,
	page: string,
}

const getData = async (url: string, params?: Params) => {
	const options = {
		method: 'GET',
		url: url,
		params: params,
		headers: {
			accept: 'application/json',
			Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZDUzMDk1NWFjZWRjMjQ3OGNiOTJhMTk0YWZkNDVhYiIsInN1YiI6IjYzZTdlYjNhNjNhYWQyMDA4NTg3NTIzMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oxv_MlyvRTPzhd8zo1ddZvSkPgbC4gip6lYNwMbUYvs'
		}
	};

	const response = await axios.request(options);
	return response.data
};

export const getMovieList = (): Promise<MovieListData> => getData('https://api.themoviedb.org/3/movie/popular', {language: "us-en", page: "1"});