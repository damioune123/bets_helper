import App from './app';
import FootballController from './controllers/football.controller';
import Config from './services/configuration.service';

const app = new App(
  [
    new FootballController(),
  ],
  Config.server.port,
);
 
app.listen();