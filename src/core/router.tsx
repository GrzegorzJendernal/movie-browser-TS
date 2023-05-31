import { createHashRouter, Navigate } from "react-router-dom";
import App from "./App/App";
import Page from "../common/Page/Page";
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
			    element: <Page
			    title={"Popular movies"}
			    content={<MovieList/>}
			             />,
		    },
		    {
			    path: "/people",
			    element: <div>ludzie</div>,
		    },
	    ]},
    ],
  },
]);
