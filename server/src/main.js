import { App } from "./app"
import server from "./server"
import functions from "functions"
import chalk from "chalk"

const app = new App()
server.launch(app)

const address = `${app.get("ip") || "http://localhost"}:${app.get("port")}`
console.log(`
  App is running at ${chalk.yellow.bold(address)} in ${chalk.yellow.bold(app.get("env"))} mode
  Press ${chalk.yellow.bold("CTRL-C")} to stop
`)

functions()
