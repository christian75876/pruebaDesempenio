import { AutoIncrement, BelongsTo, Column, DataType, ForeignKey, HasMany, HasOne, Model, PrimaryKey, Table } from "sequelize-typescript";
import { User } from "./user.model";
import { ProductCart } from "./productCart";
import { Order } from "./order.model";


@Table({
    tableName: "carts",
    timestamps: false
})
export class Cart extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column(
        DataType.INTEGER
    ) id!: number;

    @ForeignKey(() => User)
    @Column(
        DataType.INTEGER
    ) userId!: number;
    @BelongsTo(() => User)
    users!: User;

    @HasMany(() => ProductCart)
    products!: ProductCart[]

    @HasOne(() => Order)
    order!: Order
}