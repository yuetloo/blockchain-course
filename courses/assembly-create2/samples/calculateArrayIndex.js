const ethers = require('ethers');
const utils = ethers.utils;

let max = ethers.constants.MaxUint256;
let first = utils.keccak256(utils.hexZeroPad(0x1, 32));
const index = max.sub(first).add(1);
console.log('index', index.toHexString());
