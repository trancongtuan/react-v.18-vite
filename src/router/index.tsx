import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from 'screens/ErrorPage';
import Home from 'screens/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />,
  },
]);

export default router;
