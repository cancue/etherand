import Web3 from "web3"
import config from "config"

const rpc = config.get("RPC_SERVER")
const web3 = new Web3(new Web3.providers.WebsocketProvider(rpc))

export default web3
