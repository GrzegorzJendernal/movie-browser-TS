import { Genres, GenresData } from "../types/genres.ts";

export const getGenreName = (genresData: GenresData | undefined, genreId: number) => {
	if (!genresData) return;
	const genre = genresData.genres.find((genre: Genres) => genre.id === genreId);
	return genre && genre.name;
};