import { createRoot } from 'react-dom/client';
import { HomePage } from './pages/HomePage';
import './global.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ErrorPage } from './components/ErrorPage';
import { News } from './components/News';
import { ProductsList } from './components/ProductList';
import { ProductPage } from './components/ProductPage';
import { ProductPageDetail } from './components/ProductPageDetail';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement : <ErrorPage />,
    children : [{
                  path: 'aktualni_nabidka',
                  element: <News />,
                },
                {
                  path: 'products',
                  element: <ProductsList />,
                },
                {
                  path: 'products/:id',
                  element: <ProductPageDetail />,
                }]
    },
  ,
]);

createRoot(
  document.querySelector('#app'),
).render(<RouterProvider router={router} />);
