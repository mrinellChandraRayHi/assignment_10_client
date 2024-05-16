import { useState } from "react";
import Slider from "../Components/Slider";
import { useEffect } from "react";
import CraftItemsCard from "../Components/CraftItemsCard";

const Home = () => {
    const [craftItems, setCraftItems]=useState([]);
    useEffect(()=>{
        fetch('craft_items_section.json')
        .then(res=>res.json())
        .then(data=>setCraftItems(data))
    })
    return (
        <div>
            <div><Slider/></div>
            <div>
                <h1 className="text-center mt-20 text-6xl font-bold">Craft items section</h1>
            </div>
            <div className="grid grid-cols-3 gap-5 my-20">
                {
                    craftItems.map(craft=><CraftItemsCard key={craft.id} craft={craft}/>)
                }
            </div>
        </div>
    );
};

export default Home;