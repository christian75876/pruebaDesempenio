import dotenv from "dotenv";
import { Sequelize } from "sequelize-typescript";
import { Cart, Entity, Order, Permission, ProductCart, Role, User } from "../../model";
import { Product } from "../../model/product.model";

dotenv.config();

const sequelize: Sequelize = new Sequelize({
  dialect: "mysql",
  host: process.env.DB_HOST,
  port: 12085,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  models: [User, Role, Permission, Entity, Product, Cart, ProductCart, Order],
});

export default sequelize;
