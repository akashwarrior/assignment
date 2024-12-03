export const ColorCard = ({ className, title, number, subtitle }: {
    className: string
    title: string
    number: number
    subtitle: string
}) => {
    return (
        <div className={`rounded-md p-4 mx-3 hover:shadow cursor-pointer ${className}`}>
            <span className="text-black font-semibold">{title}</span>
            <h1 className="text-3xl font-semibold text-black my-1">{number}</h1>
            <span className="text-sm">{subtitle}</span>
        </div>
    )
}