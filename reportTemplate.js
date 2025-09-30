export function renderSections(doc, report) {
const { placa, fuentes } = report;


doc.fontSize(18).text('CONSULTA VEHICULAR INTEGRAL', { align: 'center' });
doc.moveDown(0.5);
doc.fontSize(10).text(`Placa: ${placa}`);
doc.moveDown(0.5);


// SUNARP
doc.fontSize(14).text('Datos del Vehículo (SUNARP)');
if (fuentes.sunarp) {
const v = fuentes.sunarp;
doc.fontSize(10).list([
`Marca: ${v.marca || '-'}`,
`Modelo: ${v.modelo || '-'}`,
`Color: ${v.color || '-'}`,
`Serie: ${v.serie || '-'}`,
`Motor: ${v.motor || '-'}`,
`VIN: ${v.vin || '-'}`,
]);
} else { doc.fontSize(10).text('Sin datos'); }
doc.moveDown(0.5);


// SOAT
doc.fontSize(14).text('SOAT');
if (fuentes.soat) {
const s = fuentes.soat;
doc.fontSize(10).list([
`Aseguradora: ${s.aseguradora || '-'}`,
`Inicio: ${s.inicio || '-'}`,
`Fin: ${s.fin || '-'}`,
`Estado: ${s.estado || '-'}`,
`Póliza: ${s.poliza || '-'}`,
]);
} else { doc.fontSize(10).text('Sin datos'); }
doc.moveDown(0.5);


// MTC
doc.fontSize(14).text('Revisión Técnica (MTC)');
if (fuentes.mtc) {
const m = fuentes.mtc;
doc.fontSize(10).list([
`Certificado: ${m.certificado || '-'}`,
`Fecha de Revisión: ${m.fechaRevision || '-'}`,
`Vence: ${m.vence || '-'}`,
`Resultado: ${m.resultado || '-'}`,
]);
} else { doc.fontSize(10).text('Sin datos'); }
doc.moveDown(0.5);


// SAT
doc.fontSize(14).text('SAT (multas/papeletas)');
const sat = fuentes.sat;
if (sat) {
}
}