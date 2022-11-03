// const { default: Web3 } = require("web3");

// const http = require('http')
// var acc = "null";
// var cors = require('cors');
// // app.use(cors());
// console.log(window.ethereum)
// const server = http.createServer((req, res) => {

//     (async () => {
//         if (window.ethereum) {
//             window.ethereum.send('eth_requestAccounts');
//             window.web3 = new Web3(window.ethereum);

//             var accounts = web3.eth.getAccounts();
//             acc = accounts[0];
//             console.log(acc);
//         }
//         else {
//             console.log("else")
//             // res.write(acc)
//         }
//     })();
//     res.write(acc);
//     res.end();
// });
// server.listen(8080);
// var Web3 = require('web3');

// if (typeof window !== 'undefined' && typeof window.Web3 === 'undefined') {
//     window.Web3 = Web3;
// }

// web3 = new Web3(window.currentProvider);
// window.ethereum.enable().catch((error) => {
//     // User denied account access
//     console.log(error);
// });
// console.log(web3);
// if (typeof web3 !== 'undefined') {
//     web3 = new Web3(web3.currentProvider);
//     console.log(web3.currentProvider);
// } else {
//     // set the provider you want from Web3.providers
//     web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:8545"));
// }
// const Web3 = Web3

// var Web3=require('web3')
// var Web3 = require('./lib/web3');

document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('#te').addEventListener('click', () => getRegisterData());
    // document.querySelector('#apply_l').addEventListener('click', () => apply_loan());
    // document.querySelector('#aa').addEventListener('click', () => apply_loan());

    document.querySelector('#register').addEventListener('click', () => getRegisterData());
    document.querySelector('#add_user').addEventListener('click', () => add_user());
    document.querySelector('#connectt_user').addEventListener('click', () => connectt());
    document.querySelector('#get_borower').addEventListener('click', () => get_borower());
    document.querySelector('#get_lender').addEventListener('click', () => get_lender());
});

var web3 = new Web3(window.ethereum);
// var Contract = require('web3-eth-contract');
var acc = null;
// var key 0xcC0D6FEaC2dbb9bFa7F5dc438F0CE089757A1e0c

var contract_addr = "0x00FE0b15775bCa92f7414D7aD9a1A0426b3C347F"


const connectt = async () => {
    console.log("connectt")
    if (window.ethereum) {
        await window.ethereum.send('eth_requestAccounts');
        window.web3 = new Web3(window.ethereum);

        var accounts = await web3.eth.getAccounts();
        acc = accounts[0];
        // console.log(acc);
        (async () => {
            // 0x6F61bd9CEb8A8291b20dC90f11cE7D37d77fDE92
            // 0x18fc00dDD817620c0Cb02516Fd73E8658B659e13
            call_contract(contract_addr);
        })();

    }
    else {
        // console.log("else")
        // res.write(acc)
    }
    get_borower()
};





var abi = JSON.parse('[{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"borower_list","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"get_borrower","outputs":[{"internalType":"string","name":"","type":"string"},{"internalType":"string","name":"","type":"string"},{"internalType":"string","name":"","type":"string"},{"internalType":"string","name":"","type":"string"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"get_borrower_list","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"get_lender","outputs":[{"internalType":"string","name":"","type":"string"},{"internalType":"string","name":"","type":"string"},{"internalType":"string","name":"","type":"string"},{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"get_lender_list","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"l_l","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"lender_list","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"acc_address","type":"address"},{"internalType":"uint256","name":"l_amount","type":"uint256"},{"internalType":"string","name":"purpose","type":"string"}],"name":"reg_loan","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address payable","name":"to","type":"address"},{"internalType":"uint256","name":"paisaa","type":"uint256"}],"name":"sendmoney","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"email","type":"string"},{"internalType":"uint256","name":"pos","type":"uint256"},{"internalType":"string","name":"aadhar","type":"string"},{"internalType":"string","name":"pan","type":"string"},{"internalType":"uint256","name":"score","type":"uint256"},{"internalType":"uint256","name":"phone","type":"uint256"},{"internalType":"string","name":"gender","type":"string"},{"internalType":"uint256","name":"a_income","type":"uint256"},{"internalType":"uint256","name":"no_of_depeden","type":"uint256"}],"name":"user","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"nonpayable","type":"function"}]');





