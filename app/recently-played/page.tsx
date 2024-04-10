import HeaderTitle from '@/app/lib/components/HeaderPageTitle';

export default function Dashboard() {  

    return (
        <main className='w-screen h-screen overflow-y-auto px-4 py-8 lg:px-12 lg:py-20'>
            <HeaderTitle title='Recently played' />
            <p> Ajouter playlist </p>
        </main>
    )
}