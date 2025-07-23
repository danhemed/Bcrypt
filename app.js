import express from "express";
import routerUsers from "./routes/router.signup.js"

const app = express();

app.use(express.json());

app.use("/users", routerUsers);

app.listen(process.env.PORT || 3005, () => {
    console.log(`Server run...`);
})