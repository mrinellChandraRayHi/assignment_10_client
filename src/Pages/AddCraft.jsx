import Swal from "sweetalert2";

const AddCraft = () => {
    const handleAddform=(e)=>{
        e.preventDefault();
        const form=e.target;
        const item_name=form.item_name.value;
        const subcategory_name=form.subcategory_name.value;
        const description=form.description.value;
        const price=form.price.value;
        const photo=form.photo.value;
        const processing_time=form.processing_time.value;
        const addCraft={item_name, subcategory_name, price, photo, processing_time, description}
        console.log(addCraft);
        fetch('https://assignment-10-server-lovat-tau.vercel.app/crafts',{
            method:"POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(addCraft)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your craft has been saved",
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        })
    }
    return (
        <div>
            <div>
                <form onSubmit={handleAddform} className="p-2">
                    <div>
                        <h1 className="text-5xl text-center font-bold mt-10">This is Add Form</h1>
                    </div>
                    <div className="bg-gray-300 p-10 my-20 rounded">
                    <div>
                        <label className="text-xl font-bold" htmlFor="">Item_Name:</label>
                        <input className="w-full border border-black rounded py-2 px-2" type="text" name="item_name" id="" />
                    </div>
                    <div>
                        <label className="text-xl font-bold" htmlFor="">Subcategory_Name:</label>
                        <input className="w-full border border-black rounded py-2 px-2" type="text" name="subcategory_name" id="" />
                    </div>
                    <div>
                        <label className="text-xl font-bold" htmlFor="">Description:</label>
                        <textarea className="w-full border border-black rounded p-2" name="description" id=""></textarea>
                    </div>
                    <div>
                        <label className="text-xl font-bold" htmlFor="">Price:</label>
                        <input className="w-full border border-black rounded py-2 px-2" type="number" name="price" id="" />
                    </div>
                    <div>
                        <label className="text-xl font-bold" htmlFor="">Processing_time:</label>
                        <input className="w-full border border-black rounded py-2 px-2" type="number" name="processing_time" id="" />
                    </div>
                    <div>
                        <label className="text-xl font-bold" htmlFor="">Photo:</label>
                        <input className="w-full border border-black rounded py-2 px-2" type="text" name="photo" id="" />
                    </div>
                    <div>
                        <input className="w-full border border-black mt-5 py-2 rounded bg-red-200 font-bold" type="submit" value="Add Craft" />
                    </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddCraft;