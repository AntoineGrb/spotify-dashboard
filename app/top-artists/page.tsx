import HeaderTitle from '@/app/lib/components/HeaderPageTitle/HeaderPageTitle';

export default function Dashboard() {  

    return (
        <main className='w-full h-screen overflow-y-auto px-4 py-8 lg:px-12 lg:py-20'>
            <HeaderTitle title='Top artists' />
            <p> Ajouter playlist </p>
        </main>
    )
}