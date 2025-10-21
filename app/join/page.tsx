"use client"
import { useState } from 'react'
import Testimonial from '../../components/Testimonial'

const testimonials = [
  { name: 'Neha', text: 'Helping during vaccination camps was eye-opening.' },
  { name: 'Arun', text: 'Great learning, amazing people.' }
]

export default function JoinPage(){
  const [show,setShow]=useState(false)
  const [form,setForm]=useState({ name:'', email:'', phone:'', city:'', age:'', availability:'', motivation:'' })

  async function submit(e:any){
    e.preventDefault()
    await fetch('/api/volunteer',{ method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(form) })
    setShow(true)
    setTimeout(()=>setShow(false),2500)
    setForm({ name:'', email:'', phone:'', city:'', age:'', availability:'', motivation:'' })
  }

  return (
    <div>
      <section className="py-6 text-center">
        <h2 className="text-3xl font-bold">Join as Volunteer</h2>
        <button onClick={()=>window.scrollTo({ top: 99999, behavior: 'smooth' })} className="mt-4 bg-yellow px-4 py-2 rounded">Join Now</button>
      </section>

      <section className="py-6">
        <h3 className="text-2xl font-bold">Volunteer Program</h3>
        <p className="bg-white p-6 rounded">Volunteers help with rescues, foster care, adoption events, and community outreach. Benefits include training, certificates, and community experience.</p>
      </section>

      <section className="py-6">
        <h3 className="text-2xl font-bold mb-4">Testimonials</h3>
        <div className="grid md:grid-cols-2 gap-4">{testimonials.map(t=> <Testimonial key={t.name} name={t.name} text={t.text} />)}</div>
      </section>

      <section className="py-6">
        <h3 className="text-2xl font-bold mb-4">Volunteer Signup</h3>
        <form onSubmit={submit} className="bg-white p-6 rounded max-w-xl">
          <input required placeholder="Full Name" value={form.name} onChange={e=>setForm({...form, name:e.target.value})} className="w-full p-2 mb-2 border rounded" />
          <input required placeholder="Email" value={form.email} onChange={e=>setForm({...form, email:e.target.value})} className="w-full p-2 mb-2 border rounded" />
          <input placeholder="Phone" value={form.phone} onChange={e=>setForm({...form, phone:e.target.value})} className="w-full p-2 mb-2 border rounded" />
          <input placeholder="City" value={form.city} onChange={e=>setForm({...form, city:e.target.value})} className="w-full p-2 mb-2 border rounded" />
          <input placeholder="Age" value={form.age} onChange={e=>setForm({...form, age:e.target.value})} className="w-full p-2 mb-2 border rounded" />
          <input placeholder="Availability" value={form.availability} onChange={e=>setForm({...form, availability:e.target.value})} className="w-full p-2 mb-2 border rounded" />
          <textarea placeholder="Motivation" value={form.motivation} onChange={e=>setForm({...form, motivation:e.target.value})} className="w-full p-2 mb-2 border rounded" />
          <button className="bg-yellow px-4 py-2 rounded">Sign Up</button>
        </form>
      </section>

      {show && <div className="fixed inset-0 bg-black/40 flex items-center justify-center"><div className="bg-white p-6 rounded">Thanks for showing interest as a volunteer!</div></div>}
    </div>
  )
}
