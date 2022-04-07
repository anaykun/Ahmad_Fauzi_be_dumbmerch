const express = require("express");

const router = express.Router();

// const { getProducts } = require("../controllers/product");

// Import CRUD Table Users dari controllers
const {
  addUsers,
  getUsers,
  getUser,
  updateUser,
  deleteUser,
} = require("../controllers/user");

// router.get("/products/v1", getProducts);

// router CRUD TABLE Users
router.post("/user", addUsers);
router.get("/users", getUsers);
router.get("/user/:id", getUser);
router.patch("/user/:id", updateUser);
router.delete("/user/:id", deleteUser);

module.exports = router;
