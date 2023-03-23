import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Privacy from "./components/modal/Privacy";
import Blog from "./pages/blog/Blog";
import BlogDetails from "./pages/blogdetails/BlogDetails";
import Home from "./pages/home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        index: true,
        path: "",
        element: <Home />,
      },
      {
        path: "/privacy",
        element: <Privacy />,
      },
      {
        path: "/newsfeed",
        children: [
          {
            index: true,
            path: "",
            element: <Blog />,
          },
          {
            path: "/newsfeed/:id",
            element: <BlogDetails />,
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
