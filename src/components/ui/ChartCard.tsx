export const ChartCard = ({ className, title, number, subtitle, subtitle2, svg }: {
    className: string
    title: string
    number: number
    subtitle: string
    subtitle2: string
    svg: React.ReactNode
}) => {
    return (
        <div className={`rounded-md p-5 mx-3 ${className} flex items-center justify-between hover:shadow cursor-pointer`}>
            <div className="flex flex-col items-start">
                <span className="text-black font-semibold text-lg">{title}</span>
                <h1 className="text-4xl font-semibold text-black my-2">{number}</h1>
                <span className="text-sm text-gray-500">{subtitle}</span>
                <span className="text-sm text-gray-500">{subtitle2}</span>
            </div>
            {svg}
        </div>
    )
}