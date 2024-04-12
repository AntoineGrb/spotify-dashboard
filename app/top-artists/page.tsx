import { SearchParamsProps } from '../lib/interfaces/interfaces';
import HeaderTitle from '@/app/lib/components/HeaderPageTitle';
import Filters from '../lib/components/Filters';
import ArtistCard from '@/app/lib/components/ArtistCard';
import { getTopArtists } from '@/app/lib/actions/data';

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

export default async function TopArtistsPage({searchParams}: {searchParams: SearchParamsProps}) {  

    const selectedFilter = searchParams.filter || 'month';
    
    const topArtists = await getTopArtists(selectedFilter, 50) as TopItemsResponse;

    return (
        <main className='w-full h-screen overflow-y-auto px-4 py-8 lg:px-12 lg:py-20'>
            <HeaderTitle title='Top artists' />
            <Filters />
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
        </main>
    )
}