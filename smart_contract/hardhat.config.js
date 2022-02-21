require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.0',
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/mEJIAuxHnE2HsvBATUIEBiTLrd-dN5X3',
      accounts: [
        'ea62fa72faf6bc92724bd58b6ebb625cbbb35879aaabbf33d6da25aedd553aa1',
      ],
    },
  },
}