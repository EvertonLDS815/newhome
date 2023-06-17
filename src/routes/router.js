const {Router} = require("express");
const router = Router();


const {getAll, create, update} = require("../controllers/page");


router.get("/", getAll);
router.post("/", create);
router.patch("/:usernumber", update);


module.exports = router;