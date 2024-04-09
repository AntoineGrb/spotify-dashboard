
import HeaderTitle from '@/app/lib/components/HeaderPageTitle/HeaderPageTitle';
import Filters from '@/app/lib/components/Filters/Filters';
import IndicatorsSection from '@/app/lib/components/IndicatorsSection/IndictorsSection';
import CardsSection from '@/app/lib/components/CardsSection/CardSection';
import { getUserProfile } from '@/app/lib/api/data';

export default async function Dashboard() {

    //! Définir une page erreur

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