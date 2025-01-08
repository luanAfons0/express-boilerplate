import express, { Express } from "express";
import Routes from "./routes/routes";
import helmet from "helmet";
import cors from "cors";

class Server {
  private app: Express;

  constructor() {
    this.app = express();
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
    this.app.listen(3000, () => {
      console.log("Server is up and running on port 3000...");
    });
  }

  public start() {
    this.initMiddlewares();
    this.initRoutes();
    this.listen();
  }
}

export default Server;
