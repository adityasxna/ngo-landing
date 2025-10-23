import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Menu } from 'lucide-react'

export default function Header() {
  return (
    <header className="bg-yellow shadow-md">
      <div className="container flex items-center justify-between py-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-beige rounded-full flex items-center justify-center font-bold">
            SP
          </div>
          <div>
            <h1 className="text-xl font-bold">Stray Paws India</h1>
            <p className="text-sm">Caring for strays across India</p>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-3">
          <Button asChild variant="ghost">
            <Link href="/donate">Donate</Link>
          </Button>
          <Button asChild variant="ghost">
            <Link href="/contact">Contact</Link>
          </Button>
          <Button asChild>
            <Link href="/join">Join as Volunteer</Link>
          </Button>
        </nav>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <nav className="grid gap-4 text-lg mt-8">
                <Link href="/donate" className="hover:underline">
                  Donate
                </Link>
                <Link href="/contact" className="hover:underline">
                  Contact
                </Link>
                <Link href="/join" className="hover:underline">
                  Join as Volunteer
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}