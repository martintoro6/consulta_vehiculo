import { Router } from 'express';
import { getFullReport } from '../services/index.js';
import { makePdf } from '../pdf/makePdf.js';


const router = Router();


// GET /api/consulta?placa=BFV907
router.get('/consulta', async (req, res) => {
try {
const placa = (req.query.placa || '').trim().toUpperCase();
if (!placa) return res.status(400).json({ error: 'Falta la placa' });


const data = await getFullReport(placa);
res.json({ ok: true, data });
} catch (err) {
console.error(err);
res.status(500).json({ ok: false, error: 'Error consultando fuentes' });
}
});


// GET /api/consulta/pdf?placa=BFV907
router.get('/consulta/pdf', async (req, res) => {
try {
const placa = (req.query.placa || '').trim().toUpperCase();
if (!placa) return res.status(400).json({ error: 'Falta la placa' });


const data = await getFullReport(placa);
const pdfStream = await makePdf({ placa, data });


res.setHeader('Content-Type', 'application/pdf');
res.setHeader('Content-Disposition', `inline; filename=consulta-${placa}.pdf`);
pdfStream.pipe(res);
pdfStream.end();
} catch (err) {
console.error(err);
res.status(500).json({ ok: false, error: 'Error generando PDF' });
}
});


export default router;