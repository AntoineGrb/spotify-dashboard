import Image from 'next/image'

export default function CardsSection() {
    return (
        <section>
            <header className='flex justify-between pb-2'>
                <h2> Recently played </h2>
                <p className=' underline underline-offset-2 cursor-pointer'> See more </p>
            </header>
            <main className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 grid-flow-row gap-x-2'>
                <article className=' w-full flex flex-col'>
                    <div className=' bg-gray-500 w-full pt-[100%] rounded-lg mb-2 relative'>
                        <p className=' absolute top-2 left-4 text-lg font-bold font-hind'> 1 </p>
                        {/* <Image src={'/'} alt={`name`} width={30} height={30} /> */}
                    </div>
                    <p className='text-sm font-semibold truncate'> Track namefffffffff </p>
                    <p className='text-xs text-gray-font truncate'> Artiste name </p>
                </article>
                <article className='w-full flex flex-col'>
                    <div className=' bg-gray-500 w-full pt-[100%] rounded-lg mb-2 relative'>
                        <p className=' absolute top-2 left-4 text-lg font-bold font-hind'> 1 </p>
                        {/* <Image src={'/'} alt={`name`} width={30} height={30} /> */}
                    </div>
                    <p className='text-sm font-semibold truncate '> Track name efsf </p>
                    <p className='text-xs text-gray-font truncate '> Artiste name </p>
                </article>
                <article className='w-full flex flex-col'>
                    <div className=' bg-gray-500 w-full pt-[100%] rounded-lg mb-2 relative'>
                        <p className=' absolute top-2 left-4 text-lg font-bold font-hind'> 1 </p>
                        {/* <Image src={'/'} alt={`name`} width={30} height={30} /> */}
                    </div>
                    <p className='text-sm font-semibold truncate '> Track name efsf </p>
                    <p className='text-xs text-gray-font truncate '> Artiste name </p>
                </article>
            </main>
        </section>
    )
}