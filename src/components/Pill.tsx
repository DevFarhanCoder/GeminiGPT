export default function Pill({title, description}:{
    title:string;
    description:string;
}) {
    return (
        <button className="border p-3 text-left text-sm border-neutral-400 rounded-xl hover:bg-neutral-700">
            <div className="font-bold">{title}</div>
            <div className="truncate text-neutral-500 font-semibold">{description} </div>
        </button>
    )
}