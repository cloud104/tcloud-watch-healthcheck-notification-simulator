require('dotenv').config();
const cors = require("cors");
const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");

const routes = require("./routes");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use(helmet());

app.use(
  morgan(
    ":date[iso] :remote-addr :remote-user :method :url :status :res[content-length] - :response-time ms"
  )
);

app.disable("etag");

app.use("/api/rest", routes);

const port = process.env.PORT || 3000;
app.listen(port, () =>
  console.log(`Server is running on http://localhost:${port}`)
);
