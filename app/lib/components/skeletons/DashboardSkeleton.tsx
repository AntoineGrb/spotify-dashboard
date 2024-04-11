

export default function DashBoardSkeleton() { 
    return (
        <main className='h-screen w-screen px-4 py-8 lg:px-12 lg:py-20 overflow-y-auto'>
            <header className='flex items-center gap-2 pb-16 rounded-lg'>
                <div className='bg-slate-500 w-16 h-16 rounded-full animate-pulse'>
                </div>
                <div className="bg-slate-500 w-52 h-10 rounded-3xl animate-pulse">  
                </div>
            </header>
            <section className="bg-slate-500 w-4/5  pb-8 rounded-3xl animate-pulse mb-8">
            </section>
            <section className="mb-12">
                <div className="bg-slate-500 w-52 flex pb-6 mb-4 rounded-3xl animate-pulse">
                </div>
                <div className="flex gap-2 overflow-x-auto" style={{scrollbarWidth: 'none'}}>
                    <div>
                        <div className="bg-slate-500 w-24 h-24 mb-2 md:w-32 md:h-32 lg:w-44 lg:h-44 flex-none mr-2 rounded-lg animate-pulse">
                        </div>
                        <div className="bg-slate-500 w-16 py-2 rounded-3xl animate-pulse">
                        </div>
                    </div>
                    <div>
                        <div className="bg-slate-500 w-24 h-24 mb-2 md:w-32 md:h-32 lg:w-44 lg:h-44 flex-none mr-2 rounded-lg animate-pulse">
                        </div>
                        <div className="bg-slate-500 w-14 py-2 rounded-3xl animate-pulse">
                        </div>
                    </div>
                    <div>
                        <div className="bg-slate-500 w-24 h-24 mb-2 md:w-32 md:h-32 lg:w-44 lg:h-44 flex-none mr-2 rounded-lg animate-pulse">
                        </div>
                        <div className="bg-slate-500 w-20 py-2 rounded-3xl animate-pulse">
                        </div>
                    </div>
                    <div>
                        <div className="bg-slate-500 w-24 h-24 mb-2 md:w-32 md:h-32 lg:w-44 lg:h-44 flex-none mr-2 rounded-lg animate-pulse">
                        </div>
                        <div className="bg-slate-500 w-20 w- py-2 rounded-3xl animate-pulse">
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="bg-slate-500 w-56 flex pb-6 mb-4 rounded-3xl animate-pulse">
                </div>
                <div className="flex gap-2 overflow-x-auto" style={{scrollbarWidth: 'none'}}>
                    <div>
                        <div className="bg-slate-500 w-24 h-24 mb-2 md:w-32 md:h-32 lg:w-44 lg:h-44 flex-none mr-2 rounded-lg animate-pulse">
                        </div>
                        <div className="bg-slate-500 w-20 py-2 rounded-3xl animate-pulse">
                        </div>
                    </div>
                    <div>
                        <div className="bg-slate-500 w-24 h-24 mb-2 md:w-32 md:h-32 lg:w-44 lg:h-44 flex-none mr-2 rounded-lg animate-pulse">
                        </div>
                        <div className="bg-slate-500 w-16 py-2 rounded-3xl animate-pulse">
                        </div>
                    </div>
                    <div>
                        <div className="bg-slate-500 w-24 h-24 mb-2 md:w-32 md:h-32 lg:w-44 lg:h-44 flex-none mr-2 rounded-lg animate-pulse">
                        </div>
                        <div className="bg-slate-500 w-20 py-2 rounded-3xl animate-pulse">
                        </div>
                    </div>
                    <div>
                        <div className="bg-slate-500 w-24 h-24 mb-2 md:w-32 md:h-32 lg:w-44 lg:h-44 flex-none mr-2 rounded-lg animate-pulse">
                        </div>
                        <div className="bg-slate-500 w-16 w- py-2 rounded-3xl animate-pulse">
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}