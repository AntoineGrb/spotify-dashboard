import ArtistCardFooterInfos from './ArtistCardFooterInfos';

interface ArtistCardProps {
    position: number; 
    name: string;
    imageSrc: string;
}

export default function Card({position, name, imageSrc}: ArtistCardProps) {

    return (
        <article 
            className='w-full pt-[100%] mb-2 relative rounded-md '
            style={{backgroundImage: `url(${imageSrc})`, backgroundSize: 'contain', backgroundPosition: 'center'}}
        >
            <ArtistCardFooterInfos position={position} name={name} />
        </article>
    )
}