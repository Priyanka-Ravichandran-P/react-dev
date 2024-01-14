import React, { Suspense } from 'react';
import ReactDOM  from 'react-dom/client';
import { lazy } from 'react';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Header from './src/components/Header';
import Body from './src/components/Body';
import Error from './src/components/Error.js';
import RestaurantMenu from './src/components/RestaurantMenu.js';
import UserClass from './src/components/UserClass.js';
import Shimmer from './src/components/Shimmer.js';

// Lazy Loading (Defer)
const ContactUS = lazy(()=> import('./src/components/ContactUS.js'));
const About = lazy(()=> import('./src/components/About'));

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
            element: <Suspense fallback = {<Shimmer/>}> <About/> </Suspense>
            
        },
        {
            path:'/contact',
            element:<Suspense fallback = {<Shimmer/>}> <ContactUS/> </Suspense>
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