// var abi = JSON.parse('[{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"borower_list","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"get_borrower","outputs":[{"internalType":"string","name":"","type":"string"},{"internalType":"string","name":"","type":"string"},{"internalType":"string","name":"","type":"string"},{"internalType":"string","name":"","type":"string"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"get_borrower_list","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"get_lender","outputs":[{"internalType":"string","name":"","type":"string"},{"internalType":"string","name":"","type":"string"},{"internalType":"string","name":"","type":"string"},{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"get_lender_list","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"lender_list","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address payable","name":"to","type":"address"},{"internalType":"uint256","name":"paisaa","type":"uint256"}],"name":"sendmoney","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"email","type":"string"},{"internalType":"uint256","name":"pos","type":"uint256"},{"internalType":"string","name":"aadhar","type":"string"},{"internalType":"string","name":"pan","type":"string"},{"internalType":"uint256","name":"score","type":"uint256"}],"name":"user","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"nonpayable","type":"function"}]');
var bytecode = "60806040526002805564174876e800600755600160085534801561002257600080fd5b50611995806100326000396000f3fe6080604052600436106100865760003560e01c80636108370b116100595780636108370b14610153578063b1f07cfd14610190578063cf3a5a1c146101cd578063d03848711461020d578063d08e72791461024a57610086565b80630b7ea49e1461008b57806312065fe0146100bb5780633f8ee26b146100e75780634e94b75d14610112575b600080fd5b6100a560048036038101906100a09190611027565b610275565b6040516100b29190611076565b60405180910390f35b3480156100c757600080fd5b506100d06102df565b6040516100de929190611091565b60405180910390f35b3480156100f357600080fd5b506100fc6102ee565b604051610109919061118a565b60405180910390f35b34801561011e57600080fd5b50610139600480360381019061013491906111d8565b61037c565b60405161014a959493929190611295565b60405180910390f35b34801561015f57600080fd5b5061017a60048036038101906101759190611439565b610712565b6040516101879190611536565b60405180910390f35b34801561019c57600080fd5b506101b760048036038101906101b29190611558565b610a49565b6040516101c49190611594565b60405180910390f35b3480156101d957600080fd5b506101f460048036038101906101ef91906111d8565b610a88565b60405161020494939291906115af565b60405180910390f35b34801561021957600080fd5b50610234600480360381019061022f9190611558565b610dd5565b6040516102419190611594565b60405180910390f35b34801561025657600080fd5b5061025f610e14565b60405161026c919061118a565b60405180910390f35b600060025482610285919061163f565b6008819055508273ffffffffffffffffffffffffffffffffffffffff166108fc6008549081150290604051600060405180830381858888f193505050501580156102d3573d6000803e3d6000fd5b50600854905092915050565b60008060085442915091509091565b6060600380548060200260200160405190810160405280929190818152602001828054801561037257602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019060010190808311610328575b5050505050905090565b6060806060806000600560008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600101600560008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600401600560008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600501600560008a73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600201600560008b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600001548480546104db906116b0565b80601f0160208091040260200160405190810160405280929190818152602001828054610507906116b0565b80156105545780601f1061052957610100808354040283529160200191610554565b820191906000526020600020905b81548152906001019060200180831161053757829003601f168201915b50505050509450838054610567906116b0565b80601f0160208091040260200160405190810160405280929190818152602001828054610593906116b0565b80156105e05780601f106105b5576101008083540402835291602001916105e0565b820191906000526020600020905b8154815290600101906020018083116105c357829003601f168201915b505050505093508280546105f3906116b0565b80601f016020809104026020016040519081016040528092919081815260200182805461061f906116b0565b801561066c5780601f106106415761010080835404028352916020019161066c565b820191906000526020600020905b81548152906001019060200180831161064f57829003601f168201915b5050505050925081805461067f906116b0565b80601f01602080910402602001604051908101604052809291908181526020018280546106ab906116b0565b80156106f85780601f106106cd576101008083540402835291602001916106f8565b820191906000526020600020905b8154815290600101906020018083116106db57829003601f168201915b505050505091509450945094509450945091939590929450565b606060003390506000860361088657610729610ea2565b888160200181905250858160800181905250878160400181905250848160a001819052508381600001818152505080600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000820151816000015560208201518160010190816107b6919061188d565b5060408201518160020190816107cc919061188d565b5060608201518160030190805190602001906107e9929190610ed8565b5060808201518160040190816107ff919061188d565b5060a0820151816005019081610815919061188d565b509050506003829080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508892505050610a3f565b60018603610a3a5787600660008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000190816108dd919061188d565b5084600660008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600101908161092d919061188d565b5083600660008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600301908161097d919061188d565b5086600660008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060040190816109cd919061188d565b506004819080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555087915050610a3f565b600080fd5b9695505050505050565b60038181548110610a5957600080fd5b906000526020600020016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b606080606080600660008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600001600660008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600401600660008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600301600660008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600101838054610ba2906116b0565b80601f0160208091040260200160405190810160405280929190818152602001828054610bce906116b0565b8015610c1b5780601f10610bf057610100808354040283529160200191610c1b565b820191906000526020600020905b815481529060010190602001808311610bfe57829003601f168201915b50505050509350828054610c2e906116b0565b80601f0160208091040260200160405190810160405280929190818152602001828054610c5a906116b0565b8015610ca75780601f10610c7c57610100808354040283529160200191610ca7565b820191906000526020600020905b815481529060010190602001808311610c8a57829003601f168201915b50505050509250818054610cba906116b0565b80601f0160208091040260200160405190810160405280929190818152602001828054610ce6906116b0565b8015610d335780601f10610d0857610100808354040283529160200191610d33565b820191906000526020600020905b815481529060010190602001808311610d1657829003601f168201915b50505050509150808054610d46906116b0565b80601f0160208091040260200160405190810160405280929190818152602001828054610d72906116b0565b8015610dbf5780601f10610d9457610100808354040283529160200191610dbf565b820191906000526020600020905b815481529060010190602001808311610da257829003601f168201915b5050505050905093509350935093509193509193565b60048181548110610de557600080fd5b906000526020600020016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60606004805480602002602001604051908101604052809291908181526020018280548015610e9857602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019060010190808311610e4e575b5050505050905090565b6040518060c001604052806000815260200160608152602001606081526020016060815260200160608152602001606081525090565b828054828255906000526020600020908101928215610f51579160200282015b82811115610f505782518260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555091602001919060010190610ef8565b5b509050610f5e9190610f62565b5090565b5b80821115610f7b576000816000905550600101610f63565b5090565b6000604051905090565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610fbe82610f93565b9050919050565b610fce81610fb3565b8114610fd957600080fd5b50565b600081359050610feb81610fc5565b92915050565b6000819050919050565b61100481610ff1565b811461100f57600080fd5b50565b60008135905061102181610ffb565b92915050565b6000806040838503121561103e5761103d610f89565b5b600061104c85828601610fdc565b925050602061105d85828601611012565b9150509250929050565b61107081610ff1565b82525050565b600060208201905061108b6000830184611067565b92915050565b60006040820190506110a66000830185611067565b6110b36020830184611067565b9392505050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b60006110f182610f93565b9050919050565b611101816110e6565b82525050565b600061111383836110f8565b60208301905092915050565b6000602082019050919050565b6000611137826110ba565b61114181856110c5565b935061114c836110d6565b8060005b8381101561117d5781516111648882611107565b975061116f8361111f565b925050600181019050611150565b5085935050505092915050565b600060208201905081810360008301526111a4818461112c565b905092915050565b6111b5816110e6565b81146111c057600080fd5b50565b6000813590506111d2816111ac565b92915050565b6000602082840312156111ee576111ed610f89565b5b60006111fc848285016111c3565b91505092915050565b600081519050919050565b600082825260208201905092915050565b60005b8381101561123f578082015181840152602081019050611224565b60008484015250505050565b6000601f19601f8301169050919050565b600061126782611205565b6112718185611210565b9350611281818560208601611221565b61128a8161124b565b840191505092915050565b600060a08201905081810360008301526112af818861125c565b905081810360208301526112c3818761125c565b905081810360408301526112d7818661125c565b905081810360608301526112eb818561125c565b90506112fa6080830184611067565b9695505050505050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6113468261124b565b810181811067ffffffffffffffff821117156113655761136461130e565b5b80604052505050565b6000611378610f7f565b9050611384828261133d565b919050565b600067ffffffffffffffff8211156113a4576113a361130e565b5b6113ad8261124b565b9050602081019050919050565b82818337600083830152505050565b60006113dc6113d784611389565b61136e565b9050828152602081018484840111156113f8576113f7611309565b5b6114038482856113ba565b509392505050565b600082601f8301126114205761141f611304565b5b81356114308482602086016113c9565b91505092915050565b60008060008060008060c0878903121561145657611455610f89565b5b600087013567ffffffffffffffff81111561147457611473610f8e565b5b61148089828a0161140b565b965050602087013567ffffffffffffffff8111156114a1576114a0610f8e565b5b6114ad89828a0161140b565b95505060406114be89828a01611012565b945050606087013567ffffffffffffffff8111156114df576114de610f8e565b5b6114eb89828a0161140b565b935050608087013567ffffffffffffffff81111561150c5761150b610f8e565b5b61151889828a0161140b565b92505060a061152989828a01611012565b9150509295509295509295565b60006020820190508181036000830152611550818461125c565b905092915050565b60006020828403121561156e5761156d610f89565b5b600061157c84828501611012565b91505092915050565b61158e816110e6565b82525050565b60006020820190506115a96000830184611585565b92915050565b600060808201905081810360008301526115c9818761125c565b905081810360208301526115dd818661125c565b905081810360408301526115f1818561125c565b90508181036060830152611605818461125c565b905095945050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061164a82610ff1565b915061165583610ff1565b925082820261166381610ff1565b9150828204841483151761167a57611679611610565b5b5092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806116c857607f821691505b6020821081036116db576116da611681565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b6000600883026117437fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82611706565b61174d8683611706565b95508019841693508086168417925050509392505050565b6000819050919050565b600061178a61178561178084610ff1565b611765565b610ff1565b9050919050565b6000819050919050565b6117a48361176f565b6117b86117b082611791565b848454611713565b825550505050565b600090565b6117cd6117c0565b6117d881848461179b565b505050565b5b818110156117fc576117f16000826117c5565b6001810190506117de565b5050565b601f82111561184157611812816116e1565b61181b846116f6565b8101602085101561182a578190505b61183e611836856116f6565b8301826117dd565b50505b505050565b600082821c905092915050565b600061186460001984600802611846565b1980831691505092915050565b600061187d8383611853565b9150826002028217905092915050565b61189682611205565b67ffffffffffffffff8111156118af576118ae61130e565b5b6118b982546116b0565b6118c4828285611800565b600060209050601f8311600181146118f757600084156118e5578287015190505b6118ef8582611871565b865550611957565b601f198416611905866116e1565b60005b8281101561192d57848901518255600182019150602085019450602081019050611908565b8683101561194a5784890151611946601f891682611853565b8355505b6001600288020188555050505b50505050505056fea264697066735822122073b3c84d1291753a99db4db47b4d6657cb266350c140cad556545751328555a264736f6c63430008110033"

