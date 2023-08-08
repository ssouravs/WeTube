import {GoHomeFill} from "react-icons/go"
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const SideBar=()=>{
    
    //buttons.map(item=> )
    const isNavOpen=useSelector(store=>store.app.isNavOpen);
    if(!isNavOpen) return null;
    return(
        <div className="w-60 shadow-sm sticky ">
            <ul className="ml-4 mt-6 text-left shadow-md p-4">
                <li className="hover:bg-gray-300 rounded-md cursor-pointer ">
                    <h1 className="text-lg font-semibold">Home</h1>
                </li>
                
                <li className="hover:bg-gray-300 rounded-md cursor-pointer ">
                    <h1 className="text-lg font-semibold">Shorts</h1>
                </li>
                <li className="hover:bg-gray-300 rounded-md cursor-pointer ">
                    <h1 className="text-lg font-semibold">Subscription</h1>
                </li>
                <li className="hover:bg-gray-300 rounded-md cursor-pointer ">
                    <h1 className="text-lg font-semibold">Wetube Music</h1>
                </li>
            </ul>
            <h1 className="hover:bg-gray-300 rounded-md cursor-pointer text-2xl text-left ml-8 font-bold mt-6 pt-2">Explore</h1>
            <ul className="ml-4 mt-2 text-left shadow-md p-4">
                <li className="hover:bg-gray-300 rounded-md cursor-pointer ">
                    <h1 className="text-lg font-semibold">Trending</h1>
                </li>
                <li className="hover:bg-gray-300 rounded-md cursor-pointer ">
                    <h1 className="text-lg font-semibold">Shopping</h1>
                </li>
                <li className="hover:bg-gray-300 rounded-md cursor-pointer ">
                    <h1 className="text-lg font-semibold">Music</h1>
                </li>
                <li className="hover:bg-gray-300 rounded-md cursor-pointer ">
                    <h1 className="text-lg font-semibold">Movies</h1>
                </li>
                <li className="hover:bg-gray-300 rounded-md cursor-pointer">
                    <h1 className="text-lg font-semibold">Live</h1>
                </li>
                <li className="hover:bg-gray-300 rounded-md cursor-pointer">
                    <h1 className="text-lg font-semibold">Gaming</h1>
                </li>
                <li className="hover:bg-gray-300 rounded-md cursor-pointer">
                    <h1 className="text-lg font-semibold">News</h1>
                </li>
                <li className="hover:bg-gray-300 rounded-md cursor-pointer">
                    <h1 className="text-lg font-semibold">Sports</h1>
                </li>
                <li className="hover:bg-gray-300 rounded-md cursor-pointer">
                    <h1 className="text-lg font-semibold">Learning</h1>
                </li>
                <li className="hover:bg-gray-300 rounded-md cursor-pointer">
                    <h1 className="text-lg font-semibold">Fashion</h1>
                </li>
            </ul>
            <h1 className="hover:bg-gray-300 rounded-md cursor-pointer text-2xl text-left ml-8 font-bold mt-6 pt-2">You</h1>
            <ul className="ml-4 mt-2 text-left shadow-md p-4">
                <li className="hover:bg-gray-300 rounded-md cursor-pointer">
                    <h1 className="text-lg font-semibold">Your Channel</h1>
                </li>
                <li className="hover:bg-gray-300 rounded-md cursor-pointer">
                    <h1 className="text-lg font-semibold">History</h1>
                </li>
                <li className="hover:bg-gray-300 rounded-md cursor-pointer">
                    <h1 className="text-lg font-semibold">Your Videos</h1>
                </li>
                <li className="hover:bg-gray-300 rounded-md cursor-pointer">
                    <h1 className="text-lg font-semibold">Your Courses</h1>
                </li>
                <li className="hover:bg-gray-300 rounded-md cursor-pointer">
                    <h1 className="text-lg font-semibold">Watch Later</h1>
                </li>
                <li className="hover:bg-gray-300 rounded-md cursor-pointer">
                    <h1 className="text-lg font-semibold">Downloads</h1>
                </li>
                <li className="hover:bg-gray-300 rounded-md cursor-pointer">
                    <h1 className="text-lg font-semibold">Liked Videos</h1>
                </li>
                
            </ul>
        </div>
    )
}
export default SideBar;