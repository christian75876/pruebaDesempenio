import { injectable } from "tsyringe";
import { Product } from "../model";
import Iproduct from "../interface/product.interface";

@injectable()
export class ProductRepository {
  async getAll(): Promise<Product[]> {
    return Product.findAll();
  }

  async getById(id: number): Promise<Product | null> {
    return Product.findByPk(id);
  }

  async create({
    name,
    price,
    descripcion,
    stock,
  }: Iproduct): Promise<Product> {
    return Product.create({ name, price, descripcion, stock });
  }

  async update(id: number, product: Iproduct): Promise<void> {
    await Product.update(product, { where: { id } });
  }

  async delete(id: number): Promise<void> {
    await Product.destroy({ where: { id } });
  }
}
