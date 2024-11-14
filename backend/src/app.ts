import express from 'express';
import cors from 'cors';
import corsOptions from './config/corsOptions';
import productRoutes from './routes/productRoutes';

const app = express();
// const PORT = 3000;

// Middleware
app.use(cors(corsOptions));
app.use(express.json());

// Routes
app.use('/api', productRoutes);

// // Starta servern
// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });

export default app;