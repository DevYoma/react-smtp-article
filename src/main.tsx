import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'
import { CalendarInvite } from './page/index.ts';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },  
  // {
  //   path: "/attachment", 
  //   element: <Attachment />, // IN DEVELOPMENT
  // },
  {
    path: "/calander", 
    element: <CalendarInvite />
  }
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);
