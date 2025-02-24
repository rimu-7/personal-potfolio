import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";


import About from "../components/About";
import Contacts from "../components/Contacts";
import Hero from "../components/Hero";
import ErrorPage from "../ErrorPage/ErrorPage";
import Blogs from "../components/Blogs";
import Expriences from "../components/Expriences";
import Projects from "../components/Projects";
import BlogDetails from "../components/BlogDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />, // Main layout
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Hero />, // Home Page
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/contact",
        element: <Contacts />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/expriences",
        element: <Expriences />,
      },
      {
        path: "/blogdetails/:id",
        element: <BlogDetails />,
      },
      {
        path: "/expriences",
        element: <Expriences />,
      },
    ],
  },
]);