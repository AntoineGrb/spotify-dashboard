interface IndicatorProps { 
    label: string;
    value: number;
}

export default function Indicator({ label, value}: IndicatorProps) {
    return (
        <article className=" bg-gray-mid w-28 h-16 p-1 rounded-xl shadow-sm flex flex-col gap-1 justify-center">
            <small className=" text-gray-font"> {label} </small>
            <p className=" text-2xl font-bold text-center"> {value} </p>
        </article>
    )
}