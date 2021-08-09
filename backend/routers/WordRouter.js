const router = require('express').Router();

const controller = require('../controllers/Controller.js');

router.get("/", controller.listWord);

router.post("/", controller.insertWord);

router.patch("/:id", controller.patchWordById)

router.delete("/:id", controller.deleteWordById);

router.get('/:', controller.getWordById);

router.get("/next", controller.getWordNext);

router.get("/previous", controller.getWordPrevious);

module.exports = router;