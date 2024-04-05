import Nav from "../nav/page"

export default function MenuDesktop() {
    return (
        <section className="w-80 h-screen max-h-screen overflow-clip bg-gray-dark flex flex-col">
            <header>
                <p> Header </p>
            </header>
            <Nav />
            <footer className='flex justify-center'>
                <small className=' text-white'> Design & developed by AntoineGrb </small>
            </footer>
        </section>
    )
}