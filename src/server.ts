import express from 'express';
import { sequelize } from './sequelize';
import { IndexRouter } from './controllers/v0/index.router';
import bodyParser from 'body-parser';
import { V0MODELS } from './controllers/v0/model.index';

require('dotenv').config();

const startServer = async () => {
  // Add both models from common import
  await sequelize.addModels(V0MODELS);
  // Syncs our models to our database using files from /migrations applying from oldest to newst
  await sequelize.sync();

  // Initialize express
  const app = express();

  // Define our port
  const port = process.env.PORT || 8080; // DEFAULT PORT

  app.use(bodyParser.json());

  // CORS should be restricted
  app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:8100");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
  });

  // Import router for our version 0 API
  app.use('/api/v0', IndexRouter);

  // Root URI call
  app.get("/", async (req, res) => {
    res.send("/api/v0");
  })

  // Start the server
  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
    console.log('Press CTRL+C to stop server');
  });
}
startServer();