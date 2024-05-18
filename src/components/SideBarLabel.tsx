export default function SideBarLabel({ description }: { description: string }) {
    return (
        <div className="text-xs p-2 mt-6 font-bold text-neutral-600">{description}</div>
    )
}