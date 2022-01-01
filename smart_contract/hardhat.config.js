require('@nomiclabs/hardhat-waffle');


module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/G6byCvceOg6l7giZQYUsOHC2UdKRMDyv',
      accounts: ['3178177ac82cc149d1ddae1415ef034cb7eb51c05629dd50c238d18973678891']
    }
  }
}