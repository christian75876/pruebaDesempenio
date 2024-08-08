import { Router } from "express";
import { OrderController } from "../controllers/order.controller";
const orderRoutes = Router();

orderRoutes.get("/", OrderController.getAll);
orderRoutes.get("/:id", OrderController.getById);
orderRoutes.post("/", OrderController.create);
orderRoutes.delete("/:id", OrderController.delete);
orderRoutes.put("/:id", OrderController.update);


export default orderRoutes;