const deploy = async (abi, bytecode) => {
    console.log("starting deployyyyy");
    var deploycontract = new web3.eth.Contract(abi).deploy({
        data: bytecode,
        arguments: []
    });
    var estimatedGas = await deploycontract.estimateGas();

    var deployedcontract = await deploycontract.send({
        from: acc,
        gas: estimatedGas
    })
    console.log("end")
    console.log("contract addr : " + deployedcontract.options.address);
    contract_addr = deployedcontract.options.address;
    console.log("contract addr : " + contract_addr);
    return deployedcontract.options.address;
}
(async () => {
    // await deploy(abi, bytecode);
    // call_contract(contract_addr);
    // console.log("deployeddd")
})();


var AgentContract;

function call_contract(contract_addrr) {
    AgentContract = new web3.eth.Contract(abi, contract_addrr);
    // contractInstance = AgentContract.at(contract_addrr);
    // web3.eth.defaultAccount = web3.currentProvider.selectedAddress;
    // console.log("Web3 Connected:" + window.web3.eth.defaultAccount);

    // contract_addr = contractInstance
    // console.log(contract_addr);
    // console.log("provider  : " + web3.currentProvider)
    // console.log("aaabc : " + AgentContract.methods.getBalance());

    TODO://ask for payment metamask ka

    // acc = web3.eth.selectedAddress;
    // console.log("aaaaa " + acc);
    // acc = acc.toLocaleLowerCase();
    AgentContract.methods.getBalance().call(acc, { gas: 1000000 }, function (error, results) {
        if (!error) {
            console.log(results);
        }
    })
    // console.log("hmm : " + AgentContract.methods.sendmoney(1121) + "  :: " + acc)
    // console.log(AgentContract.methods.sendmoney(110).call({ from: '0xBea3DbCC78b63Be254d9877CA75092C5a26c0097' }, function (error, results) {
    //     console.log("ress hehe : " + results);
    // }));
    // AgentContract.methods.sendmoney(110).send({ from: acc }).on("confirmation", function (cnfno, receipt) {
    //     console.log("cnf : " + cnfno); console.log("receipt : " + receipt);
    // }).on('receipt', function (receipt) {
    //     // receipt example
    //     // console.log(receipt);

    // })
    return web3.currentProvider.selectedAddress;
}


