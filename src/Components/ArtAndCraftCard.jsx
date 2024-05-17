import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { TbListDetails } from "react-icons/tb";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
const ArtAndCraftCard = ({ArtAndCraft, artAndCrafts, setArtAndCrafts}) => {
    const {name, description, properties, photo, _id}=ArtAndCraft;
    const handleDelete=(_id)=>{
        console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
        if (result.isConfirmed) {
            fetch(`https://assignment-10-server-8maov68o3-mrinells-projects.vercel.app/crafts/${_id}`,{
                method:"DELETE"
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
                if(data.deletedCount>0){
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                    });
                }
            })
        }
        const remaining=artAndCrafts.filter(artandCraft=>artandCraft._id !==_id);
            setArtAndCrafts(remaining);
        });
    }
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure><img src={photo} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">Name: {name}</h2>
                <p>Properties: {properties}</p>
                <p>Description: {description}</p>
                <div className="card-actions justify-end">
                <button className="btn btn-primary"><TbListDetails className="text-2xl" /></button>
                <Link to={`/updateCraft/${_id}`}>
                <button className="btn bg-yellow-400"><CiEdit className="text-2xl" /></button>
                </Link>
                <button onClick={()=>handleDelete(_id)} className="btn bg-red-500"><MdDelete className="text-2xl" /></button>
                </div>
            </div>
        </div>
    );
};

export default ArtAndCraftCard;