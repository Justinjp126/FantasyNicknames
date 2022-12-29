import MainPage from "./pages/MainPage";
import NicknamePage from "./pages/NicknamePage";
import ContactPage from "./pages/ContactPage";
import ErrorPage from "./pages/ErrorPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./css/styles.min.css";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/home",
    element: <MainPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/popular",
    element: <MainPage type="popular" />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/new",
    element: <MainPage type="new" />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/qb",
    element: <MainPage type="qb" />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/wr",
    element: <MainPage type="wr" />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/te",
    element: <MainPage type="te" />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/rb",
    element: <MainPage type="rb" />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/contact",
    element: <ContactPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/player/",
    element: <NicknamePage />,
    errorElement: <ErrorPage />,
  },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
