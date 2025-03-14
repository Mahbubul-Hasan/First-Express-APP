import express from "express";
import publicRoute from "./public.route.js";
import authRoute from "./auth.route.js";
import productRouter from "./products.route.js";
import cartRouter from "./cart.route.js";

const router = express.Router();
const routesObj = [
    {
        path: "/auth",
        route: authRoute,
    },
    {
        path: "/",
        route: publicRoute,
    },
    {
        path: "/products",
        route: productRouter,
    },
    {
        path: "/carts",
        route: cartRouter,
    },
];
routesObj.forEach((item) => {
    router.use(item.path, item.route);
});
export default router;
