import { createConfig } from "ponder";
import { http } from "viem";

import { FactoryAbi } from "./abis/FactoryAbi";
import { PairAbi } from "./abis/PairAbi";

export default createConfig({
  networks: {
    gnosis: { chainId: 0, transport: http(process.env.PONDER_RPC_URL_0) },
  },
  contracts: {
    Factory: {
      network: "gnosis",
      address: "0x965769C9CeA8A7667246058504dcdcDb1E2975A5",
      abi: FactoryAbi,
      startBlock: 14002647,
    },
    Pair: {
      network: "gnosis",
      abi: PairAbi,
      startBlock: 14002647,
    },
  },
});
