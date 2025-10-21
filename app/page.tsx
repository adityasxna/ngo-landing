import Link from 'next/link'
import Testimonial from '../components/Testimonial'

const testimonials = [
  { name: 'Asha', text: 'Volunteering here changed my life. The team is caring and professional.' },
  { name: 'Ravi', text: 'We rescued many pups together. Truly rewarding.' },
  { name: 'Mira', text: 'Adopting a street cat was the best decision.' }
]

export default function Home(){
  return (
    <div>
      <section className="text-center py-16">
        <h2 className="text-4xl font-bold">Stray Paws India</h2>
        <p className="mt-4 text-lg">Rescue • Rehabilitate • Rehome — Helping stray dogs & cats across India</p>
        <div className="mt-6 flex justify-center gap-4">
          <Link href="/join" className="bg-yellow px-6 py-3 rounded-md font-semibold">Join</Link>
          <Link href="/donate" className="bg-white text-yellow px-6 py-3 rounded-md font-semibold">Donate</Link>
        </div>
      </section>

      <section className="py-12">
        <h3 className="text-2xl font-bold mb-4">About Us</h3>
        <p className="bg-white p-6 rounded-lg">We are a grassroots NGO dedicated to rescuing and caring for stray dogs and cats across India. Our mission is to reduce suffering and find loving homes through rescue, medical care, vaccination drives, and community education.</p>
      </section>

      <section className="py-12">
        <h3 className="text-2xl font-bold mb-4">Our Work</h3>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-white p-6 rounded">Rescue operations</div>
          <div className="bg-white p-6 rounded">Adoption drives</div>
          <div className="bg-white p-6 rounded">Vaccination & sterilization camps</div>
        </div>
      </section>

      <section className="py-12">
        <h3 className="text-2xl font-bold mb-4">Awards & Achievements</h3>
        <ul className="bg-white p-6 rounded-lg">
          <li>Community Animal Care Award (2022)</li>
          <li>Best Volunteer Program (2023)</li>
          <li>Public Service Recognition (2024)</li>
        </ul>
      </section>

      <section className="py-12">
        <h3 className="text-2xl font-bold mb-4">Impact</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white p-6 rounded">500+ Rescues</div>
          <div className="bg-white p-6 rounded">200+ Adoptions</div>
          <div className="bg-white p-6 rounded">50+ Vaccination Camps</div>
          <div className="bg-white p-6 rounded">1200+ Volunteers Trained</div>
        </div>
      </section>

      <section className="py-12">
        <h3 className="text-2xl font-bold mb-6">Volunteer Testimonials</h3>
        <div className="grid md:grid-cols-3 gap-4">
          {testimonials.map((t)=> <Testimonial key={t.name} name={t.name} text={t.text} />)}
        </div>
      </section>
    </div>
  )
}
