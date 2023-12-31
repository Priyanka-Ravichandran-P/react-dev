import React from 'react';
import ReactDOM  from 'react-dom/client';
import Header from './src/components/Header';
import Body from './src/components/Body';
import About from './src/components/About';
import ContactUS from './src/components/ContactUS.js';
import Error from './src/components/Error.js';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';

const AppLayout = () => (
<div className = "app-component">
    <Header/>
    <Outlet/>
</div>
);

const routerConfig = createBrowserRouter([
    {
        path:"/",
        element: <AppLayout/>,
        children:[{
            path:'/',
            element:<Body/>
        },
        {
            path:'/about',
            element:<About/>
        },
        {
            path:'/contact',
            element:<ContactUS/>
        }],
        errorElement:<Error/>
    }
])
const root =  ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router = {routerConfig}/>);