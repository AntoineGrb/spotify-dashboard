import HeaderTitle from '@/app/lib/components/HeaderPageTitle';
import Filters from '@/app/lib/components/Filters';
import IndicatorsSection from '@/app/lib/components/IndictorsSection';
import HomeCardsList from '@/app/lib/components/HomeCardsList';
import HomeRecentlyPlayedList from '../lib/components/HomeRecentlyPlayedList';

export default async function Dashboard() {  

    return (
        <main className='h-screen w-screen overflow-y-auto px-4 py-8 lg:px-12 lg:py-20'>
            <HeaderTitle title='Dashboard' />
            <Filters selected='year' />
            <IndicatorsSection />
            <HomeCardsList title='Recently played'> 
                <HomeRecentlyPlayedList />
            </HomeCardsList>
            <HomeCardsList title='Top artists'> <p> Hello </p> </HomeCardsList>
            <HomeCardsList title='Top tracks'> <p> Hello </p> </HomeCardsList>

        </main>
    )
}