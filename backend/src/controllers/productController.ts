import { Request, Response } from "express";
import { products } from "../data/products";

export const getAllProducts = (req: Request, res: Response) => {
  res.json(products);
};