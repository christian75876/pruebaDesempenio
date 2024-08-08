import { Router } from "express";
import authRouter from "./auth.routes";
import userRouter from "./user.routes";
import { authJWT } from "../middlewares";
import productRoutes from "./product.routes";
import orderRoutes from "./order.routes";


const router = Router();

router.use("/login", authRouter);
router.use('/users', authJWT, userRouter)
router.use("/products", authJWT, productRoutes);
router.use("/orders", authJWT, orderRoutes);

export default router;