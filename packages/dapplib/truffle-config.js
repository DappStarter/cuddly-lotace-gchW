require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom private boil suggest name renew saddle method gloom civil army gather'; 
let testAccounts = [
"0x18f99f57b59843842cd25313980f2022232c36b49e3440789daf9813c78bee12",
"0xd50622ae675aa9f08465c641c16654ed1e1d263efbd557b555ab796a85afc3d5",
"0xb901b02d0c98b8716dce78d6e271da4f3a795eb7374ba77a08080ec204096c2c",
"0xf6d8efcc1825db61d9bf5d11a53582e7f2910b16b2e9e0bba0f0f7926acd63da",
"0x8a3a9543e7d689dd5e59df0a39d5fcad6b75770733883c0f6620b41aef7c3671",
"0x6b8791baae3b3d7e40d381c5f44766b69416efddcb3d30c114c1c1aad40c7c39",
"0xcf5a6b562a368febbadffe988c013c7a34c5ed265df0251957744642115ce8f3",
"0x934c137645f1484aeedee4f6e5a288cc5477075cdd617692a1de465cdccec377",
"0xa7c112f896c75ed21a0b2ead911a55bf4384a8f5e20f3ec34ad6096b369e6da3",
"0x8f3a60e24ab38f2f03a954c74231147bf3153fec57b178d304a5e5c797fbf84e"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

