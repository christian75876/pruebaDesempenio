import {
  Table,
  Model,
  PrimaryKey,
  AutoIncrement,
  DataType,
  Column,
  ForeignKey,
  BelongsTo,
} from "sequelize-typescript";
import { Role } from "./role.model";

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
}
