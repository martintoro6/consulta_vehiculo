import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import consultaRouter from './routes/consulta.js';
import authRouter from './routes/auth.js';


dotenv.config();


const app = express();
app.use(cors());
app.use(express.json());


app.get('/health', (_, res) => res.json({ ok: true }));
app.use('/api', consultaRouter);


const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on :${PORT}`));

app.use('/api/auth', authRouter);