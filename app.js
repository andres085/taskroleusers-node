require("dotenv").config();

const express = require("express");
const bodyParser = require('body-parser');
const errorMiddleware = require('./middlewares/errors');
const apiRouter = require('./routes');

const app = express();

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', apiRouter);
app.use(errorMiddleware);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}.`);
});