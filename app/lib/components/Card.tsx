interface CardProps { 
    name: string;
    imageSrc: string;
    artist: string;
    position: number;
}

export default function Card({position, name, imageSrc, artist}: CardProps) {
    return (
        <article 
            className='w-full pt-[100%] mb-2 relative rounded-md'
            style={{backgroundImage: `url(${imageSrc})`, backgroundSize: 'contain', backgroundPosition: 'center'}}
        >
            <div className="absolute bottom-[-1px] flex w-full gap-1 px-1 py-2 rounded-b-md bg-gray-dark/95">
                <div className="flex items-center justify-center w-1/6">
                    <p className=""> { position }</p>
                </div>
                <div className="w-5/6">
                    <p className="text-sm lg:text-base truncate"> {name} </p>
                    <p className="text-xs lg:text-sm truncate"> {artist}</p>
                </div>
            </div>
        </article>
    )
}