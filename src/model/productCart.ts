import { AutoIncrement, BelongsTo, Column, DataType, ForeignKey, Model, PrimaryKey, Table } from "sequelize-typescript";
import { Product } from "./product.model";
import { Cart } from "./cart.model";
import { User } from "./user.model";


@Table({
    tableName: "productCart",
    timestamps: false
})
export class ProductCart extends Model{
    @PrimaryKey
    @AutoIncrement
    @Column(
        DataType.INTEGER
    )
    id!: number

    @ForeignKey(() => Cart)
    @Column(DataType.INTEGER)
    cartId!: number;
    @BelongsTo(() => Cart)
    carts!: User;
  
    @ForeignKey(() => Product)
    @Column(DataType.INTEGER)
    productId!: number;
    @BelongsTo(() => Product)
    products!: User;
  
    @Column(DataType.INTEGER)
    quantity!: number;
}