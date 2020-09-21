const express = require("express");
const UserController = require("./controllers/UserController");
const AddressController = require("./controllers/AddressController");

const routes = express.Router();

routes.get("/", (req, res) => {
    return res.json({ hello: "world" });
});

routes.post("/users", UserController.store);
routes.get("/users", UserController.index);

routes.post("/users/:user_id/address", AddressController.store);

module.exports = routes;
