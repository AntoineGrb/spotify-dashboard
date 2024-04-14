interface CardFooterInfosProps { 
    name: string;
    artist: string;
    position: number;
}

export default function CardFooterInfos({ position, name, artist}: CardFooterInfosProps) {
    return (
        <div className="absolute bottom-[-1px] flex items-center gap-1 w-full h-12 lg:h-16 px-1 rounded-b-md bg-stone-900/95 z-20">
                <div className="flex items-center justify-center w-1/6">
                    <p className=""> { position }</p>
                </div>
                <div className="w-5/6">
                    <p className="text-sm lg:text-base truncate"> {name} </p>
                    <p className="text-xs lg:text-sm truncate"> {artist}</p>
                </div>
        </div>
    )
}