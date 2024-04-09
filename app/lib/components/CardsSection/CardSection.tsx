import Image from 'next/image'
import Card from '@/app/lib/components/Card/Card'

interface CardsSectionProps {
    title: string
}

export default function CardsSection({title}: CardsSectionProps) {
    return (
        <section className='pb-10'>
            <header className='flex justify-between items-center pb-2'>
                <h2> {title} </h2>
                <p className='text-sm underline underline-offset-2 cursor-pointer'> See more </p>
            </header>
            <main className='grid grid-cols-4 md:grid-cols-5 lg:grid-cols-7 xl:grid-cols-10 grid-flow-row gap-x-2'>
                <Card position={1} imageSrc='' text={'First line'} subText={'Second line'} />
                <Card position={2} imageSrc='' text={'First line'} subText={'Second line'} />
                <Card position={3} imageSrc='' text={'First line'} subText={'Second line'} />
                <Card position={4} imageSrc='' text={'First line'} subText={'Second line'} />
            </main>
        </section>
    )
}