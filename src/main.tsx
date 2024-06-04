import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import RandomColorGenerator from "./challenges/RandomColorGenerator.tsx";
import UsingProps from "./challenges/UsingProps.tsx";
import CardList from "./challenges/CardList.tsx";
import Layout from "./challenges/Layout.tsx";
import VideoSearcher from "./challenges/VideoSearcher.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Details from "./components/video/Details.tsx";
import { createTheme, ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";

const theme = createTheme({
  palette: {
    mode: "dark",

  },
});

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <QueryClientProvider client={queryClient}>
        <Layout>
          <Outlet />
        </Layout>
      </QueryClientProvider>
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
        path: "/videoSearcher/:id",
        element: <Details />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
