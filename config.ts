export default {
  Lottery: {
    mainnet: "0x83873fea7A00F8434Ce698AcF85FFD32765464b6",
    testnet: "0x5790c3534F30437641541a0FA04C992799602998",
  },
  Chainlink: {
    Oracle: {
      // Documentation: https://docs.chain.link/docs/binance-smart-chain-addresses/
      mainnet: "0x747973a5A2a4Ae1D3a8fDF5479f1514F65Db9C31",
      testnet: "0x81faeDDfeBc2F8Ac524327d70Cf913001732224C",
    },
    VRF: {
      // Documentation: https://docs.chain.link/docs/vrf-contracts/
      // https://docs.chain.link/docs/vrf-contracts/v1/
      KeyHash: {
        mainnet: "0xc251acd21ec4fb7f31bb8868288bfdbaeb4fbfec2df3735ddbd4f7dc8d60103c",
        testnet: "0xcaf3c3727e033261d383b315559476f48034c13b18f8cafed4d871abe5049186",
      },
    },
  },
  Ticket: {
    Price: {
      mainnet: 5,
      testnet: 1,
    },
    Precision: {
      mainnet: 2,
      testnet: 2,
    },
  },
  Discount: {
    mainnet: 2000,
    testnet: 2000,
  },
  Rewards: {
    mainnet: [250, 375, 625, 1250, 2500, 5000],
    testnet: [250, 375, 625, 1250, 2500, 5000],
  },
  Treasury: {
    mainnet: 2000,
    testnet: 2000,
  },
};
