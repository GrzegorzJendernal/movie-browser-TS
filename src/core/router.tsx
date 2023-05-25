import { createHashRouter } from "react-router-dom";
import Tile from "../common/Tile/Tile";
import App from "./App/App";

export const router = createHashRouter([
  {
    path: "/",
    element: <App />,
	  errorElement: <div>error</div>,
    children: [
	    {errorElement: <div>error</div>,
	    children: [
		    {
			    path: "/movies",
			    element: <Tile/>,
		    },
		    {
			    path: "/people",
			    element: <div>ludzie</div>,
		    },
	    ]},
    ],
  },
]);
