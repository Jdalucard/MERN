const express = require("express");
const router = express.Router();

//arquitectura MVC= Model VIEM Controllers
const {
  list,
  create,
  remove,
  categoryById,
} = require("../controllers/categoryControllers");

router.get("/categories", list);
router.post("/create", create);
router.delete("/:categoryById", remove);
router.param("categoryById", categoryById);

module.exports = router;
