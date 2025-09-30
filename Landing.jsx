export default function Landing(){
return (
<div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white min-h-screen flex flex-col">
<header className="p-6 flex justify-between items-center">
<h1 className="font-bold text-xl">Consulta Vehicular</h1>
<nav className="space-x-4">
<a href="/login" className="hover:underline">Ingresar</a>
<a href="/register" className="hover:underline">Registrarse</a>
</nav>
</header>


<main className="flex-1 flex flex-col justify-center items-center text-center px-4">
<h2 className="text-4xl font-extrabold mb-4">Consulta el estado de tu vehículo en segundos</h2>
<p className="max-w-xl mb-6">Accede a información del SOAT, papeletas, revisión técnica y más, todo en un solo lugar.</p>
<a href="/login" className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-xl shadow hover:bg-gray-100">Comenzar ahora</a>
</main>


<footer className="text-center text-sm py-4 bg-blue-800">© {new Date().getFullYear()} – Consulta Vehicular</footer>
</div>
)
}