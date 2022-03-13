import express from "express";
import cors from "cors"
import loginRouter from "./routers/loginRouter.js";
import registerRouter from "./routers/registerRouter.js";

const PORT = process.env.PORT || 3000

const app = express()
app.use(express.json())
app.use(cors());
app.use(express.urlencoded({extended: false}))

app.use("/login", loginRouter)
app.use("/register", registerRouter)

app.get("/", (req, res) => {
    res.json({
        message: "Server is up and running"
    })
})

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})