function get_borower() {
    console.log("borower")
    call_contract(contract_addr);
    console.log("agent : " + AgentContract);
    console.log("acc : " + acc);
    // AgentContract.methods.get_borrower_list().call(function (error, results) {
    //     if (!error) {
    //         console.log(results);
    //         var count = 1;
    //         results.forEach(result => {
    //             get_bb(result)
    //             const b_List = document.createElement('tr');
    //             b_List.innerHTML = `
    //                     <th scope="row">${count}</th>
    //                     <td>${result}</td>
    //                     <td>Otto</td>
    //             `;

    //             document.querySelector('#borrowerLists').append(b_List);
    //             count = count + 1;
    //         })
    //     }
    //     else {
    //         console.log(results); console.log(error)
    //     }
    // });
    AgentContract.methods.get_borrower_list().call(acc, { gas: 1000000 }, function (error, results) {
        if (!error) {
            console.log("ew ress : " + results);

            results.forEach(result => {
                console.log(result);
                get_bb(result)

            })
        }
        else {
            // console.log("else res :" + results);
            console.log(error)
        }
    })
}

function get_lender() {
    console.log("lender")
    console.log(AgentContract);
    AgentContract.methods.get_lender_list().call(acc, { gas: 1000000 }, function (error, results) {
        if (!error) {
            console.log(results);
        }
    })
}


