import { BsStars } from "react-icons/bs";
import { CiUser } from "react-icons/ci";

export default function SideBarFooter() {
    return (
        <div className="bg-neutral-900 p-3 flex flex-col text-center justify-around">
            <a href="#" className="flex p-2 m-1 rounded-lg hover:bg-neutral-800">
                <div className="p-1 rounded-full border my-2  border-neutral-700">
                    <BsStars size={15} />
                </div>
                <div className="flex flex-col items-start ps-2">
                    <div className="font-semibold ">Upgrade Plan</div>
                    <div className="text-xs text-neutral-500 font-semibold">Get GPT-4, DALL-E and more</div>
                </div>
            </a>
            <a href="#" className="flex p-3 m-1 
                hover:bg-neutral-800 rounded-lg
                items-center justify-start">
                <div className="bg-neutral-200  text-black rounded-full p-1 me-2">
                    <CiUser size={25} />
                </div>
                <div>DevFarhanCoder</div>
            </a>
        </div>
    )
}