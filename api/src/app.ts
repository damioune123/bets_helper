import express from 'express';
import * as bodyParser from 'body-parser';
import cors from 'cors';
import path from 'path';

class App {
  public app: express.Application;
  public port: number;
 
  constructor(controllers, port) {
    this.app = express();
    this.port = port;

    this.initializeFrontend();
    this.initializeMiddlewares();
    this.initializeControllers(controllers);
  }

  private initializeFrontend() {
    console.log(path.normalize(path.join(__dirname,'../../../gui/build')));
    this.app.use(express.static(path.normalize(path.join(__dirname,'../../../gui/build'))));
  }
 
  private initializeMiddlewares() {
    this.app.use(bodyParser.json());
    this.app.use(cors());
  }

 
  private initializeControllers(controllers) {
    controllers.forEach((controller) => {
      this.app.use('/api', controller.router);
    });
  }
 
  public listen() {
    this.app.listen(this.port, () => {
      console.log(`App listening on the port ${this.port}`);
    });
  }
}
 
export default App;