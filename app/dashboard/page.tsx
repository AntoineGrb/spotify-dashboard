import HeaderTitle from '@/app/lib/components/HeaderPageTitle/HeaderPageTitle';
import Filters from '@/app/lib/components/Filters/Filters';
import IndicatorsSection from '@/app/lib/components/IndicatorsSection/IndictorsSection';
import CardsSection from '@/app/lib/components/CardsSection/CardSection';
import { useAuth } from '@/app/lib/context/AuthContext';

export default async function Dashboard() {  

    //Fetch data depuis le composant server /api/spotify/user

    return (
        <main className='w-full h-screen overflow-y-auto px-4 py-8 lg:px-12 lg:py-20'>
            <HeaderTitle title='Dashboard' />
            <Filters selected='year' />
            <IndicatorsSection />
            <CardsSection title='Recently played' />
            <CardsSection title='Top artists' />
            <CardsSection title='Top tracks' />
        </main>
    )
}