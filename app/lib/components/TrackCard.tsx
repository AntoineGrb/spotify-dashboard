'use client'

import { useState, useEffect, useRef } from 'react';
import { useMediaQuery } from 'usehooks-ts';
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

    const cardRef = useRef<HTMLDivElement>(null);
    const audioRef = useRef<HTMLAudioElement>(new Audio(previewUrl));

    const isPhone = useMediaQuery('(max-width: 768px)');

    //Set audio src when previewUrl changes because user select another filter
    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.src = previewUrl;
        }
    }, [previewUrl])

    //Pause audio et hide infos when user leaves the card
    useEffect(() => { 
        function handleOutsideClick(e: MouseEvent) { 
            if (cardRef.current && !cardRef.current.contains(e.target as Node)) {
                setisInfosShowed(false);
                pauseAudio();
            }
        }

        if (isInfosShowed) {
            document.addEventListener('mousedown', handleOutsideClick);
        }

        return () => { 
            document.removeEventListener('mousedown', handleOutsideClick);
        }

    }, [isInfosShowed])

    //Handle showing/hiding hidden infos
    const handleMouseEnter = () => { 
        setisInfosShowed(true);
    }

    const handleMouseLeave = () => { 
        setisInfosShowed(false);
        pauseAudio();
    }
    
    const handleClick = () => { 
        //Only when user is on a phone, because on desktop is handled by mouse enter/leave
        if (isPhone) {
            setisInfosShowed(true);
        }
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
            ref={cardRef}
            className='w-full pt-[100%] mb-2 relative rounded-md'
            style={{backgroundImage: `url(${imageSrc})`, backgroundSize: 'contain', backgroundPosition: 'center'}}
            onClick={handleClick}
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