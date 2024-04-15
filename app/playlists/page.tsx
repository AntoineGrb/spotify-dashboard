import Link from 'next/link';
import HeaderTitle from '@/app/lib/components/HeaderPageTitle';
import { getUserPlaylists } from '../lib/actions/data';

interface SpotifyApiResponseProps {
    items: SpotifyItemProps[];
  }
  
  interface SpotifyItemProps {
    description: string;
    name: string;
    id: string;
    images: SpotifyImageProps[];
    tracks: TracksProps
  }
  
  interface SpotifyImageProps {
    url: string;
  }

  interface TracksProps {
    total: number;
  }

export default async function PlaylistsPage() {  

    const playlists = await getUserPlaylists() as SpotifyApiResponseProps;

    return (
        <>
        <main className='w-full h-screen overflow-y-auto px-4 py-8 lg:px-12 lg:py-20'>
            <HeaderTitle title='Playlists' />
            <section className='grid grid-cols-1 gap-2'>
            {playlists && playlists.items.map((playlist, index) => (
                <Link href={`/playlists/${playlist.id}`}>
                    <div key={index} className='border-b border-stone-800 p-2 flex items-center gap-4 hover:bg-stone-800/50 '>
                        <div className='flex items-center justify-between w-[75px] h-[75px]' >
                            {playlist.images && <img src={playlist.images[0].url} alt={playlist.name} width={75} height={75} />}
                        </div>
                        <div className='flex flex-col gap-1'>
                            <h3 className='text-sm md:text-lg font-bold text-white'>{playlist.name}</h3>
                            <p className='text-xs text-gray-500'>{playlist.tracks.total} tracks</p>
                        </div>
                    </div>
                </Link>
            ))}
            </section>
        </main>
        </>
    )
}