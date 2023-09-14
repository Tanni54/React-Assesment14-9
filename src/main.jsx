import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Nav from './Nav';
import Owner from './Owner';
import Home from './Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <>
      <Nav />
      <Home />
    </>
  },
  {
    path: '/Owner',
    element: <>
      <Nav />
      <Owner />
    </>
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)