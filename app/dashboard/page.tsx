import HeaderTitle from '@/src/components/headerTitle/page';
import Filters from '@/src/components/filters/page';
import IndicatorsSection from '@/src/components/indicatorsSection/page';

export default function Dashboard() {
    return (
        <main className=' px-4 py-8'>
            <HeaderTitle />
            <Filters selected='year' />
            <IndicatorsSection />
        </main>
    )
}