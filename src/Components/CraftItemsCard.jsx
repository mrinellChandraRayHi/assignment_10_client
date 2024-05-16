import { Link } from "react-router-dom";

const CraftItemsCard = ({craft}) => {
    const {image, name, description, type}=craft
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure><img className="h-[150px] rounded" src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">Name: {name}</h2>
                <p>Description: {description}</p>
                <p>Type: {type}</p>
                <div className="card-actions justify-end">
                <Link to='/buyForm'>
                <button className="btn btn-primary">Buy Now</button>
                </Link>
                </div>
            </div>
        </div>
    );
};

export default CraftItemsCard;