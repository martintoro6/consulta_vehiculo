export default function demoService(placa) {
// Datos de ejemplo consistentes para pruebas locales
return {
placa,
fuentes: {
sunarp: {
placa,
marca: 'TOYOTA',
modelo: 'HILUX',
color: 'PLATA METALICO',
serie: '8AJHA3CD1M2105560',
motor: '1GDG180344',
vin: '8AJHA3CD1M2105560'
},
soat: {
aseguradora: 'MAPFRE',
inicio: '2025-03-09',
fin: '2026-03-09',
estado: 'VIGENTE',
poliza: '0000000000030225000927014'
},
mtc: {
certificado: 'C-2024-067-443-007225',
fechaRevision: '2024-11-27',
vence: '2025-11-27',
resultado: 'APROBADO'
},
sat: {
lima: { papeletas: [] },
callao: { papeletas: [] },
huancayo: { papeletas: [{ codigo: '20-419598', falta: 'G28', fecha: '2023-12-28', estado: '396.00' }] },
otros: []
},
sutran: { infracciones: [] },
infogas: null,
atu: { registrado: false }
}
};
}