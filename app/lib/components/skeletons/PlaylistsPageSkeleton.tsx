
export default function PlaylistPageSkeleton() { 
    return (
        <main className='h-screen w-screen px-4 py-8 lg:px-12 lg:py-20 overflow-y-auto'>
            <header className='flex items-center gap-2 pb-16 rounded-lg'>
                <div className="bg-slate-500 w-52 h-14 rounded-3xl animate-pulse">  
                </div>
            </header>
            <section className="bg-slate-500 w-4/5 pb-8 rounded-3xl animate-pulse mb-8">
            </section>
            <div className='bg-slate-500 rounded-md border-b border-stone-800 mb-2 flex items-center gap-4 w-full h-[75px] animate-pulse'>
            </div>
            <div className='bg-slate-500 rounded-md border-b border-stone-800 mb-2 flex items-center gap-4 w-full h-[75px] animate-pulse'>
            </div>
            <div className='bg-slate-500 rounded-md border-b border-stone-800 mb-2 flex items-center gap-4 w-full h-[75px] animate-pulse'>
            </div>
            <div className='bg-slate-500 rounded-md border-b border-stone-800 mb-2 flex items-center gap-4 w-full h-[75px] animate-pulse'>
            </div>
            <div className='bg-slate-500 rounded-md border-b border-stone-800 mb-2 flex items-center gap-4 w-full h-[75px] animate-pulse'>
            </div>
        </main>
    )
}