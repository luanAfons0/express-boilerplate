import express, { Express } from "express";
import Routes from "./routes/routes";
import helmet from "helmet";
import dotenv from "dotenv";
import cors from "cors";

class Server {
  private app: Express;
  private port: Number;

  constructor() {
    this.app = express();
    dotenv.config();
    this.port = Number(process.env.PORT) || 3000;
  }

  private initMiddlewares() {
    this.app.use(cors());
    this.app.use(helmet());
    this.app.use(express.json());
  }

  private initRoutes() {
    this.app.use("/api/v1", Routes.getAllRoutes());
  }

  private listen() {
    this.app.listen(this.port, () => {
      console.log(`Server is up and running on port ${this.port}...`);
    });
  }

  public start() {
    this.initMiddlewares();
    this.initRoutes();
    this.listen();
  }
}

export default Server;
