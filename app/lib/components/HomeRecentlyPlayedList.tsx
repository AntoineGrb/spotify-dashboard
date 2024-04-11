import HomeCard from "./HomeCard";
import { getRecentlyPlayedTracks } from "../actions/data";

interface RecentlyPlayedResponse {
    items: RecentlyPlayedItemProps[];
}

interface RecentlyPlayedItemProps {
    track: TrackProps;
}

interface TrackProps {
    album: AlbumProps;
    name: string;
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

export default async function HomeRecentlyPlayedList() { 

    const recentlyPlayed = await getRecentlyPlayedTracks() as RecentlyPlayedResponse;
    // console.log('tracks recentes :' , recentlyPlayed);

    return (
        <>
            {recentlyPlayed.items.map((item, index: number) => (
                <HomeCard key={index} position={index + 1} imageSrc={item.track.album.images[1].url} text={item.track.name} subText={item.track.artists[0].name} />
            ))}
        </>
    )
}