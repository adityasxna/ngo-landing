"use client"
import { useState } from 'react'

export default function ContactPage(){
  const [email,setEmail]=useState('')
  const [phone,setPhone]=useState('')
  const [message,setMessage]=useState('')
  const [show,setShow]=useState(false)

  async function handleSubmit(e: any){
    e.preventDefault()
    await fetch('/api/contact', { method:'POST', body: JSON.stringify({ email, phone, message }), headers: { 'Content-Type': 'application/json' }})
    setShow(true)
    setEmail(''); setPhone(''); setMessage('')
    setTimeout(()=>setShow(false),2500)
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md max-w-xl">
        <label className="block mb-2">Email (required)
          <input required value={email} onChange={e=>setEmail(e.target.value)} className="mt-1 w-full p-2 border rounded" />
        </label>
        <label className="block mb-2">Phone (optional)
          <input value={phone} onChange={e=>setPhone(e.target.value)} className="mt-1 w-full p-2 border rounded" />
        </label>
        <label className="block mb-2">Message (required)
          <textarea required value={message} onChange={e=>setMessage(e.target.value)} className="mt-1 w-full p-2 border rounded" />
        </label>
        <button className="bg-yellow px-4 py-2 rounded">Send</button>
      </form>
      {show && <div className="fixed inset-0 bg-black/40 flex items-center justify-center"><div className="bg-white p-6 rounded">Thanks for contacting us!</div></div>}
    </div>
  )
}
