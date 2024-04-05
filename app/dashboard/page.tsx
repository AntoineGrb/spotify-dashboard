import HeaderTitle from '@/src/components/headerTitle/page';
import Filters from '@/src/components/filters/page';
import IndicatorsSection from '@/src/components/indicatorsSection/page';
import CardsSection from '@/src/components/cardsSection/page';

export default function Dashboard() {
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