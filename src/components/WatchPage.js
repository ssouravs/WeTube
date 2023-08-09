import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';

const WatchPage = () => {
    const [searchParams]=useSearchParams();
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(closeMenu());
    },[])
    return (
    <div className='p-14 m-14 rounded-lg'>
        <iframe 
        width="1100" 
        height="600" 
        src={"https://www.youtube.com/embed/"+ searchParams.get("v")} 
        titleBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowFullScreen
        >

        </iframe>
        
    </div>
  )
}
export default WatchPage;