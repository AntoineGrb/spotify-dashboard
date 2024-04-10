import HomeCard from "./HomeCard";
import { getRecentlyPlayedTracks } from "../api/data";
import { RecentlyPlayedResponse } from "@/app/lib/interfaces/interfaces";

export default async function HomeRecentlyPlayedList() { 

    const recentlyPlayed = await getRecentlyPlayedTracks() as RecentlyPlayedResponse;
    console.log('tracks recentes :' , recentlyPlayed);

    return (
        <>
            {recentlyPlayed.items.map((item, index: number) => (
                <HomeCard key={index} position={index + 1} imageSrc={item.track.album.images[1].url} text={item.track.name} subText={item.track.artists[0].name} />
            ))}
        </>
    )
}