import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './LayOut/Main';
import Portfolio from './Pages/Portfolio/Portfolio/Portfolio';
import ProjectDetails from './Pages/ProjectDetails/ProjectDetails';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path:"/",
        element:<Portfolio></Portfolio>
      },
      {
        path: "/projectdetails/:id",
        element: <ProjectDetails></ProjectDetails>,
        loader: ({params})=>fetch(`https://my-portfolio-server-iota-henna.vercel.app/assignments/${params.id}`)
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div>
        <RouterProvider router={router} />
    </div>
  </React.StrictMode>,
)
