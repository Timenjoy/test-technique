import Cors from "cors";
import Express from "express";
import Router from "./router";

const app = Express();

app.use(Express.json());
app.use("/assets", Express.static("public"));
app.use(Cors());

app.use("/api",Router);

app.get("/", (_, res) => {
  res.send("Hello World");
});

export default app;
