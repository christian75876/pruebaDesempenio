import {
    AutoIncrement,
    Column,
    DataType,
    PrimaryKey,
    Table,
    Model,
    HasMany,
} from "sequelize-typescript";
import { ProductCart } from "./productCart.model";

@Table({
    tableName: "products",
    timestamps: false,
})
export class Product extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column(DataType.INTEGER)
    id!: number;

    @Column(DataType.STRING)
    name!: string;

    @Column(DataType.DECIMAL)
    price!: string;

    @Column(DataType.STRING)
    description!: string;

    @Column(DataType.DECIMAL)
    stock!: number;

    @HasMany(()=> ProductCart)
    productCartsId!: ProductCart[]
    
}