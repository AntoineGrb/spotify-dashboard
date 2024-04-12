import ArtistCard from './ArtistCard';
import { getTopArtists } from '../actions/data';

interface TopItemsResponse {
    items: TopItemsItemsProps[];
}

interface TopItemsItemsProps {
    name: string;
    images: ImageProps[];
}

interface ImageProps {
    url: string;
}


export default async function TopArtistsGrid() {

    //! Variabiliser avec les filtres
    //Get top tracks
    const topArtists = await getTopArtists('all-time', 50) as TopItemsResponse;

    return (
        <section className='grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5'>
            {topArtists && topArtists.items.map((artist, index) => (
                <ArtistCard 
                    key={index}
                    position={index + 1} 
                    name={artist.name}
                    imageSrc={artist.images[1].url}
                />
            ))}
        </section>
    )
}