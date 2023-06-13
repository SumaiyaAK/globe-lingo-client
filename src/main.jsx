import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './MainLayout/Main';
import Home from './pages/Home/Home/Home';
import Instructors from './pages/AllInstructors/AllInstructors';
import Classes from './pages/AllClasses/AllClasses';
import Login from './pages/Login/Login';
import AuthProviders from './providers/AuthProviders';
import Registration from './pages/Registration/Registration';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Private from './pages/Shared/Private/Private';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'instructors',
        element: <Instructors></Instructors>
      },
      {
        path: 'classes',
        element: <Classes></Classes>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'registration',
        element: <Registration></Registration>
      },
      {
        path:'private',
        element:<PrivateRoute><Private></Private></PrivateRoute>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>
      <div className='max-w-screen-xl mx-auto'>
        <RouterProvider router={router} />
      </div>
    </AuthProviders>
  </React.StrictMode>,
)
