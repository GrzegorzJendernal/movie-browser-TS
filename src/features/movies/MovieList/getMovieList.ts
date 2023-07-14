import axios from "axios";

export const getMovieList = async () => {
	const options = {
		method: 'GET',
		url: 'https://api.themoviedb.org/3/movie/popular',
		params: {language: 'en-US', page: '1'},
		headers: {
			accept: 'application/json',
			Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZDUzMDk1NWFjZWRjMjQ3OGNiOTJhMTk0YWZkNDVhYiIsInN1YiI6IjYzZTdlYjNhNjNhYWQyMDA4NTg3NTIzMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oxv_MlyvRTPzhd8zo1ddZvSkPgbC4gip6lYNwMbUYvs'
		}
	};

	const response = await axios.request(options);
	return response.data
};

// axios
// 	.request(options)
// 	.then(function (response) {
// 		console.log(response.data);
// 	})
// 	.catch(function (error) {
// 		console.error(error);
// 	});