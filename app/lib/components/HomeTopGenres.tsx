import { getTopArtists } from "../actions/data";
import GraphTopGenres from "./GraphTopGenres";

interface TopItemsResponse {
    items: TopItemsItemsProps[];
}

interface TopItemsItemsProps {
    genres: string[];
}


export default async function HomeTopGenres({selectedFilter}: {selectedFilter: string}) { 

    const topItems = await getTopArtists(selectedFilter, 50) as TopItemsResponse;
    const genres = topItems.items.map(item => item.genres).flat(); // Allows to create a single array from an array of arrays
    //! Passer les datas dans le composant du graphique et gérer la donnée dedans
    //Prepare data
    const countOccurences = (arr: string[]) => {
        let result: { [key: string]: number } = {};
        arr.forEach(item => {
            if (item in result) {
                result[item]++;
            } else {
                result[item] = 1;
            }
        })
        const sortedResult = Object.entries(result).sort((a, b) => b[1] - a[1]).slice(0,25);
        return sortedResult;
    }

    const chartData = countOccurences(genres)
    const labels = chartData.map(item => item[0]);
    const values = chartData.map(item => item[1]);

    return (
        <>
        <section className='pb-10'>
            <header className='flex justify-between items-center pb-2'>
                <h2> Favorites genres </h2>
            </header>
            <section className="lg:w-1/2">
                <GraphTopGenres labels={labels} values={values} />
            </section>
        </section>
            
        </>
    )
}