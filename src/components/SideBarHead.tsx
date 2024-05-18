import { FaEdit } from "react-icons/fa";
import { TbHexagon3D } from "react-icons/tb";

export default function SideBarHead() {
    return (
        <a href="#" className="flex
            w-full
            bg-neutral-900
            mb-2
            items-center justify-between p-2 rounded-lg hover:bg-neutral-800">
            <div className="flex justify-start gap-2 items-center">
                <div className="text-gray-800 flex bg-neutral-300 rounded-full text-center justify-center p-1"><TbHexagon3D size={20} /></div>
                <div className=" font-bold text-sm text-center" >New chat</div>
            </div>
            <FaEdit />
        </a>
    )
}