import { createHashRouter, Navigate } from "react-router-dom";
import App from "./App/App";
import MovieList from "../features/movies/MovieList/MovieList";

export const router = createHashRouter([
  {
    path: "/",
    element: <App />,
	  errorElement: <div>error</div>,
    children: [
	    {errorElement: <div>error</div>,
	    children: [
		    {
					index: true,
			    element: <Navigate to={"/movies"} replace={true}/>
		    },
		    {
			    path: "/movies",
			    element: <MovieList/>
		    },
		    {
			    path: "/people",
			    element: <div>ludzie</div>,
		    },
	    ]},
    ],
  },
]);
