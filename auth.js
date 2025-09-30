import { Router } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';


const router = Router();


// Demo: almacenamiento en memoria (puedes cambiarlo a DB real)
const users = [];


router.post('/register', async (req, res) => {
const { email, password } = req.body;
if (!email || !password) return res.status(400).json({ error: 'Faltan datos' });


const exists = users.find(u => u.email === email);
if (exists) return res.status(400).json({ error: 'Usuario ya registrado' });


const hashed = await bcrypt.hash(password, 10);
const user = { id: Date.now(), email, password: hashed };
users.push(user);
res.json({ ok: true });
});


router.post('/login', async (req, res) => {
const { email, password } = req.body;
const user = users.find(u => u.email === email);
if (!user) return res.status(400).json({ error: 'Usuario no encontrado' });


const valid = await bcrypt.compare(password, user.password);
if (!valid) return res.status(400).json({ error: 'Credenciales incorrectas' });


const token = jwt.sign({ id: user.id, email: user.email }, 'secretkey', { expiresIn: '2h' });
res.json({ ok: true, token });
});


router.get('/me', (req, res) => {
const auth = req.headers.authorization;
if (!auth) return res.status(401).json({ error: 'No autorizado' });


try {
const token = auth.split(' ')[1];
const decoded = jwt.verify(token, 'secretkey');
res.json({ ok: true, user: decoded });
} catch (err) {
res.status(401).json({ error: 'Token inválido' });
}
});


export default router;