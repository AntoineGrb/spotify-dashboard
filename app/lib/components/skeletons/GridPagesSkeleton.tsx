

export default function GridPagesSkeleton() { 
    return (
        <main className='h-screen w-screen px-4 py-8 lg:px-12 lg:py-20 overflow-y-auto'>
            <header className='flex items-center gap-2 pb-20 rounded-lg'>
                <div className="bg-slate-500 w-52 h-10 rounded-3xl animate-pulse-fast">  
                </div>
            </header>
            <section className="bg-slate-500 w-full pb-6 rounded-3xl animate-pulse-medium mb-16">
            </section>
            <section className='grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5'>
                <div className='bg-slate-600 w-full pt-[100%] mb-2 relative rounded-md animate-pulse-fast'>
                </div>
                <div className='bg-slate-600 w-full pt-[100%] mb-2 relative rounded-md animate-pulse-medium'>
                </div>
                <div className='bg-slate-600 w-full pt-[100%] mb-2 relative rounded-md animate-pulse-slow'>
                </div>
                <div className='bg-slate-600 w-full pt-[100%] mb-2 relative rounded-md animate-pulse-slow'>
                </div>
                <div className='bg-slate-600 w-full pt-[100%] mb-2 relative rounded-md animate-pulse-medium'>
                </div>
                <div className='bg-slate-600 w-full pt-[100%] mb-2 relative rounded-md animate-pulse-fast'>
                </div>
                <div className='bg-slate-600 w-full pt-[100%] mb-2 relative rounded-md animate-pulse-fast'>
                </div>
            </section>
        </main>
    )
}