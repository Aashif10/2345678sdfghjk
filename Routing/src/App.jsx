import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Landing from "./Components/Landing";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Service from "./Components/Service";
import { Help } from "./Components/Help";

const router = createBrowserRouter([
  {
    path: "/",
    element: <><Landing></Landing><Home></Home></>
  },
  {
    path: "/home",
    element: <><Landing></Landing> <Home></Home></>
  },
  {
    path: "/about",
    element:<><Landing></Landing> <About></About></>
  },
  {
    path: "/contact",
    element: <><Landing></Landing> <Contact></Contact></>
  },
  {
    path: "/help",
    element:<><Landing></Landing> <Help></Help></>
  },
  {
    path: "/service",
    element:<><Landing></Landing> <Service></Service></>


  }
]);

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
