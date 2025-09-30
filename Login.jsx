import { useState } from 'react'
import api from '../services/api'


export default function Login(){
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')


const onSubmit = async e => {
e.preventDefault()
try{
const res = await api.post('/auth/login', { email, password })
localStorage.setItem('token', res.data.token)
window.location.href = '/'
}catch{
alert('Credenciales incorrectas')
}
}


return (
<div className="flex items-center justify-center min-h-screen bg-gray-100">
<form onSubmit={onSubmit} className="bg-white p-6 rounded-2xl shadow w-96 space-y-4">
<h2 className="text-xl font-bold">Iniciar Sesión</h2>
<input className="border px-3 py-2 rounded w-full" value={email} onChange={e=>setEmail(e.target.value)} placeholder="Correo" />
<input className="border px-3 py-2 rounded w-full" type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder="Contraseña" />
<button className="bg-blue-600 text-white w-full py-2 rounded">Ingresar</button>
</form>
</div>
)
}