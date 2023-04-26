import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import { HomePage } from "./pages/Home";
import { Sobre } from "./pages/Sobre";
import { Header } from "./pages/Header";
import { Contatos } from "./pages/Contatos/index";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "home",
        element: <HomePage />,
      },
      {
        path: "sobre",
        element: <Sobre />,
      },
      {
        path: "contatos",
        element: <Contatos />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
