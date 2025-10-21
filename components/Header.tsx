import Link from 'next/link'

export default function Header(){
  return (
    <header className="bg-yellow shadow-md">
      <div className="container flex items-center justify-between py-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-beige rounded-full flex items-center justify-center font-bold">SP</div>
          <div>
            <h1 className="text-xl font-bold">Stray Paws India</h1>
            <p className="text-sm">Caring for strays across India</p>
          </div>
        </div>
        <nav className="flex items-center gap-3">
          <Link href="/donate" className="bg-white text-yellow px-4 py-2 rounded-md font-semibold">Donate</Link>
          <Link href="/contact" className="bg-white text-yellow px-4 py-2 rounded-md font-semibold">Contact</Link>
          <Link href="/join" className="bg-white text-yellow px-4 py-2 rounded-md font-semibold">Join as Volunteer</Link>
        </nav>
      </div>
    </header>
  )
}
