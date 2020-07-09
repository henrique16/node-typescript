import express, { Express } from "express"
import dotenv from "dotenv"
import getThreads from "./core/main/getThreads"
import deleteSavedMedia from "./core/main/deleteSavedMedia"

dotenv.config()
const app: Express = express()
const port = 3003

app.get("/getThreads", (req, res, next) => {
    const threads: number = getThreads()
    res.status(200).send({ threads: threads })
})

app.delete("/deleteSavedMedia", (req, res, next) => {
    const path: string = process.env.MEDIA_PATH ? process.env.MEDIA_PATH : ""
    deleteSavedMedia(path)
        .then(() => res.status(200).send({ msg: "successfully deleted" }))
        .catch(error => res.status(500).send({ error: error }))
})

app.listen(port, () => console.log(port))