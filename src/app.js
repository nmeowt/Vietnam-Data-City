import express from "express";
import compression from "compression";  // compresses requests
import bodyParser from "body-parser";

const app = express();
// Controllers (route handlers)
import * as insertController from "./controllers/insert";

// Express configuration
app.set("port", process.env.PORT || 3000);
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/**
 * Primary app routes.
 */
app.get("/", function (req, res) {
  res.status(200).send({
    status: 200,
    message: 'Hello',
  });
})
app.get("/insert", insertController.insertData);
app.get("/insert-quan-huyen", insertController.insertQuanHuyen);

export default app;
