import './globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

export const metadata = {
  title: 'Stray Paws India',
  description: 'NGO helping stray dogs and cats across India',
}

export default function RootLayout({ children }: { children: React.ReactNode }){
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="container py-12">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
