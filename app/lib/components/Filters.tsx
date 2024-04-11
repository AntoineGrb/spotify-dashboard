import { updateFilters } from "../actions/actions";

interface FiltersProps { 
    selected: 'month' | 'year' | 'all-time';
}

//! onClick sur les filtres, relancer une requête

export default function Filters({selected}: FiltersProps) {
    return (
        <section className="w-full flex justify-center pb-8">
            <form action={updateFilters}>
                <select name="filter" id="filter">
                    <option value="month">Month</option>
                    <option value="year">Year</option>
                    <option value="all-time">All time</option>
                </select>
                <button type="submit"> Valider </button>
            </form>
            <div className={`w-full flex justify-center items-center border-b-2 pb-1 ${selected === 'month' && 'border-green'}`}>
                <p className={` cursor-pointer ${selected === 'month' && 'text-green font-semibold'}`}> Month </p>
            </div>
            <div className={`w-full flex justify-center items-center border-b-2 pb-1 ${selected === 'year' && 'border-green'}`}>
                <p className={` cursor-pointer ${selected === 'year' && 'text-green font-semibold'}`}> Year </p>
            </div>
            <div className={`w-full flex justify-center items-center border-b-2 pb-1 ${selected === 'all-time' && 'border-green'}`}>
                <p className={` cursor-pointer ${selected === 'all-time' && 'text-green font-semibold'}`}> All time </p>
            </div>
        </section>
    )
}