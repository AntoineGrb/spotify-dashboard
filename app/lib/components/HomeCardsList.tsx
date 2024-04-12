import Link from 'next/link'

interface HomeListProps {
    title: string,
    children: React.ReactNode,
    link: string
}

export default function HomeList({title, link, children}: HomeListProps) {

    return (
        <section className='pb-10'>
            <header className='flex justify-between items-center pb-2'>
                <h2> {title} </h2>
                <Link href={link}>
                    <p className='text-sm underline underline-offset-2 cursor-pointer'> See more </p>
                </Link>
            </header>
            <section className='flex overflow-x-auto py-2' style={{scrollbarWidth: 'none'}}>
                { children }
            </section>
        </section>
    )
}

//grid grid-cols-4 md:grid-cols-5 lg:grid-cols-7 xl:grid-cols-10 grid-flow-row gap-2