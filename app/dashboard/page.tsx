
import HeaderTitle from '@/src/components/headerPageTitle/page';
import Filters from '@/src/components/filters/page';
import IndicatorsSection from '@/src/components/indicatorsSection/page';
import CardsSection from '@/src/components/cardsSection/page';
import { getUserProfile } from '@/src/lib/data';

export default async function Dashboard() {

    const userData = await getUserProfile();
    console.log('userData server side', userData);

    return (
        <main className='w-full h-screen overflow-y-auto px-4 py-8 lg:px-12 lg:py-20'>
            <HeaderTitle title='Dashboard' />
            <Filters selected='year' />
            <IndicatorsSection />
            <CardsSection title='Recently played' />
            <CardsSection title='Top artists' />
            <CardsSection title='Top tracks' />
            <p> {userData.display_name}</p>
        </main>
    )
}