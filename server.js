require("dotenv").config();
const express = require("express");
const app = express();
const connectDb = require("./utils/db")
const router = require("./router/auth-router");
const contactRoute = require("./router/contact-router");
const errorMiddleware = require("./middleware/error-middleware");
//middleware
app.use(express.json());

//mount

app.use("/api/auth", router);
app.use("/api/form", contactRoute);

app.use(errorMiddleware);
// app.get("/", (req, res) => {
//     res.status(200).send("Welcome");
// })

// app.get("/register", (req, res) => {
//     res.status(200).send("Welcome to register");
// })
const PORT = 5000;
connectDb().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
});
