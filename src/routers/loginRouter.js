import express from "express";
import loginRequest from "../controllers/loginRequest.js";


const { Router } = express

const loginRouter = Router()

loginRouter.post("/", loginRequest)

export default loginRouter