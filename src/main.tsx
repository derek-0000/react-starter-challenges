import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import RandomColorGenerator from "./challenges/RandomColorGenerator.tsx";
import UsingProps from "./challenges/UsingProps.tsx";
import CardList from "./challenges/CardList.tsx";
import Layout from "./challenges/Layout.tsx";
import VideoSearcher from "./challenges/VideoSearcher.tsx";
import User from "./challenges/User.tsx"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import UserContextProvider from "./components/contexts/UserContext.tsx";
const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <UserContextProvider>
        <QueryClientProvider client={queryClient}>
          <Layout>
            <Outlet />
          </Layout>
        </QueryClientProvider>
      </UserContextProvider>
    ), //Add Layout component here
    children: [
      { index: true, element: <App /> },
      {
        path: "/random-color-generator",
        element: <RandomColorGenerator />,
      },
      {
        path: "/using-props",
        element: <UsingProps />,
      },
      {
        path: "/card",
        element: <CardList />,
      },
      {
        path: "/videoSearcher",
        element: <VideoSearcher />,
      },
      {
        path: "/profile",
        element: <User />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
