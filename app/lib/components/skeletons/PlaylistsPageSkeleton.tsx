
export default function PlaylistPageSkeleton() { 
    return (
        <main className='h-screen w-screen px-4 py-8 lg:px-12 lg:py-20 overflow-y-auto'>
            <header className='bg-slate-500 w-52 flex items-center gap-2 pb-10 mb-20 rounded-3xl animate-pulse-fast'>
            </header>
            <div className=' border-b border-stone-800 mb-2 flex items-center gap-4 w-full h-[85px] animate-pulse-fast'>
                <div className="bg-slate-500 w-[75px] h-[75px] animate-pulse rounded-lg">
                </div>
                <div className="flex flex-col gap-1">
                    <div className='bg-slate-500 w-40 h-6 rounded-3xl animate-pulse'></div>
                    <div className='bg-slate-500 w-16 h-4 rounded-3xl animate-pulse'></div>
                </div>
            </div>
            <div className=' border-b border-stone-800 mb-2 flex items-center gap-4 w-full h-[85px] animate-pulse-medium'>
                <div className="bg-slate-500 w-[75px] h-[75px] animate-pulse rounded-lg">
                </div>
                <div className="flex flex-col gap-1">
                    <div className='bg-slate-500 w-52 h-6 rounded-3xl animate-pulse'></div>
                    <div className='bg-slate-500 w-16 h-4 rounded-3xl animate-pulse'></div>
                </div>
            </div>
            <div className=' border-b border-stone-800 mb-2 flex items-center gap-4 w-full h-[85px] animate-pulse-slow'>
                <div className="bg-slate-500 w-[75px] h-[75px] animate-pulse rounded-lg">
                </div>
                <div className="flex flex-col gap-1">
                    <div className='bg-slate-500 w-32 h-6 rounded-3xl animate-pulse'></div>
                    <div className='bg-slate-500 w-16 h-4 rounded-3xl animate-pulse'></div>
                </div>
            </div>
            <div className=' border-b border-stone-800 mb-2 flex items-center gap-4 w-full h-[85px] animate-pulse-medium'>
                <div className="bg-slate-500 w-[75px] h-[75px] animate-pulse rounded-lg">
                </div>
                <div className="flex flex-col gap-1">
                    <div className='bg-slate-500 w-36 h-6 rounded-3xl animate-pulse'></div>
                    <div className='bg-slate-500 w-16 h-4 rounded-3xl animate-pulse'></div>
                </div>
            </div>
        </main>
    )
}