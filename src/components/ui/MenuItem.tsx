import { useEffect, useState } from "react"

export const MenuItem = ({ title, icon, clicked, handleClicked }: {
    title: string
    icon: React.ReactNode
    clicked: boolean
    handleClicked: () => void
}) => {
    const [active, setActive] = useState(clicked);

    useEffect(() => {
        setActive(clicked);
    }, [clicked]);

    return (
        <>
            <button
                onClick={handleClicked}
                className="flex w-full py-4 items-center hoverable !rounded-lg gap-3 px-4 transition-all duration-100 active:bg-gray-200"
            >
                <p className={`${active ? "fill-orange-500" : "fill-gray-400"} w-10 flex items-center justify-center`}>
                    {icon}
                </p>
                <p className={`${active ? "text-orange-500 font-semibold" : "text-gray-500"} text-sm`}>{title}</p>
            </button>
        </>
    )
}