import express from "express";
import registerRequest from "../controllers/registerRequest.js";


const { Router } = express

const registerRouter = Router()

registerRouter.post("/", registerRequest)

export default registerRouter