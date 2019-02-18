import express from "express"
import path from "path"
import logger from "morgan"
import createError from "http-errors"
import errorHandler from "errorhandler"
import cookieParser from "cookie-parser"
import expressValidator from "express-validator"
import router from "./routes"

export class App {
  constructor() {
    const app = express()
    configureMiddleware(app)
    addRoutes(app)

    return app
  }
}

const configureMiddleware = (app) => {
  app.set("views", path.join(__dirname, "views"))
  app.set("view engine", "ejs")
  app.use(logger("dev"))
  app.use(express.json())
  app.use(express.urlencoded({ extended: true }))
  app.use(cookieParser())
  app.use(express.static(path.join(__dirname, "public")))
  app.use(expressValidator())

  if (process.env.NODE_ENV === "development") this.app.use(errorHandler())
}

const addRoutes = (app) => {
  app.use("/", router)
  app.use((req, res, next) => next(createError(404)))
}
