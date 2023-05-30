import { createHashRouter, Navigate } from "react-router-dom";
import App from "./App/App";
import Page from "../common/Page/Page";
import Tile from "../common/Tile/Tile";

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
			    content={<Tile/>}
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
