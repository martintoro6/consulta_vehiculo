import Home from './pages/Home'


export default function App(){
return (
<div className="min-h-screen bg-gray-50">
<header className="bg-white shadow">
<div className="max-w-5xl mx-auto p-4 flex items-center justify-between">
<h1 className="text-xl font-bold">CONSULTA VEHICULAR</h1>
<a href="https://wa.me/" className="text-sm underline">¿Necesitas ayuda?</a>
</div>
</header>
<Home />
<footer className="text-center text-xs text-gray-500 py-6">© {new Date().getFullYear()} – Consulta Vehicular</footer>
</div>
)
}