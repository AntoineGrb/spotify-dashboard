import HeaderTitle from '@/src/components/headerTitle/page';
import Filters from '@/src/components/filters/page';
import IndicatorsSection from '@/src/components/indicatorsSection/page';
import CardsSection from '@/src/components/cardsSection/page';

export default function Dashboard() {
    return (
        <main className=' px-4 py-8'>
            <HeaderTitle title='Dashboard' />
            <Filters selected='year' />
            <IndicatorsSection />
            <CardsSection />
        </main>
    )
}