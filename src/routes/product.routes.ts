import { Router } from "express";
import { productController } from "../controllers/product.controller";
import { authorizationMiddleware } from "../middlewares";

const productRoutes = Router();

productRoutes.get("/", productController.getAll);
productRoutes.get("/:id", productController.getById);
productRoutes.post("/",authorizationMiddleware('create','users'), productController.create);
productRoutes.delete("/:id", authorizationMiddleware('delete', 'users'), productController.delete);
productRoutes.put("/:id", authorizationMiddleware('update', 'users') ,productController.update);


export default productRoutes;