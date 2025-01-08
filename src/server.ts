import express, { Express } from "express";
import Routes from "./routes/routes";

class Server {
  private app: Express;

  constructor() {
    this.app = express();
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
    this.initRoutes();
    this.listen();
  }
}

export default Server;
