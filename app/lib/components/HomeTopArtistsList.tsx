import HomeCard from "./HomeCard";
import { getTopArtists } from "../actions/data";

interface TopItemsResponse {
    items: TopItemsItemsProps[];
}

interface TopItemsItemsProps {
    name: string;
    images: ImageProps[];
}

interface TrackObjectProps { 
    name: string;
    album: AlbumProps;
    artists: ArtistsProps[];
}

interface AlbumProps {
    images: ImageProps[];
}

interface ArtistsProps {
    name: string;
}

interface ImageProps {
    url: string;
}


export default async function HomeRecentlyPlayedList({selectedFilter}: {selectedFilter: string}) { 

    const topItems = await getTopArtists(selectedFilter) as TopItemsResponse;

    return (
        <>
            {topItems.items.map((item, index: number) => (
                <HomeCard key={index} position={index + 1} imageSrc={item.images[1].url} text={item.name} />
            ))}
        </>
    )
}