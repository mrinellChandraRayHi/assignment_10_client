import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home";
import AllandCraft from "../Pages/AllArtandCraft";
import AddCraft from "../Pages/AddCraft";
import MyArtandCraft from "../Pages/MyArtandCraft";
import BuyForm from "../Components/BuyForm";
import SignUp from "../Pages/SignUp";
import SignIn from "../Pages/SignIn";
import PrivateRouter from "../PrivateRouter/PrivateRouter";

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
                element:<PrivateRouter><AllandCraft/></PrivateRouter>
            },
            {
                path:'/addCraft',
                element:<PrivateRouter><AddCraft/></PrivateRouter>
            },
            {
                path:'/myArtAndcraft',
                element:<PrivateRouter><MyArtandCraft/></PrivateRouter>
            },
            {
                path:'/buyForm',
                element:<PrivateRouter><BuyForm/></PrivateRouter>
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