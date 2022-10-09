import { createBrowserRouter } from 'react-router-dom';
import Contact from 'screens/Contact';
import ErrorPage from 'screens/ErrorPage';
import Home from 'screens/Home';
import Service from 'screens/Service';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'service',
        element: <Service />,
      },
    ],
  },
]);

export default router;
