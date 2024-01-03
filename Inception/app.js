import React from 'react';
import ReactDOM  from 'react-dom/client';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Header from './src/components/Header';
import Body from './src/components/Body';
import About from './src/components/About';
import ContactUS from './src/components/ContactUS.js';
import Error from './src/components/Error.js';
import RestaurantMenu from './src/components/RestaurantMenu.js';
import UserClass from './src/components/UserClass.js';



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
        children:[
        {
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
        },
        {
            path:'/profile',
            element:<UserClass/>
        },
        {
            path: '/restaurant-menu/:id',
            element: <RestaurantMenu/>
        }
    ],
        errorElement:<Error/>
    }
])
const root =  ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router = {routerConfig}/>);