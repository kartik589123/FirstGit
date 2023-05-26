const express = require("express");
const router = express.Router();

const candycontroller = require("../controllers/candy-controller");

router.get("/", candycontroller.getCandy);

router.get("/not-found", (req, res) => {
  console.log("aaa111");
  res.send(
    `<h1>Candy Box is empty.Kindly visit ${"http://localhost:4000/"} to buy other candies"`
  );
});

router.post("/", candycontroller.postCandy);

router.patch("/candies/:id", candycontroller.updateCandy);

router.delete("/candies/:id", candycontroller.deleteCandy);

module.exports = router;
