import Indicator from '@/src/components/indicator/page'

export default function Indicators() { 
    return (
        <section className='flex justify-between pb-8'>
            <Indicator label='Heures' value={60} />
            <Indicator label='Chansons' value={350}/>
            <Indicator label='Artistes' value={72}/>
        </section>
    )
}