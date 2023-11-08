import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import About from "./Components/About";
import { createBrowserRouter, RouterProvider ,Outlet} from "react-router-dom";
import Error from "./Components/Error";
import Contact from "./Components/Conatct";
import Cart from "./Components/Cart";
import RestaurantMenu from "./Components/RestaurantMenu";


const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Outlet/>
        </div>
    );

};

const appRouter = createBrowserRouter([
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
                element: <About />,
            },
            {
                path: "/contact",
                element: <Contact/>,
            },
            {
                path: "/cart",
                element: <Cart/>,
            },
            {
                path: "/restaurant/:resid",
                element: <RestaurantMenu/>,
        
            },
        ],

        errorElement: <Error />,
    },

]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

