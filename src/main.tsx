import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router";
import router from "./router";
import { ExpeditionProvider } from "./context/ExpeditionContext";

const rootElement = document.getElementById("root");

if (rootElement != null) {
  ReactDOM.createRoot(rootElement).render(
    <ExpeditionProvider>
      <RouterProvider router={router} />
    </ExpeditionProvider>
  );
}