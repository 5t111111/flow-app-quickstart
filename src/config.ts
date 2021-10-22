import { config } from "@onflow/fcl";

config({
  "accessNode.api": process.env.REACT_APP_ACCESS_NODE_API,
  "discovery.wallet": process.env.REACT_APP_DISCOVERY_WALLET,
  "0xProfile": process.env.REACT_APP_PROFILE_ADDRESS,
});
