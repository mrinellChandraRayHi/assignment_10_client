import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="flex flex-col justify-center items-center h-screen text-center">
            <h1 className="text-9xl font-bold text-violet-900">Oops!</h1>
            <p className="font-bold mt-6">404-PAGE NOT FOUND</p>
            <p className="text-xs">The page you are looking for might have been removed <br /> had its name changed or is temporarily unavailable</p>
            <Link to='/'>
            <button className="btn btn-secondary btn-sm mt-5">GO TO HOMEPAGE</button>
            </Link>
        </div>
    );
};

export default ErrorPage;