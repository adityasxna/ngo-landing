export default function Testimonial({ name, text }: { name: string; text: string }){
  return (
    <div className="p-4 bg-white rounded-lg shadow-sm">
      <p className="italic">"{text}"</p>
      <p className="mt-3 font-semibold">— {name}</p>
    </div>
  )
}
