import { Card, CardContent, CardFooter } from "@/components/ui/card"

export default function Testimonial({ name, text }: { name: string; text: string }) {
  return (
    <Card>
      <CardContent className="p-6">
        <p className="italic">"{text}"</p>
      </CardContent>
      <CardFooter>
        <p className="font-semibold">— {name}</p>
      </CardFooter>
    </Card>
  )
}