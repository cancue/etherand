import * as express from "express"
import HomeController from "../controllers/home"

const router = express.Router()

router.get("/", HomeController.getHomePage)

export default router
