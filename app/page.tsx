import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <main className='w-full h-screen px-4 py-8 lg:px-12 lg:py-20 flex flex-col justify-center'>
      <section className='flex flex-col justify-center items-center my-auto'>
        <p className='text-center pb-4'> 
          Welcome on your new Spotify Dashboard ! <br /> 
          Get statistics about your favorite artists, tracks and playlists.
        </p>
        <button className=' w-36 py-3 rounded-3xl bg-gray-mid hover:bg-gray-light text-white mb-4'>
          <Link href={'api/auth/login'}>Login</Link>
        </button>
        <small className='text-center text-white'>
          This app is not affiliated with Spotify. It uses the Spotify API to get your data.
        </small>
      </section>
    </main>
  );
}
