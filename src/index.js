import * as React from "react";
import * as ReactDOM from "react-dom";
import App from './App';
import Reg from './pages/Reg';
import Log from './pages/Log';
import './main.css';
import {RouterProvider, createBrowserRouter} from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "/register",
    element: <Reg/>
  },
  {
    path: "/login",
    element: <Log/>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);