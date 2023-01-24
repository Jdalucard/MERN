const express = require('express');
const router = express.Router();

const { list, create,remove,videogameById, photo } = require("../controllers/VideogameController");

router.get("/videogame", list);
router.post("/create", create);
router. get('/photo/:videogameId',photo)
router.delete('/:videogameId',remove );
router.param("videogameId", videogameById);

module.exports = router;
