import express from "express";
import publicRoute from "./public.route.js";
import authRoute from "./auth.route.js";

const router = express.Router();
const routesObj = [
    {
        path: "/",
        route: authRoute,
    },
    {
        path: "/",
        route: publicRoute,
    },
];
routesObj.forEach((item) => {
    router.use(item.path, item.route);
});
export default router;
