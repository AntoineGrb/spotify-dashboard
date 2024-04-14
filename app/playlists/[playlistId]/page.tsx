import HeaderPageTitle from "@/app/lib/components/HeaderPageTitle";
import { getPlaylistTracks, getPlaylist, getAudioFeatures } from "@/app/lib/actions/data";
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

    const [playlistTracks, playlistInfos] = await Promise.all([
        getPlaylistTracks(params.playlistId) as Promise<SpotifyApiResponseProps>,
        getPlaylist(params.playlistId) as Promise<any> //! Créer une interface pour cette réponse 
    ])

    //Get tracks ids to get audio features of each track
    const ids = playlistTracks.items.map(track => track.track.id).join(',');
    const tracksAudioFeatures = await getAudioFeatures(ids);

    const audioFeaturesMap = new Map<string, any>();
    tracksAudioFeatures.audio_features.forEach((audioFeature: any) => {
        if (audioFeature && audioFeature.id) {
            audioFeaturesMap.set(audioFeature.id, audioFeature)
        }
    })

    const tracksWithAudioFeatures = playlistTracks.items.filter(item => audioFeaturesMap.has(item.track.id)).map(item => { 
        return {
            ...item,
            audio_features: audioFeaturesMap.get(item.track.id)
        }
    })

    console.log('tracksWithAudioFeatures' , tracksWithAudioFeatures)

    return (
        <main className='w-full h-screen overflow-y-auto px-4 py-8 lg:px-12 lg:py-20'>
            <header className='flex gap-2 items-center justify-start pb-16'>
                <div className='flex items-center gap-4 justify-between w-[70px] h-[70px] lg:w-[100px] lg:h-[100px]' >
                    {playlistInfos.images && <img src={playlistInfos.images[0].url} alt={playlistInfos.name} />}
                </div>
                <div className='flex flex-col gap-1'>
                    <h2 className='text-lg lg:text-2xl font-bold text-white'>{playlistInfos.name}</h2>
                    <p className='text-base lg:text-lg text-gray-500'>{playlistInfos.owner.display_name} | {playlistInfos.tracks.total} tracks</p>
                </div>
            </header>
            <section className='grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5'>
            {tracksWithAudioFeatures && tracksWithAudioFeatures.map((track, index) => (
                <TrackCard 
                    key={index} 
                    position={index + 1} 
                    name={track.track.name}
                    imageSrc={track.track.album.images ? track.track.album.images[1].url : ''}
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