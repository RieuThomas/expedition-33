import { createBrowserRouter } from "react-router";
import App from "./App";
import Home from "./pages/Home";
import Weapons from "./pages/Weapons";
import Character from "./pages/Character";
import Bestiary from "./pages/Bestiary";
import CharacterCard from "./pages/CharacterCard";
import Skills from "./pages/Skills";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/weapons",
        element: <Weapons />,
      },
      {
        path: "/skills",
        element: <Skills />,
      },
      {
        path: "/character",
        element: <Character />,
      },
      {
        path: "/Bestiary",
        element: <Bestiary />,
      },
      {
        path: "/character/:names",
        element: <CharacterCard />
      }
    ],
  },
]);

export default router
