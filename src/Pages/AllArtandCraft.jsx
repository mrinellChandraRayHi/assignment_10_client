import { useLoaderData } from "react-router-dom";
import ArtAndCraftCard from "../Components/ArtAndCraftCard";
import { useState } from "react";

const AllArtandCraft = () => {
    const loadedArtAndCraft=useLoaderData();
    const [artAndCrafts, setArtAndCrafts]=useState(loadedArtAndCraft)
    return (
        <div>
            <div className="text-center bg-green-500 w-[100px] h-[100px] font-bold flex items-center justify-center text-7xl mx-auto rounded-full">{artAndCrafts.length}</div>
            <div className="grid grid-cols-3 gap-5 my-10">
                {
                    artAndCrafts.map(ArtAndCraft=><ArtAndCraftCard key={ArtAndCraft.key} ArtAndCraft={ArtAndCraft} artAndCrafts={artAndCrafts} setArtAndCrafts={setArtAndCrafts}/>)
                }
            </div>
        </div>
    );
};

export default AllArtandCraft;