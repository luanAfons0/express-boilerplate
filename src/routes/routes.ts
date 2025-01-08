import { Router } from "express";

class Routes {
  private router: Router;

  constructor() {
    this.router = Router();
    this.initRoutes();
  }

  public initRoutes() {
    this.router.get("/", (req, res) => {
      res.status(200).json({ message: "Sucesss!!!" });
    });
  }

  public getAllRoutes() {
    return this.router;
  }
}

export default new Routes();
