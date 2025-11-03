import { createBrowserRouter } from "react-router";
import App from "./App";
import Home from "./pages/Home";
import Equipment from "./pages/Equipment";
import Character from "./pages/Character";
import Bestiary from "./pages/Bestiary";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/equipment",
        element: <Equipment />,
      },
      {
        path: "/character",
        element: <Character />,
      },
      {
        path: "/Bestiary",
        element: <Bestiary />,
      }
    ],
  },
]);

export default router
