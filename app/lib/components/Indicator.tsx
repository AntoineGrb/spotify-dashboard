interface IndicatorProps { 
    label: string;
    value: number;
}

export default function Indicator({ label, value}: IndicatorProps) {
    return (
        <article className=" bg-gray-mid w-28 h-16 p-1 md:w-36 md:h-20 md:p-2 lg:w-44 lg:h-24 rounded-xl shadow-sm flex flex-col gap-1 justify-start">
            <small className=" text-gray-font lg:text-base"> {label} </small>
            <p className=" text-2xl font-bold text-center md:text-3xl lg:text-4xl"> {value} </p>
        </article>
    )
}