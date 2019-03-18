const fs = require("fs")
const execute = require("./execute.js")

const copyContractAddress = () => {
  const obj = JSON.parse(fs.readFileSync("node_modules/etherand-contract/build/contracts/Etherand.json", "utf8"))
  const contractAddress = obj.networks["5777"].address

  console.log("contract address: " + contractAddress + "\r\n")

  fs.writeFileSync("node_modules/etherand-frontend/contractAddress.example", contractAddress, (err) => { if (err) throw err })
  fs.writeFileSync("node_modules/etherand-backend/contractAddress.example", contractAddress, (err) => { if (err) throw err })
}

copyContractAddress()
execute("npx live-server node_modules/etherand-frontend/dist")
execute("npm explore etherand-backend -- npm run start")
