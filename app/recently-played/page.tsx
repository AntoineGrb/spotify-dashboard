import HeaderTitle from '@/app/lib/components/HeaderPageTitle';
import Filters from '../lib/components/Filters';
import TrackCard from '@/app/lib/components/TrackCard';
import { getRecentlyPlayedTracks , getAudioFeatures } from '@/app/lib/actions/data';

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
    id: string;
    duration_ms: number;
    preview_url: string;
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

export default async function RecentlyPlayedTracks() {  

    //! Variabiliser avec les filtres
    //Get top tracks
    const recentlyPlayedTracks = await getRecentlyPlayedTracks(50) as RecentlyPlayedResponse;

    //Get tracks ids to get audio features of each track
    const ids = recentlyPlayedTracks.items.map(track => track.track.id).join(',');
    const tracksAudioFeatures = await getAudioFeatures(ids);

    //Add audio features to recently played tracks
    let recentlyPlayedTracksWithAudioFeatures
    if (recentlyPlayedTracks.items.length === tracksAudioFeatures.audio_features.length) { 
        recentlyPlayedTracksWithAudioFeatures = recentlyPlayedTracks.items.map((track, index) => {
            return {
                ...track,
                audio_features: tracksAudioFeatures.audio_features[index]
            }
        })
    }

    return (
        <main className='w-full h-screen overflow-y-auto px-4 py-8 lg:px-12 lg:py-20'>
            <HeaderTitle title='Top tracks' />
            <Filters />
            <section className='grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5'>
            {recentlyPlayedTracksWithAudioFeatures && recentlyPlayedTracksWithAudioFeatures.map((track, index) => (
                <TrackCard 
                    key={index} 
                    position={index + 1} 
                    name={track.track.name}
                    imageSrc={track.track.album.images[1].url}
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