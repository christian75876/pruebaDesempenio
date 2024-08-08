import { inject, injectable } from "tsyringe";
import { ProductRepository } from "../repositories/product.repository";
import { Product } from "../model/product.model";
import Iproduct from "../interface/product";

@injectable()
export class ProductService {
    constructor(@inject(ProductRepository) private productRepository: ProductRepository){}
    
    async getAllProducts(): Promise<Product[]> {
        return await this.productRepository.getAll();
    }
    
    async getProductById(id: number): Promise<Product | null> {
        return await this.productRepository.getById(id);
    }
    
    async createProduct({name, price, descripcion, stock}: Iproduct): Promise<Product> {
        return await this.productRepository.create({ name, price, descripcion, stock });
    }
    
    async updateProduct(id: number, product: Iproduct): Promise<void> {
        await this.productRepository.update(id, product);
    }

    async delete(id: number): Promise<void> {
        return await this.productRepository.delete(id)
    };

};