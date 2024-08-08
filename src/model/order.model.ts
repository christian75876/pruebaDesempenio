import {
  AutoIncrement,
  Column,
  DataType,
  PrimaryKey,
  Table,
  Model,
  ForeignKey,
  BelongsTo,
} from "sequelize-typescript";


import { Cart } from "./cart.model";
import { User } from "./user.model";
import { ProductCart } from "./productCart.model";

@Table({
  tableName: "orders",
  timestamps: false,
})
export class Order extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  id!: number;

  @ForeignKey(() => User)
  @Column(DataType.INTEGER)
  userId!: number;
  @BelongsTo(() => User)
  user!: User;

  @ForeignKey(() => ProductCart)
  @Column(DataType.INTEGER)
  productCartId!: number;
  @BelongsTo(() => User)
  productCart!: ProductCart;

  @ForeignKey(() => Cart)
  @Column({
    type: DataType.INTEGER,
  })
  cartId!: number;
  @BelongsTo(()=>Cart)
  cart!: Cart;
}
