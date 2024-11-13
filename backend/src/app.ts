import express from 'express';
import productRoutes from './routes/productRoutes';

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Routes
app.use('/api', productRoutes);

// Starta servern
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
