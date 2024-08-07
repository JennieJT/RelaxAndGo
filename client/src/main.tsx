import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { api } from "./state/api.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import KnowledgeCards from "./scenes/KnowledgeCards/index.tsx";
import ToDoList from "./scenes/ToDoLists/index.tsx";
import Principles from "./scenes/Principles/index.tsx";
import AlgoCoding from "./scenes/AlgoCoding/index.tsx";
import FrontEndCoding from "./scenes/FrontEndCoding/index.tsx";
import SystemDesign from "./scenes/SystemDesign/index.tsx";
import Golden4hWork from "./scenes/Golden4hWork/index.tsx";
import Marketing from "./scenes/Marketing/index.tsx";
import { TYPE_COLORS, TypeColorsContext } from "./context/ColorContext.ts";
import Habits from "./scenes/Habits/Habits.tsx";

export const store = configureStore({
  reducer: { [api.reducerPath]: api.reducer },
  middleware: (getDefault) => getDefault().concat(api.middleware),
});
setupListeners(store.dispatch);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Principles />,
      },
      {
        path: "golden4hWork",
        element: <Golden4hWork />,
      },
      {
        path: "knowledgeCards",
        element: <KnowledgeCards />,
      },
      {
        path: "toDoLists",
        element: <ToDoList />,
      },
      {
        path: "marketing",
        element: <Marketing />,
      },
      {
        path: "frontEndCoding",
        element: <FrontEndCoding />,
      },
      {
        path: "algoCoding",
        element: <AlgoCoding />,
      },
      {
        path: "systemDesign",
        element: <SystemDesign />,
      },
      {
        path: "habit",
        element:<Habits />
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <TypeColorsContext.Provider value={TYPE_COLORS}>
      <RouterProvider router={router} />
    </TypeColorsContext.Provider>
  </Provider>
);
