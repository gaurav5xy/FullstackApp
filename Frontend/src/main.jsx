import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ProductDetail from "./component/ProductDetail.jsx";
import Products from './component/Products.jsx';
import AddItem from './component/AddItem.jsx';

const appRouter = createBrowserRouter ([
  {
    path: '/',
    element : <App/>,
    children : [
      {
        path: '/',
        element: <Products/>
      },
      {
        path: '/productDetail/:id',
        element: <ProductDetail/>
      },
      {
        path: '/addItem',
        element: <AddItem/>
      }
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={appRouter}/>)
