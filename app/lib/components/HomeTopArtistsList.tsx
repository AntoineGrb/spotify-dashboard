import HomeCard from "./HomeCard";
import { getTopArtists } from "../actions/data";

interface TopItemsResponse {
    items: TopItemsItemsProps[];
}

interface TopItemsItemsProps {
    name: string;
    images: ImageProps[];
}

interface ImageProps {
    url: string;
}


export default async function HomeTopArtistsList({selectedFilter}: {selectedFilter: string}) { 

    const topItems = await getTopArtists(selectedFilter, 10) as TopItemsResponse;

    return (
        <>
            {topItems.items.map((item, index: number) => (
                <HomeCard key={index} position={index + 1} imageSrc={item.images[1].url} text={item.name} />
            ))}
        </>
    )
}