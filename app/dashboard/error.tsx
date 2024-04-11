'use client' // Error components must be Client Components
 
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
 
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  const router = useRouter()

  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])
 
  return (
    <main className='h-screen w-screen overflow-y-auto px-4 py-8 lg:px-12 lg:py-20 flex flex-col justify-center items-center'>
      <h2 className='mb-4'>Something went wrong!</h2>
      <div className='flex flex-col gap-2'>
        <button onClick={() => reset()} className='w-36 py-3 rounded-3xl bg-gray-mid hover:bg-gray-light text-white'>
          Try again
        </button>
        <button onClick={() => router.push('/')} className=' w-36 py-3 rounded-3xl bg-gray-mid hover:bg-gray-light text-white'>
          Go home page
        </button>
      </div>
    </main>
  )
}