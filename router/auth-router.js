const express = require("express")
const router = express.Router();
const { home, register, login } = require("../controllers/auth-controller")
const validate = require("../middleware/validate-middleware");
const signupSchema = require("../validate/auth-validator");
// router.get("/", (req, res) => {
//     res.status(200).send("Welcome");
// })

router.route("/").get(home);

router
    .route("/register")
    .post(validate(signupSchema), register);
router.route("/login").post(login);


module.exports = router;