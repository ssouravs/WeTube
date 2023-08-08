import React from 'react'

export const VideoCard = ({info}) => {
    const {snippet  , statistics}=info;
    const {channelTitle,title,thumbnails}=snippet;
    //console.log(thumbnails.high.url);
  return (
    
    <div className="p-2 m-2 w-96 ">
        <img src={thumbnails.high.url} className="rounded-lg cursor-pointer" alt="video" />
        <ul className="text-left ">
            <li className="font-bold">{channelTitle}</li>
            <li>{title}</li>
            {/*<li>{statistics.viewCount} views</li>*/}
            
        </ul>
        
    </div>
  )
}
export default VideoCard;