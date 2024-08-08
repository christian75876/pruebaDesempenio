import { injectable } from "tsyringe";
import IproductCart from "../interface/productCart.interface";
import { ProductCart } from "../model";



@injectable()
export class ProductCartRepository {
    async createProductCart({quantity, productId}: IproductCart): Promise<ProductCart>{
        return await ProductCart.create({quantity, productId})
    }
}