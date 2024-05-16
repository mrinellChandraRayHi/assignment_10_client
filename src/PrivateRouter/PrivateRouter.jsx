import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRouter = ({children}) => {
    const {user, loader}=useContext(AuthContext);
    if(user){
        return children;
    }
    if(loader){
        return <div className="flex items-center justify-center h-screen"><span className="loading loading-spinner loading-lg"></span></div>
    }
    return (
        <div>
            <Navigate to='/signIn' />
        </div>
    );
};

export default PrivateRouter;