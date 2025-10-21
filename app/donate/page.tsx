"use client"
import { useState } from 'react'

export default function DonatePage(){
  const [form,setForm]=useState({ name:'', email:'', amount:'' })
  const [show,setShow]=useState(false)

  async function submit(e:any){
    e.preventDefault()
    await fetch('/api/donate',{ method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({ name: form.name, email: form.email, amount: parseFloat(form.amount || '0') }) })
    setShow(true)
    setForm({ name:'', email:'', amount:'' })
    setTimeout(()=>setShow(false),2500)
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Donate</h2>
      <form onSubmit={submit} className="bg-white p-6 rounded max-w-md">
        <input required placeholder="Name" value={form.name} onChange={e=>setForm({...form, name:e.target.value})} className="w-full p-2 mb-2 border rounded" />
        <input required placeholder="Email" value={form.email} onChange={e=>setForm({...form, email:e.target.value})} className="w-full p-2 mb-2 border rounded" />
        <input required placeholder="Amount" value={form.amount} onChange={e=>setForm({...form, amount:e.target.value})} className="w-full p-2 mb-2 border rounded" />
        <button className="bg-yellow px-4 py-2 rounded">Donate (Mock)</button>
      </form>
      {show && <div className="fixed inset-0 bg-black/40 flex items-center justify-center"><div className="bg-white p-6 rounded">Thanks for your generous donation!</div></div>}
    </div>
  )
}
