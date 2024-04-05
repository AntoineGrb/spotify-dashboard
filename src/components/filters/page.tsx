

interface FiltersProps { 
    selected: 'month' | 'year' | 'all-time';
}

export default function Filters({selected}: FiltersProps) {
    return (
        <section className="w-full flex justify-center">
            <div className={`w-full flex justify-center items-center border-b-2 pb-1 ${selected === 'month' && 'border-green'}`}>
                <p className={`${selected === 'month' && 'text-green font-semibold'}`}> Month </p>
            </div>
            <div className={`w-full flex justify-center items-center border-b-2 pb-1 ${selected === 'year' && 'border-green'}`}>
                <p className={`${selected === 'year' && 'text-green font-semibold'}`}> Year </p>
            </div>
            <div className={`w-full flex justify-center items-center border-b-2 pb-1 ${selected === 'all-time' && 'border-green'}`}>
                <p className={`${selected === 'all-time' && 'text-green font-semibold'}`}> All time </p>
            </div>
        </section>
    )
}