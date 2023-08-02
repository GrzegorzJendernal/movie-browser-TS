import { createHashRouter, Navigate } from "react-router-dom";
import App from "./App/App";
import MovieList from "../features/movies/MovieList/MovieList";
import ErrorPage from "../common/ErrorPage/ErrorPage";
import MovieDetails from "../features/movies/MovieDetails/MovieDetails";

export const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Navigate to={"/movies"} replace={true} />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          {
            index: true,
            element: <Navigate to={"/movies"} replace={true} />,
          },
          {
            path: "/movies",
            element: <MovieList />,
          },
          {
            path: "/movies/:movieId",
            element: <MovieDetails />,
          },
          {
            path: "/people",
            element: <ErrorPage />,
          },
        ],
      },
    ],
  },
]);
