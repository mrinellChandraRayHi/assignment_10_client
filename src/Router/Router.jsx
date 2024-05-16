import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home";
import AllandCraft from "../Pages/AllArtandCraft";
import AddCraft from "../Pages/AddCraft";
import MyArtandCraft from "../Pages/MyArtandCraft";
import BuyForm from "../Components/BuyForm";
import SignUp from "../Pages/SignUp";
import SignIn from "../Pages/SignIn";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/addArtAndCraft',
                element:<AllandCraft/>
            },
            {
                path:'/addCraft',
                element:<AddCraft/>
            },
            {
                path:'/myArtAndcraft',
                element:<MyArtandCraft/>
            },
            {
                path:'/buyForm',
                element:<BuyForm/>
            },
            {
                path:'/signUp',
                element:<SignUp/>
            },
            {
                path:'/signIn',
                element:<SignIn/>
            }
        ]
    },
]);