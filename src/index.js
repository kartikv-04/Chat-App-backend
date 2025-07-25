
import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from "cors";
import http from "http";

import authRoutes from './routes/auth.route.js';
import messageRoutes from './routes/message.route.js';
import { connectDB } from './lib/db.js';
import { initSocket } from './lib/socket.js';

dotenv.config();

const app = express();
const server = http.createServer(app); 


app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin:process.env.CLIENT_URL,
    credentials: true
}));


app.use('/api/auth', authRoutes);
app.use('/api/messages', messageRoutes);


initSocket(server);

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
    connectDB();
});
