import React from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainPage from "./pages/MainPage";
import Page2 from "./pages/Page2";
import { Routes } from "./routes";

function AppLayout() {
  return (
    <div
      id="page"
      className="bg-normal gap-2 fixed inset-0 overflow-hidden flex flex-col items-stretch"
    >
      <Header />
      <div className="flex-1 flex items-stretch px-2">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

const router = createBrowserRouter(
  [
    {
      element: <AppLayout />,
      children: [
        {
          path: Routes.MainPage,
          element: <MainPage />,
        },
        {
          path: Routes.Page2,
          element: <Page2 />,
        },
      ],
    },
  ],
  { basename: "/" }
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
