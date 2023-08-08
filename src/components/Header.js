import {FaBars,FaYoutube,FaMicrophone} from "react-icons/fa"
import {GoSearch} from "react-icons/go"
import {BsPersonCircle} from "react-icons/bs"
import { useDispatch } from "react-redux"
import { toggleMenu } from "../utils/appSlice"
import { Link } from "react-router-dom"
const Header=()=>{
    const dispatch=useDispatch();
    const toggleMenuHandler=()=>{
        dispatch(toggleMenu());
    }
    return (
        <div className="shadow-xl mt-2 grid grid-flow-col">
            <div className=" ml-4 pb-2 flex col-span-1">
                <FaBars onClick={()=>toggleMenuHandler()} className="h-8 w-8 cursor-pointer"/>
                <FaYoutube className="h-12 w-24 ml-6"/>
                <h1 className="text-4xl -ml-5 ">WeTube</h1>
            </div>
            <div className="flex col-span-10">
                <input placeholder="Search" className="border border-gray-700 w-5/12 ml-48 h-9 rounded-l-3xl"></input>
                <GoSearch className="border border-gray-700 h-9 w-8 rounded-r-3xl"/>
                <div className="hover: cursor-pointer border border-gray-400 rounded-full ml-9 relative pr-6 pt-4 bg-slate-100">
                    <FaMicrophone className=" ml-5 h-6 w-4 relative"/>
                </div>
            </div>
            <div className="col-span-1">
                <BsPersonCircle className=" "/>
            </div>

            
        </div>
    )
}
export default Header;