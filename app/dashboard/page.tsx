import HeaderPageTitle from '@/app/lib/components/HeaderPageTitle';
import Filters from '@/app/lib/components/Filters';
import HomeCardsList from '@/app/lib/components/HomeCardsList';
import HomeRecentlyPlayedList from '../lib/components/HomeRecentlyPlayedList';
import HomeTopArtistsList from '../lib/components/HomeTopArtistsList';
import HomeTopTracksList from '../lib/components/HomeTopTracksList';
import HomeTopGenres from '../lib/components/HomeTopGenres';

interface SearchParamsParops {
    [key: string]: string;
}

export default function DashboardPage({searchParams}: {searchParams: SearchParamsParops}) {  

    const selectedFilter = searchParams.filter || 'month';

    return (
        <>
        <main className='h-screen w-screen overflow-y-auto px-4 py-8 lg:px-12 lg:py-20'>
            <HeaderPageTitle title='Dashboard' />
            <Filters/>
            <HomeCardsList title='Top tracks' link='/top-tracks'> 
                <HomeTopTracksList selectedFilter={selectedFilter} />
            </HomeCardsList>
            <HomeCardsList title='Top artists' link='/top-artists'> 
                <HomeTopArtistsList selectedFilter={selectedFilter} />
            </HomeCardsList>
            <HomeCardsList title='Recently played' link='/recently-played'> 
                <HomeRecentlyPlayedList />
            </HomeCardsList>
            <HomeTopGenres selectedFilter={selectedFilter} />
        </main>
        </>

    )
}