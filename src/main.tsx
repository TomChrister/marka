import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import { Layout } from './layout';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';
import Categories from './pages/Categories';
import Journal from './pages/Journal';
import ArticleDetail from './pages/ArticleDetail';
import WriteArticle from './pages/WriteArticle';
import About from './pages/About';
import Contact from './pages/Contact';
import Checkout from './pages/Checkout';
import OrderConfirmation from './pages/OrderConfirmation';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '', element: <Home /> },
      { path: 'butikk', element: <Shop /> },
      { path: 'produkt', element: <ProductDetail /> },
      { path: 'kategorier', element: <Categories /> },
      { path: 'magasin', element: <Journal /> },
      { path: 'artikkel', element: <ArticleDetail /> },
      { path: 'skriv-artikkel', element: <WriteArticle /> },
      { path: 'om-oss', element: <About /> },
      { path: 'kontakt', element: <Contact /> },
      { path: 'kasse', element: <Checkout /> },
      { path: 'takk', element: <OrderConfirmation /> },
      { path: '*', element: <div className="p-10 pt-32">404 – siden finnes ikke</div> },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
