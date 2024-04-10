
interface HomeCardProps { 
    position: number
    imageSrc: string
    text: string
    subText?: string
}

export default function HomeCard({position, imageSrc, text, subText}: HomeCardProps) { 
    return (
        <article className=' w-full flex flex-col'>
            <div 
                className=' bg-gray-500 w-full pt-[100%] rounded-lg mb-2 relative'
                style={{backgroundImage: `url(${imageSrc})`, backgroundSize: 'contain', backgroundPosition: 'center'}}
            >
                <p className=' absolute top-2 left-4 text-lg font-bold font-hind'> {position} </p>
            </div>
            <p className='text-sm font-semibold truncate'> {text} </p>
            <p className='text-xs text-gray-font truncate'> {subText} </p>
        </article>
    )
}