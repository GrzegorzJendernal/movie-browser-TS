import { createHashRouter } from "react-router-dom";
import Header from "../../common/Header/Header";

export const router = createHashRouter([
  {
    path: "/",
    element: <Header />,
    children: [
      {
        path: "/movies",
        element: <div>filmy</div>,
      },
      {
        path: "/people",
        element: <div>ludzie</div>,
      },
    ],
  },
]);
