import MainPage from './pages/MainPage'
import NicknamePage from './pages/NicknamePage'
import ErrorPage from './pages/ErrorPage'
import { 
  createBrowserRouter,
  RouterProvider } from "react-router-dom"
import './css/styles.min.css'
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'

const queryClient = new QueryClient()

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    errorElement: <ErrorPage />
  },
  {
    path: '/player/',
    element: <NicknamePage />,
    errorElement: <ErrorPage />,
  }
]);

function App() {
  return (
     <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
     </QueryClientProvider>
  )
}

export default App
