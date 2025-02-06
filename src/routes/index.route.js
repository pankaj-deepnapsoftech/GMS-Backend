import { Router } from "express";
import authRoutes from "./Auth.routes.js";


const routes = Router();

routes.use("/auth" , authRoutes);

export default routes;