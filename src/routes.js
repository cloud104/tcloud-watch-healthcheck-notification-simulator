const express = require("express");
const ReplicationController = require("./controllers/NotificationsController");

const routes = express.Router();
routes.get("/", (_, res) => {
  res.status(200).json({
    message: "Welcome"    
  });
});
routes.post("/notifications/", ReplicationController.postNotification);

module.exports = routes;
