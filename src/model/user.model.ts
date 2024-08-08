import {
  Table,
  Model,
  PrimaryKey,
  AutoIncrement,
  DataType,
  Column,
  ForeignKey,
  BelongsTo,
  HasOne,
  HasMany,
} from "sequelize-typescript";
import { Role } from "./role.model";
import { Cart } from "./cart.model";
import { Order } from "./order.model";

@Table({
  tableName: "users",
  timestamps: true,
})
export class User extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  id!: number;

  @Column({
    type: DataType.STRING(200),
    allowNull: false,
    unique: true,
  })
  email!: string;

  @Column({
    type: DataType.STRING(200),
    allowNull: false,
  }) password!: string;

  @ForeignKey(() => Role)
  @Column({
      type: DataType.INTEGER,
      allowNull: false,
    }) role!: number;
    @BelongsTo(()=>Role)
    roles!: Role

    @HasOne(() => Cart)
    cart!: Cart

    @HasMany(() => Order)
    orders!: Order[]
}
