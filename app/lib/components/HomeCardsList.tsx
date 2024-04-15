'use client'
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
                <h2 className='text-3xl'> {title} </h2>
                <Link href={link}>
                    <p className='text-sm underline underline-offset-2 cursor-pointer'> See more </p>
                </Link>
            </header>
            <section className='flex overflow-x-auto py-2 hide-scrollbar' style={{scrollbarWidth: 'none'}}>
                { children }
            </section>
            {/* Add style to handle scrollbar hiding with all navigators */}
            <style jsx>
                {`
                    .hide-scrollbar::-webkit-scrollbar {
                        display: none;
                    }
                    .hide-scrollbar {
                        -ms-overflow-style: none;  /* IE and Edge */
                        scrollbar-width: none;  /* Firefox */
                    }
                `}
            </style>
        </section>

    )
}