import { AutoIncrement, Column, DataType, HasMany, Model, PrimaryKey, Table } from "sequelize-typescript";
import { User } from "./user.model";

@Table({
    tableName: "roles",
    timestamps: false
})

export class Role extends Model {

    @PrimaryKey
    @AutoIncrement
    @Column(
        DataType.INTEGER
    ) id!: number

    @Column({
        type: DataType.STRING(50),
        allowNull: false,
    }) name!: string;

    @HasMany(()=> User)
    usersId!: User[]
}