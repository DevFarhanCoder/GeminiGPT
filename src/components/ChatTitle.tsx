import { useState } from "react";
import { IoIosMore } from "react-icons/io";
import { RiArchiveLine } from "react-icons/ri";

export default function ChatTitle({title}:{title:string}){
    const [isHovering,setIsHovering] = useState(false)

    const enter_hover = () =>{
        setIsHovering(isHovering || true)
    }
    const exit_hover = () =>{
        setIsHovering(false)
    }

    return(
        <div>
        <a href="#" onMouseEnter={enter_hover} onMouseLeave={exit_hover} className="flex relative items-center justify-between p-2 rounded-lg hover:bg-neutral-800">
            <div className=" font-semibold text-sm text-center truncate" >{ title }</div>
            <div className={`flex absolute text-neutral-200  right-0 p-2 gap-2 w-28 rounded-lg  justify-end 
            ${isHovering == false ? "hidden": " bg-gradient-to-l from-neutral-800 via-neutral-800" }
            `
            }>
                <IoIosMore size={17} className="hover:text-neutral-400"
                />

                <RiArchiveLine size={17} className="hover:text-neutral-400 "/>
            </div>
        </a>
        </div>
    )
}