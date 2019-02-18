import debug from "debug"
import http from "http"

/**
 * Normalize a port into a string, number, or false.
 */
const normalizePort = (val) => {
  const port = parseInt(val, 10)

  return isNaN(port) ? val : port >= 0 ? port : false
}

export default {
  launch: (app) => {
    const port = normalizePort(process.env.PORT || "3000")
    app.set("port", port)

    const server = http.createServer(app)

    server.listen(port)
    server.on("error", (error) => {
      if (error.syscall !== "listen") {
        throw error
      }

      const bind = typeof port === "string" ?
        "Pipe " + port :
        "Port " + port

      switch (error.code) {
        case "EACCES":
          console.error(bind + " requires elevated privileges")
          process.exit(1)
          break
        case "EADDRINUSE":
          console.error(bind + " is already in use")
          process.exit(1)
          break
        default:
          throw error
      }
    })
    server.on("listening", () => {
      const addr = server.address()
      const bind = typeof addr === "string" ?
        "pipe " + addr :
        "port " + addr.port
      debug("express:server")("Listening on " + bind)
    })

    return server
  }
}
