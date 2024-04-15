
interface HomeCardProps { 
    position?: number
    imageSrc: string
    text: string
    subText?: string
}

export default function HomeCard({position, imageSrc, text, subText}: HomeCardProps) { 
    return (
        <article className='w-24 md:w-32 lg:w-44 flex-none mr-2'>
            <div 
                className=' bg-gray-500 w-full pt-[100%] rounded-lg mb-2 relative'
                style={{backgroundImage: `url(${imageSrc})`, backgroundSize: 'contain', backgroundPosition: 'center'}}
            >
                {position && <div className="absolute top-2 left-2 lg:top-4 lg:left-4 bg-gray-900/30 w-9 h-9 pt-1 rounded-full flex items-center justify-center">
                    <p className='text-2xl font-bold font-hind p-0'> {position} </p>
                </div>}
            </div>
            <p className='text-sm font-semibold truncate'> {text} </p>
            <p className='text-xs text-gray-font truncate'> {subText} </p>
        </article>
    )
}