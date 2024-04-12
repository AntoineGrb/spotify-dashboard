import { SearchParamsProps } from '../lib/interfaces/interfaces';
import HeaderTitle from '@/app/lib/components/HeaderPageTitle';
import Filters from '../lib/components/Filters';
import TrackCard from '@/app/lib/components/TrackCard';
import { getTopTracks, getAudioFeatures } from '@/app/lib/actions/data';

interface TopTracksResponse {
    items: TopTracksItemProps[];
}

interface TopTracksItemProps { 
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

export default async function TopTracksPage({searchParams}: {searchParams: SearchParamsProps}) {  

    const selectedFilter = searchParams.filter || 'month';

    //Get top tracks
    const topTracks = await getTopTracks(selectedFilter, 50) as TopTracksResponse;

    //Get tracks ids to get audio features of each track
    const ids = topTracks.items.map(track => track.id).join(',');
    const tracksAudioFeatures = await getAudioFeatures(ids);

    //Add audio features to top tracks
    let topTracksWithAudioFeatures
    if (topTracks.items.length === tracksAudioFeatures.audio_features.length) { 
        topTracksWithAudioFeatures = topTracks.items.map((track, index) => {
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
            {topTracksWithAudioFeatures && topTracksWithAudioFeatures.map((track, index) => (
                <TrackCard 
                    key={index} 
                    position={index + 1} 
                    name={track.name}
                    imageSrc={track.album.images[1].url}
                    artist={track.artists[0].name}
                    duration={track.duration_ms}
                    previewUrl={track.preview_url}
                    danceability={track.audio_features.danceability}
                    energy={track.audio_features.energy}
                    tempo={track.audio_features.tempo}
                />
            ))}
        </section>
        </main>
    )
}