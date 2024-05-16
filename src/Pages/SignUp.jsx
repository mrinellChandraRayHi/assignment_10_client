import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const SignUp = () => {
    const navigate=useNavigate();
    const {createUser}=useContext(AuthContext);
    const handleSignUp=(e)=>{
        e.preventDefault();
        const form=e.target;
        const email=form.email.value;
        const password=form.password.value;
        console.log(email, password);
        createUser(email, password)
        .then((result)=>{
            console.log(result.user);
            navigate('/')
        }).catch((error)=>{
            console.log(error.message);
        })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                <h1 className="text-5xl font-bold">Sign up now!</h1>
                <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form onSubmit={handleSignUp} className="card-body">
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input name="password" type="password" placeholder="password" className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-6">
                    <button className="btn btn-primary">Sign up</button>
                    </div>
                    <div>
                        <h1>Already have any accout? Please <Link to='/signIn' className="font-bold border-b-2 border-black">Sign in</Link></h1>
                    </div>
                </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;