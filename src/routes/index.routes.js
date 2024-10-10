import { Router } from "express";

import rapperRoutes from "./rapper.routes.js";

const routes = Router();

routes.get("/", (req, res) => {
    return res.status(200).send({ message: "Só os devs!"})
});

routes.use("/suspeitos", rapperRoutes);

export default routes;