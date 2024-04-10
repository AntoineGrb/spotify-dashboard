interface HomeListProps {
    title: string,
    children: React.ReactNode
}

export default function HomeList({title, children}: HomeListProps) {
    return (
        <section className='pb-10'>
            <header className='flex justify-between items-center pb-2'>
                <h2> {title} </h2>
                <p className='text-sm underline underline-offset-2 cursor-pointer'> See more </p>
            </header>
            <main className='grid grid-cols-4 md:grid-cols-5 lg:grid-cols-7 xl:grid-cols-10 grid-flow-row gap-x-2'>
                { children }
            </main>
        </section>
    )
}