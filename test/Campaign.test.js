const assert = require('assert');
const ganche = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganche.provider());

const compiledFactory = require('../ethereum/build/CampaignFactory.json');
const compiledCampaign = require('../ethereum/build/Campaign.json');

let accounts;
let factory;
let campaignAddress;
let campaign;

beforeEach (async () => {
    accounts = await web3.eth.getAccounts();

    // deploy contract
    factory = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
    .deploy({ data: compiledFactory.bytecode})
    .send({ from: accounts[0], gas: '1000000'});

    await factory.methods.createCampaign('100').send({
        from: accounts[0],
        gas: '1000000'
    });

    // assign dirst element to campaign address using ES6 syntax
    [campaignAddress] = await factory.methods.getDeployedCampaigns().call(); 
    
    // get access to already deployed contract
    campaign = await new web3.eth.Contract(
        JSON.parse(compiledCampaign.interface),
        campaignAddress
    );

});