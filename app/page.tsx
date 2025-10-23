import Link from 'next/link'
import Testimonial from '../components/Testimonial'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

const testimonials = [
  { name: 'Asha', text: 'Volunteering here changed my life. The team is caring and professional.' },
  { name: 'Ravi', text: 'We rescued many pups together. Truly rewarding.' },
  { name: 'Mira', text: 'Adopting a street cat was the best decision.' },
]

export default function Home() {
  return (
    <div className="space-y-12">
      <section className="text-center py-16">
        <h2 className="text-4xl font-bold tracking-tight lg:text-5xl">Stray Paws India</h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Rescue • Rehabilitate • Rehome — Helping stray dogs & cats across India
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <Button asChild size="lg">
            <Link href="/join">Join as a Volunteer</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/donate">Donate Now</Link>
          </Button>
        </div>
      </section>

      <section>
        <Card>
          <CardHeader>
            <CardTitle>About Us</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              We are a grassroots NGO dedicated to rescuing and caring for stray dogs and cats across India. Our mission is to reduce suffering and find loving homes through rescue, medical care, vaccination drives, and community education.
            </p>
          </CardContent>
        </Card>
      </section>

      <section>
        <h3 className="text-2xl font-bold mb-4 text-center">Our Work</h3>
        <div className="grid md:grid-cols-3 gap-4">
          <Card>
            <CardContent className="p-6">
              <h4 className="font-semibold">Rescue Operations</h4>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h4 className="font-semibold">Adoption Drives</h4>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h4 className="font-semibold">Vaccination & Sterilization Camps</h4>
            </CardContent>
          </Card>
        </div>
      </section>

      <div className="grid md:grid-cols-2 gap-8">
        <section>
          <h3 className="text-2xl font-bold mb-4">Awards & Achievements</h3>
          <Card>
            <CardContent className="p-6">
              <ul className="list-disc list-inside space-y-2">
                <li>Community Animal Care Award (2022)</li>
                <li>Best Volunteer Program (2023)</li>
                <li>Public Service Recognition (2024)</li>
              </ul>
            </CardContent>
          </Card>
        </section>

        <section>
          <h3 className="text-2xl font-bold mb-4">Our Impact</h3>
          <Card>
            <CardContent className="p-6 grid grid-cols-2 gap-4">
              <div className="text-center">
                <p className="font-bold text-2xl">500+</p>
                <p>Rescues</p>
              </div>
              <div className="text-center">
                <p className="font-bold text-2xl">200+</p>
                <p>Adoptions</p>
              </div>
              <div className="text-center">
                <p className="font-bold text-2xl">50+</p>
                <p>Vaccination Camps</p>
              </div>
              <div className="text-center">
                <p className="font-bold text-2xl">1200+</p>
                <p>Volunteers Trained</p>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>

      <section className="py-12">
        <h3 className="text-2xl font-bold mb-6 text-center">Volunteer Testimonials</h3>
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full max-w-sm mx-auto"
        >
          <CarouselContent>
            {testimonials.map((t) => (
              <CarouselItem key={t.name} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Testimonial name={t.name} text={t.text} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>
    </div>
  )
}