import HeaderTitle from '@/app/lib/components/HeaderPageTitle';
import Filters from '@/app/lib/components/Filters';
import IndicatorsSection from '@/app/lib/components/IndictorsSection';
import HomeCardsList from '@/app/lib/components/HomeCardsList';
import HomeRecentlyPlayedList from '../lib/components/HomeRecentlyPlayedList';
import HomeTopArtistsList from '../lib/components/HomeTopArtistsList';
import HomeTopTracksList from '../lib/components/HomeTopTracksList';

interface ProfileSearchParamsParops {
    [key: string]: string;
}

export default function Dashboard({searchParams}: {searchParams: ProfileSearchParamsParops}) {  

    const selectedFilter = searchParams.filter || 'month';

    return (
        <main className='h-screen w-screen overflow-y-auto px-4 py-8 lg:px-12 lg:py-20'>
            <HeaderTitle title='Dashboard' />
            <Filters/>
            <IndicatorsSection />
            <HomeCardsList title='Top artists'> 
                <HomeTopArtistsList selectedFilter={selectedFilter} />
            </HomeCardsList>
            <HomeCardsList title='Top tracks'> 
                <HomeTopTracksList selectedFilter={selectedFilter} />
            </HomeCardsList>
            <HomeCardsList title='Recently played'> 
                <HomeRecentlyPlayedList />
            </HomeCardsList>
        </main>
    )
}