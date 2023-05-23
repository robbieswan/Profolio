import express from "express";
import ViteExpress from "vite-express";

import routes from "./routes/router";

const app = express();
ViteExpress.listen(app, 3000, () => console.log("Listening on http://localhost:3000"));

// app.use(routes)
