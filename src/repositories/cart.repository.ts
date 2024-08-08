import { injectable } from "tsyringe";
import Icart from "../interface/cart.interface";
import { Cart } from "../model";


@injectable() 
export class CartRepository {
    async create({ userId}: Icart): Promise<Cart>{
        return Cart.create({ userId});
    }
}