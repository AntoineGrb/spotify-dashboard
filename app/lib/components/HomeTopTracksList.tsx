import HomeCard from "./HomeCard";
import { getTopTracks } from "../actions/data";

interface TopTracksResponse {
    items: TopTracksItemProps[];
}

interface TopTracksItemProps { 
    name: string;
    album: AlbumProps;
    artists: ArtistsProps[];
}

interface ArtistsProps {
    name: string;
}

interface AlbumProps {
    images: ImageProps[];
}

interface ImageProps {
    url: string;
}


export default async function HomeTopTracksList({selectedFilter}: {selectedFilter: string}) { 

    const topItems = await getTopTracks(selectedFilter, 10) as TopTracksResponse;

    return (
        <>
            {topItems && topItems.items.map((item, index: number) => (
                <HomeCard key={index} position={index + 1} imageSrc={item.album.images[1].url} text={item.name} subText={item.artists[0].name} />
            ))}
        </>
    )
}