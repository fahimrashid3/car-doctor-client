import { createBrowserRouter } from "react-router-dom";
import Main from "../assets/Layout/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
  },
]);
export default router;
