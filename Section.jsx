export default function Section({ title, children }){
return (
<section className="bg-white rounded-2xl shadow p-4">
<h3 className="font-semibold mb-2">{title}</h3>
{children}
</section>
)
}