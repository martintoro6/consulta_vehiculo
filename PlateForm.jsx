import { useState } from 'react'


export default function PlateForm({ onSearch, loading }){
const [placa, setPlaca] = useState('')
const submit = (e) => { e.preventDefault(); if(!placa) return; onSearch(placa) }


return (
<form onSubmit={submit} className="grid md:grid-cols-[1fr_auto] gap-3">
<input value={placa} onChange={e=>setPlaca(e.target.value.toUpperCase())}
placeholder="Ingresa placa (ej. BFV907)" className="border rounded-xl px-4 py-3 outline-none" />
<button disabled={loading} className="rounded-xl px-6 py-3 bg-blue-600 text-white">
{loading ? 'Consultando…' : 'Consultar'}
</button>
</form>
)
}