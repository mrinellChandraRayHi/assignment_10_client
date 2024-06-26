import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home";
import AddCraft from "../Pages/AddCraft";
import MyArtandCraft from "../Pages/MyArtandCraft";
import BuyForm from "../Components/BuyForm";
import SignUp from "../Pages/SignUp";
import SignIn from "../Pages/SignIn";
import PrivateRouter from "../PrivateRouter/PrivateRouter";
import AllArtandCraft from "../Pages/AllArtandCraft";
import UpdateCraft from "../Pages/UpdateCraft";
import ErrorPage from "../Pages/ErrorPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        errorElement:<ErrorPage/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/allArtAndcraft',
                element:<PrivateRouter><AllArtandCraft/></PrivateRouter>,
                loader:()=>fetch('https://assignment-10-server-lovat-tau.vercel.app/crafts')
            },
            {
                path:'/addCraft',
                element:<PrivateRouter><AddCraft/></PrivateRouter>
            },
            {
                path:'/updateCraft/:id',
                element:<PrivateRouter><UpdateCraft/></PrivateRouter>,
                loader:({params})=>fetch(`https://assignment-10-server-lovat-tau.vercel.app/crafts/${params.id}`)
            },
            {
                path:'/myArtAndcraft',
                element:<PrivateRouter><MyArtandCraft/></PrivateRouter>,
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