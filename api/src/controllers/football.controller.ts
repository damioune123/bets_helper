import express from 'express';

//import FootballApiService from '../services/football-api.service';

class FootballController {
  public path = '/football';
  public router = express.Router();

  constructor() {
    this.intializeRoutes();
  }
 
  public intializeRoutes() {
    this.router.get(this.path, this.getTopBets);
  }

  getTopBets = (request: express.Request, response: express.Response) => {
    response.send('ok');
  }
}
 
export default FootballController;