import demoService from './demoService.js';
import * as sunarp from './sunarpAdapter.js';
import * as soat from './soatAdapter.js';
import * as mtc from './mtcAdapter.js';
import * as sat from './satAdapter.js';
import * as sutran from './sutranAdapter.js';
import * as infogas from './infogasAdapter.js';
import * as atu from './atuAdapter.js';


const MODE = process.env.MODE || 'demo';


export async function getFullReport(placa) {
if (MODE === 'demo') {
return demoService(placa);
}


// MODO PROD: Ejecuta adapters reales (pueden requerir captcha/proxy)
const [sunarpData, soatData, mtcData, satData, sutranData, infogasData, atuData] = await Promise.all([
sunarp.fetchSunarp(placa).catch(() => null),
soat.fetchSoat(placa).catch(() => null),
mtc.fetchMtc(placa).catch(() => null),
sat.fetchSatAll(placa).catch(() => null),
sutran.fetchSutran(placa).catch(() => null),
infogas.fetchInfogas(placa).catch(() => null),
atu.fetchAtu(placa).catch(() => null),
]);


return {
placa,
fuentes: {
sunarp: sunarpData,
soat: soatData,
mtc: mtcData,
sat: satData,
sutran: sutranData,
infogas: infogasData,
atu: atuData,
}
};
}