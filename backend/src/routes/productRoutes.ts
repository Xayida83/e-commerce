import express, { Request, Response } from 'express';
import { products } from '../data/products';

const router = express.Router();

// Endpoint för att hämta alla produkter
router.get('/products', (req: Request, res: Response) => {
  res.json(products);
});

export default router;
