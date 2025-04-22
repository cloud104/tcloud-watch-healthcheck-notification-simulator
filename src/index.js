require('dotenv').config();
const cors = require("cors");
const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const debug = require("debug")("healthcheck_simulator:startup");

const routes = require("./routes");
const validateToken = require("./middleware/auth");
const Utils = require("./utils/Utils");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use(helmet());
//if (Utils.isDevelopmentEnv()) {
app.use(
  morgan(
    ":date[iso] :remote-addr :remote-user :method :url :status :res[content-length] - :response-time ms"
  )
);
//}
app.disable("etag");

app.use("/api/rest", validateToken, routes);

const port = process.env.PORT || 3000;
app.listen(port, () =>
  debug(`${Utils.getLocalAddress()} - Listening on port ${port}...`)
);
