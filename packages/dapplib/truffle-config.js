require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea problem occur trophy figure render remind hole grid clog orange that'; 
let testAccounts = [
"0xb14c2a816069762e8e27240b03a94e0901a4fe1567999d95d45fde6a7863269d",
"0xb9edd3f8a91d4b70a6277d92ac8c834163fca7efe93bef8a1c30c8e2565c2fe0",
"0xc6340ecee47368fa7320140114e8008a7e6fc730ea452905b4818a86cc0cb641",
"0xe5f9f44e655838a3e3b9fb85bd22e70b1c0cad6f7eaa1ea86a22b2763dbfb746",
"0x62166f7efb16353cedbf49f84f64b1b462b68eeecd2565e6ed497c09a7c98ecc",
"0xea70afdf69d1e8e261308433376b96f78aa7a53841ad3a7ceb1ec0999354fccb",
"0xa8372755a1af1f878f5a848f4c2d2575b451cf14956be01bf91dfae70c46019d",
"0x7aff1f24521898d40550073d9e86ce036ea588ccb4f053ce4a0c1c0337b0c22c",
"0xe1e1d4699b44c0293a9bd0d92ea70e9d3d651add8c198ef88525db8f76e6d31a",
"0xb3ec80e5aa74777672f61d0c82593a8fee6c9c4ec37f19c6122988375f33d079"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