function add_user(namee, email, pos, aadhar, pan, score, phone, gender, a_incom, dependents) {
    console.log("add user : " + namee + " " + email + " " + pos + " " + aadhar + " " + pan + " " + score + " " + phone + " " + gender + " " + a_incom + " " + dependents)
    console.log(AgentContract);
    // AgentContract.methods.user(namee, email, parseInt(pos), aadhar, pan, score).send({ from: acc }).on("confirmation", function (cnfno, receipt) {
    //     console.log("cnf : " + cnfno); console.log("receipt : " + receipt);
    // }).on('receipt', function (receipt) {
    //     // receipt example
    //     console.log(receipt);
    // })

    AgentContract.methods.user(namee, email, parseInt(pos), aadhar, pan, 11111, phone, gender, a_incom, dependents).send({ from: acc }).on("confirmation", function (cnfno, receipt) {
        console.log("cnf : " + cnfno); console.log("receipt : " + receipt);
    }).on('receipt', function (receipt) {
        // receipt example
        console.log(receipt);
    })
}


function get_bb(id) {

    console.log("borower name")
    console.log(id)
    // console.log(AgentContract);
    AgentContract.methods.get_borrower(id).call(acc, { gas: 1000000 }, function (error, results) {
        if (!error) {
            console.log("resssssssssssssssssss : " + results[0] + " " + results[1] + " " + results[2] + " " + results[3] + " " + results[4]);
            var count = 1;
            const b_List = document.createElement('tr');
            b_List.innerHTML = `
                        <th scope="row">${count}</th>
                        <td>${results[0]}</td>
                        <td>${results[1]}</td>
                `;

            document.querySelector('#borrowerLists').append(b_List);
            count = count + 1;
        }
    })
}


function getRegisterData() {
    console.log("hmmm");
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var emailAdd = document.getElementById('emailAdd').value;
    var aadharNo = document.getElementById('aadharNo').value;
    var pan = document.getElementById('pan').value;
    var phone = document.getElementById('phone').value;
    var gender = document.getElementById('gender').value;
    var dependents = document.getElementById('dependents').value;
    var a_incom = document.getElementById('a_income').value;


    var user_type = JSON.parse(document.getElementById('usertype').textContent);
    var pos = 0;
    // document.getElementById('firstName').value = "";
    // document.getElementById('lastName').value = "";
    // document.getElementById('emailAdd').value = "";
    // document.getElementById('aadharNo').value = "";
    // document.getElementById('passwordNo_1').value = "";
    // document.getElementById('passwordNo_2').value = "";

    console.log("roott: " + user_type);
    if (user_type == "borrower") {
        pos = 0;
        console.log("POS:" + pos);
    }
    else { pos = 1; }
    console.log(firstName, lastName, emailAdd, pos, aadharNo, pan, 1121, phone, gender, a_incom, dependents);
    add_user(firstName + " " + lastName, emailAdd, pos, aadharNo, pan, 1211, phone, gender, a_incom, dependents);
}


function apply_loan() {
    console.log("loan");
}

// TODO:infura/quicknode