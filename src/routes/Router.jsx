import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Search from "../pages/Search";
import Main from "../layout/Main";
import About from "../pages/About";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/search",
          element: <Search />,
        },
        {
          path: "/about/:id",
          element: <About />,
        }
        
      ],
    }
   
  ]);
  
  export default router;