import HeaderTitle from '@/app/lib/components/HeaderPageTitle';
import Filters from '../lib/components/Filters';
import ArtistsCardsGrid from '../lib/components/ArtistsCardsGrid';

export default function TopArtists() {  

    //! Paramétrer les filtres pour ne pas renvoyer vers le dashboard

    return (
        <main className='w-full h-screen overflow-y-auto px-4 py-8 lg:px-12 lg:py-20'>
            <HeaderTitle title='Top artists' />
            <Filters />
            <ArtistsCardsGrid />
        </main>
    )
}