'use client'

import { Timer, PartyPopper, Activity, Zap, Play, Pause } from 'lucide-react';
import { convertDurationInMinutesSeconds } from '@/app/lib/utils/utils';

interface CardHiddenInfosProps { 
    duration: number;
    previewUrl: string;
    danceability: number;
    energy: number;
    tempo: number;
    isPlayling: boolean;
    playAudio: () => void;
    pauseAudio: () => void;
    isVisible: boolean;
}

export default function CardHiddenInfos({duration, danceability, energy, tempo, isPlayling, playAudio, pauseAudio, isVisible}: CardHiddenInfosProps) {

    const convertedDuration = convertDurationInMinutesSeconds(duration);
    const convertedTempo = Math.round(tempo);
    const convetedEnergy = Math.round(energy * 100);
    const convertedDanceability = Math.round(danceability * 100);

    return (
        <div className="absolute bottom-[-1px] w-full h-full top-0 p-2 lg:px-4 flex flex-col justify-end bg-stone-900/95 rounded-md z-10"
        style={{opacity: isVisible ? 1 : 0,
            visibility: isVisible ? 'visible' : 'hidden',
            transition: 'opacity 200ms ease-out, visibility 200ms ease-out',}}>
            <div className='flex justify-end'>
                {isPlayling ? 
                    <Pause size={24} color='white' cursor={'pointer'} onClick={pauseAudio} /> :
                    <Play size={24} color='white' cursor={'pointer'} onClick={playAudio} />
                }               
            </div>
            <div className="w-full h-full flex flex-col justify-end gap-2 sm:gap-3 pb-3 border-b border-slate-500">
                <div className='flex gap-2'>
                    <Timer size={20} color='white' />
                    <p className='relative top-[2px] lg:top-0 text-xs sm:text-sm lg:text-base cursor-default'> { convertedDuration } </p>
                </div>
                <div className='flex gap-2'>
                    <Activity size={20} color='white' />
                    <p className='relative top-[2px] lg:top-0 text-xs sm:text-sm lg:text-base cursor-default'> { convertedTempo } BPM </p>
                </div>
                <div className='flex gap-2'>
                    <PartyPopper size={20} color='white' />
                    <p className='relative top-[2px] lg:top-0 text-xs sm:text-sm lg:text-base cursor-default'> { convertedDanceability }% dance </p>
                </div>
                <div className='flex gap-2'>
                    <Zap size={20} color='white' />
                    <p className='relative top-[2px] lg:top-0 text-xs sm:text-sm lg:text-base cursor-default'> { convetedEnergy }% energy </p>
                </div>
            </div>
            {/* This div has same size as CardFooterInfos, to not exceed */}
            <div className="w-full h-[52px] lg:h-[78px] px-1">
            </div>
        </div>
    )
}