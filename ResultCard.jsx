export default function ResultCard({ title, obj }){
return (
<div className="bg-white rounded-2xl shadow p-4">
<h3 className="font-semibold mb-2">{title}</h3>
{!obj && <p className="text-sm text-gray-500">Sin datos</p>}
{obj && typeof obj === 'object' && !Array.isArray(obj) && (
<ul className="text-sm space-y-1">
{Object.entries(obj).map(([k,v]) => (
<li key={k}><span className="text-gray-500 mr-1">{k}:</span>{String(v)}</li>
))}
</ul>
)}
{Array.isArray(obj) && obj.length === 0 && (
<p className="text-sm text-gray-500">Sin registros</p>
)}
</div>
)
}