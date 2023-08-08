import { WETUBE_API, YOUTUBE_VIDEOS_API } from "../utils/constants";
import { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const CardContainer=()=>{
    const [videos,setVideos]=useState([]);
    useEffect(()=>{
        getVideos();
    },[]);
    const getVideos=async ()=>{
        try{
            const data=await fetch(WETUBE_API);
            const json=await data.json();
            console.log(json.items);
            setVideos(json.items);

        }
        catch(error)
        {
            console.error("Error is :",error);
            

        }
    };
    return (
        <div className="flex flex-wrap">
            {videos.map((video)=> 
            <Link to={"/watch?v="+video.id}><VideoCard key={video.id} info={video}/>
            </Link>)} 
            
        </div>
    )
}
export default CardContainer;