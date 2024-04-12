import { Timer, PartyPopper, Activity, Zap, Play } from 'lucide-react'

export default function CardHiddenInfos() {
    return (
        <div className="absolute bottom-[-1px] w-full h-full top-0 p-2 lg:px-4 flex flex-col justify-end bg-gray-dark/95 rounded-md z-10">
            <div className='flex justify-end'>
                <Play size={24} color='white' cursor={'pointer'} />
            </div>
            <div className="w-full h-full flex flex-col justify-end gap-2 sm:gap-3 pb-3 border-b border-slate-500">
                <div className='flex gap-2'>
                    <Timer size={20} color='white' />
                    <p className='relative top-[2px] lg:top-0 text-xs sm:text-sm lg:text-base'> Text </p>
                </div>
                <div className='flex gap-2'>
                    <PartyPopper size={20} color='white' />
                    <p className='relative top-[2px] lg:top-0 text-xs sm:text-sm lg:text-base'> Text </p>
                </div>
                <div className='flex gap-2'>
                    <Activity size={20} color='white' />
                    <p className='relative top-[2px] lg:top-0 text-xs sm:text-sm lg:text-base'> Text </p>
                </div>
                <div className='flex gap-2'>
                    <Zap size={20} color='white' />
                    <p className='relative top-[2px] lg:top-0 text-xs sm:text-sm lg:text-base'> Text </p>
                </div>
            </div>
            {/* This div has same size as CardFooterInfos, to not exceed */}
            <div className="w-full h-[52px] lg:h-[78px] px-1">
            </div>
        </div>
    )
}