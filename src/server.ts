import "reflect-metadata";
import  express  from "express";
import  router  from "./index";


import "./database";

const app = express();

app.use(express.json());

app.use(router);

app.listen(3000,() => console.log("Server is running! port 3000. Acesse <http://localhost:3000>"));