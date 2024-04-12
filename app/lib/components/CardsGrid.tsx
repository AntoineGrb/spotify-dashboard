import Card from './Card';
import { getTopTracks } from '../actions/data';
import TopTracks from '@/app/top-tracks/page';

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

export default async function CardsGrid() {

    //! Variabiliser avec les filtres
    const topTracks = await getTopTracks('all-time', 50) as TopTracksResponse;
    console.log(topTracks);

    return (
        <section className='grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5'>
            {topTracks.items.map((track, index) => (
                <Card 
                    key={index} 
                    position={index + 1} 
                    name={track.name}
                    imageSrc={track.album.images[1].url}
                    artist={track.artists[0].name}
                />
            ))}
        </section>
    )
}