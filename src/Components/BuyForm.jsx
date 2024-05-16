import Swal from "sweetalert2";

const BuyForm = () => {
    const handleBuy=(e)=>{
        e.preventDefault()
        const form=e.target;
        const name=form.name.value;
        const email=form.email.value;
        const password=form.password.value;
        console.log(name, email, password);
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "You Buy this paint",
            showConfirmButton: false,
            timer: 1500
        });
        form.reset();
    }
    return (
        <div>
            <h1 className="text-center text-4xl font-bold mt-20">This is Buy Paint Form</h1>
            <form onSubmit={handleBuy} className="flex items-center justify-center h-[500px]">
                <div className="bg-gray-400 p-10 w-[700px]">
                <div>
                    <label className="text-xl font-bold" htmlFor="">Name:</label>
                    <input className="w-full border border-black py-2 rounded px-2" type="text" name="name" id="" />
                </div>
                <div>
                    <label className="text-xl font-bold" htmlFor="">Email:</label>
                    <input className="w-full border border-black py-2 rounded px-2" type="email" name="email" id="" />
                </div>
                <div>
                    <label className="text-xl font-bold" htmlFor="">Password:</label>
                    <input className="w-full border border-black py-2 rounded px-2" type="password" name="password" id="" />
                </div>
                <div>
                    <input className="w-full border border-black mt-6 py-2 rounded bg-red-200 font-bold" type="submit" value="Buy" />
                </div>
                </div>
            </form>
        </div>
    );
};

export default BuyForm;