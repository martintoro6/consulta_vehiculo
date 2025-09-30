import PDFDocument from 'pdfkit';
import { renderSections } from './reportTemplate.js';


export async function makePdf({ placa, data }) {
const doc = new PDFDocument({ size: 'A4', margin: 40 });
renderSections(doc, data);
return doc; // devuelve stream
}