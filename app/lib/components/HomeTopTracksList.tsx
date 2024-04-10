import HomeCard from "./HomeCard";
import { getTopTracks } from "../api/data";

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


export default async function HomeRecentlyPlayedList() { 

    const topItems = await getTopTracks() as TopTracksResponse;
    // console.log('topItems :' , topItems);

    return (
        <>
            {topItems.items.map((item, index: number) => (
                <HomeCard key={index} position={index + 1} imageSrc={item.album.images[1].url} text={item.name} subText={item.artists[0].name} />
            ))}
        </>
    )
}