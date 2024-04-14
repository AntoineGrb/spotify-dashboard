import HeaderPageTitle from "@/app/lib/components/HeaderPageTitle";
import { getPlaylistTracks, getAudioFeatures } from "@/app/lib/actions/data";
import TrackCard from "@/app/lib/components/TrackCard";

interface SpotifyApiResponseProps { 
    items: ItemProps[];
}

interface ItemProps {
    track: TrackProps;
}

interface TrackProps { 
    name: string;
    album: AlbumProps;
    artists: ArtistsProps[];
    id: string;
    duration_ms: number;
    preview_url: string;
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

export default async function Playlist({params}: {params: {playlistId: string}}) {

    console.log('params' , params)
    const playlist = await getPlaylistTracks(params.playlistId) as SpotifyApiResponseProps;
    console.log('playlist' , playlist)

    //Get tracks ids to get audio features of each track
    const ids = playlist.items.map(track => track.track.id).join(',');
    const tracksAudioFeatures = await getAudioFeatures(ids);
    console.log('tracksAudioFeatures' , tracksAudioFeatures)

     //! Que faire en cas de tracksWithAudioFeatures null ? Il faut pouvoir faire feater les tracks avec audio features et les mapper et évincer celles ou il n'y a pas de retours
    //Add audio features to top tracks
    let tracksWithAudioFeatures, tracksWithoutAudioFeatures
    if (playlist.items.length === tracksAudioFeatures.audio_features.length) { 
        tracksWithAudioFeatures = playlist.items.map((track, index) => {
            return {
                ...track,
                audio_features: tracksAudioFeatures.audio_features[index]
            }
        })
    } else {
        tracksWithoutAudioFeatures = playlist.items
    }

    console.log('tracksWithAudioFeatures' , tracksWithAudioFeatures)
   

    return (
        <main className='w-full h-screen overflow-y-auto px-4 py-8 lg:px-12 lg:py-20'>
            <HeaderPageTitle title='Playlists' />
            <section className='grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5'>
            {tracksWithAudioFeatures && tracksWithAudioFeatures.map((track, index) => (
                <TrackCard 
                    key={index} 
                    position={index + 1} 
                    name={track.track.name}
                    imageSrc={''}
                    artist={track.track.artists[0].name}
                    duration={track.track.duration_ms}
                    previewUrl={track.track.preview_url}
                    danceability={track.audio_features.danceability}
                    energy={track.audio_features.energy}
                    tempo={track.audio_features.tempo}
                />
            ))}
            </section>
        </main>
    )
}