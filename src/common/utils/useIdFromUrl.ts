import { useLocation } from "react-router-dom";

export const useIdFromUrl = () => {
  const location = useLocation();
  const pathnameSegments = location.pathname.split("/");
  const id = pathnameSegments[2];

  return id;
};
