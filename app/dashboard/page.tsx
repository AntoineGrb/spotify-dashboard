import HeaderTitle from '@/app/lib/components/HeaderPageTitle/HeaderPageTitle';
import Filters from '@/app/lib/components/Filters/Filters';
import IndicatorsSection from '@/app/lib/components/IndicatorsSection/IndictorsSection';
import CardsSection from '@/app/lib/components/CardsSection/CardSection';
import { getRecentlyPlayedTracks } from '@/app/lib/api/data';

export default async function Dashboard() {  

    const recentlyPlayed = await getRecentlyPlayedTracks();
    console.log('recentlyPlayedTracks !!', recentlyPlayed);
    //!Commencer à fetcher et dispatcher les données

    return (
        <main className='w-full h-screen overflow-y-auto px-4 py-8 lg:px-12 lg:py-20'>
            <HeaderTitle title='Dashboardd' />
            <Filters selected='year' />
            <IndicatorsSection />
            <CardsSection title='Recently played' />
            <CardsSection title='Top artists' />
            <CardsSection title='Top tracks' />
        </main>
    )
}