import React, { StrictMode, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import { lazy } from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import Error from "./src/components/Error.js";
import RestaurantMenu from "./src/components/RestaurantMenu.js";
import UserClass from "./src/components/UserClass.js";
import Shimmer from "./src/components/Shimmer.js";
import UserContext from "./src/utils/UserContext.js";
import { useContext } from "react";
import { Provider } from "react-redux";
import globalAppStore from "./src/redux-store/storeConfiguration.js";
import Cart from "./src/components/Cart.js";

// Lazy Loading (Defer)
const ContactUS = lazy(() => import("./src/components/ContactUS.js"));
const About = lazy(() => import("./src/components/About"));

const AppLayout = () => {
  const { loggedInUser } = useContext(UserContext);
  const [userName, setUserName] = useState(loggedInUser);
  /**
   *    You can also set token/user via authentication by useEffect API call and use Provider to set value for context
   *    You can also setUserName from anywhere by passing setUserName to context object.
   *    Context Value also gets updated in the lazy loaded component
   */
  return (
    <div className="justify-between">
      <StrictMode>
        <Provider store={globalAppStore}>
          <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
            <Header />
            <Outlet />
          </UserContext.Provider>
        </Provider>
      </StrictMode>
    </div>
  );
};

const routerConfig = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<Shimmer />}>
            {" "}
            <About />{" "}
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: (
          <Suspense fallback={<Shimmer />}>
            {" "}
            <ContactUS />{" "}
          </Suspense>
        ),
      },
      {
        path: "/profile",
        element: <UserClass />,
      },
      {
        path: "/restaurant-menu/:id",
        element: <RestaurantMenu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
    errorElement: <Error />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={routerConfig} />);
