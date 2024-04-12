'use client'

import { useState, useRef } from 'react';
import TrackCardFooterInfos from './TrackCardFooterInfos';
import TrackCardHiddenInfos from './TrackCardHiddenInfos';

interface TrackCardProps { 
    name: string;
    imageSrc: string;
    artist: string;
    position: number;
    duration: number;
    previewUrl: string;
    danceability: number;
    energy: number;
    tempo: number;
}

export default function TrackCard({position, name, imageSrc, artist, duration, previewUrl, danceability, energy, tempo}: TrackCardProps) {
    
    const [isInfosShowed, setisInfosShowed] = useState(false);
    const [isPlayling, setIsPlaying] = useState(false);

    const audioRef = useRef<HTMLAudioElement>(new Audio(previewUrl));

    //Handle showing/hiding hidden infos
    const handleMouseEnter = () => { 
        setisInfosShowed(true);
    }

    const handleMouseLeave = () => { 
        setisInfosShowed(false);
        pauseAudio();
    }

    //Handle audio play/pause
    const playAudio = () => {
        if (audioRef.current) {
            audioRef.current.play();
        }
        setIsPlaying(true);
    }

    const pauseAudio = () => { 
        if (audioRef.current) {
            audioRef.current.pause();
        }
        setIsPlaying(false);
    }

    return (
        <article 
            className='w-full pt-[100%] mb-2 relative rounded-md'
            style={{backgroundImage: `url(${imageSrc})`, backgroundSize: 'contain', backgroundPosition: 'center'}}
            // onClick={() => setisInfosShowed(!isInfosShowed)}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <TrackCardFooterInfos position={position} name={name} artist={artist} />
                <TrackCardHiddenInfos
                    duration={duration}
                    previewUrl={previewUrl}
                    danceability={danceability}
                    energy={energy}
                    tempo={tempo}  
                    isPlayling={isPlayling}
                    playAudio={playAudio}
                    pauseAudio={pauseAudio}
                    isVisible={isInfosShowed}   
                />
        </article>
    )
}