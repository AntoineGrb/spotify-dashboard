import { getTopArtists } from "../actions/data";
import GraphTopGenres from "./GraphTopGenres";

interface TopItemsResponse {
    items: TopItemsItemsProps[];
}

interface TopItemsItemsProps {
    genres: string[];
}


export default async function HomeTopGenres({selectedFilter}: {selectedFilter: string}) { 

    const topItems = await getTopArtists(selectedFilter, 20) as TopItemsResponse;
    const genres = topItems.items.map(item => item.genres).flat(); // Allows to create a single array from an array of arrays
    console.log(genres)

    const countOccurences = (arr: string[]) => {
        let result: { [key: string]: number } = {};
        arr.forEach(item => {
            if (item in result) {
                result[item]++;
            } else {
                result[item] = 1;
            }
        })
        return result;
    }
    console.log(countOccurences(genres))

    //Prepare data
    const chartData = countOccurences(genres);
    const labels = Object.keys(chartData);
    const values = Object.values(chartData);

    return (
        <>
            <GraphTopGenres labels={labels} values={values} />
        </>
    )
}