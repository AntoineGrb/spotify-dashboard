import HeaderTitle from '@/app/lib/components/HeaderPageTitle';
import Filters from '@/app/lib/components/Filters';
import IndicatorsSection from '@/app/lib/components/IndictorsSection';
import CardsSection from '@/app/lib/components/CardSection';

export default async function Dashboard() {  

    return (
        <main className='h-screen w-screen overflow-y-auto px-4 py-8 lg:px-12 lg:py-20'>
            <HeaderTitle title='Dashboard' />
            <Filters selected='year' />
            <IndicatorsSection />
            <CardsSection title='Recently played' />
            <CardsSection title='Top artists' />
            <CardsSection title='Top tracks' />
        </main>
    )
}