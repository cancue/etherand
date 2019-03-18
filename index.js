const fs = require("fs")
const execute = require("./src/execute.js")

const copyPrivateKey = () => {
  fs.copyFileSync("privateKey.example", "node_modules/etherand-contract/privateKey.example", (err) => { if (err) throw err })
  fs.copyFileSync("privateKey.example", "node_modules/etherand-backend/privateKey.example", (err) => { if (err) throw err })
}

console.log("Press 'CTRL-C' to stop\r\n")
copyPrivateKey()
execute("npm explore etherand-contract -- npm run devGanache")
execute("npm explore etherand-contract -- npm run devBuildAndDeploy && node src/runServer.js")
