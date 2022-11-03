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
    document.querySelector('#apply_l').addEventListener('click', () => apply_loan());
    document.querySelector('#aa').addEventListener('click', () => apply_loan());

    document.querySelector('#register').addEventListener('click', () => getRegisterData());
    document.querySelector('#add_user').addEventListener('click', () => add_user());
    document.querySelector('#connectt_user').addEventListener('click', () => connectt());
    document.querySelector('#get_borower').addEventListener('click', () => get_loan_data());
    document.querySelector('#get_lender').addEventListener('click', () => get_lender());
});

var web3 = new Web3(window.ethereum);
// var Contract = require('web3-eth-contract');
var acc = null;
// var key 0xcC0D6FEaC2dbb9bFa7F5dc438F0CE089757A1e0c  0x00FE0b15775bCa92f7414D7aD9a1A0426b3C347F 0xB59fb2cC2789B805A0341C13751d56c657A938e4 0x21dac808379CceD51ce7D15bFb9DACbF895F1064

var contract_addr = "0xd3aB70830C7499648d6c871b7F572F2bc6EC6D99"


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





var abi = JSON.parse('[{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"borower_list","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"get_borrower","outputs":[{"internalType":"string","name":"","type":"string"},{"internalType":"string","name":"","type":"string"},{"internalType":"string","name":"","type":"string"},{"internalType":"string","name":"","type":"string"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"string","name":"","type":"string"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"get_borrower_list","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"get_lender","outputs":[{"internalType":"string","name":"","type":"string"},{"internalType":"string","name":"","type":"string"},{"internalType":"string","name":"","type":"string"},{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"get_lender_list","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"l_l","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"lender_list","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"loan_data","outputs":[{"internalType":"string","name":"","type":"string"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"string","name":"","type":"string"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"acc_address","type":"address"},{"internalType":"uint256","name":"l_amount","type":"uint256"},{"internalType":"string","name":"purpose","type":"string"}],"name":"reg_loan","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address payable","name":"to","type":"address"},{"internalType":"uint256","name":"paisaa","type":"uint256"}],"name":"sendmoney","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"email","type":"string"},{"internalType":"uint256","name":"pos","type":"uint256"},{"internalType":"string","name":"aadhar","type":"string"},{"internalType":"string","name":"pan","type":"string"},{"internalType":"uint256","name":"score","type":"uint256"},{"internalType":"uint256","name":"phone","type":"uint256"},{"internalType":"string","name":"gender","type":"string"},{"internalType":"uint256","name":"a_income","type":"uint256"},{"internalType":"uint256","name":"no_of_depeden","type":"uint256"}],"name":"user","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"nonpayable","type":"function"}]');





// var abi = JSON.parse('[{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"borower_list","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"get_borrower","outputs":[{"internalType":"string","name":"","type":"string"},{"internalType":"string","name":"","type":"string"},{"internalType":"string","name":"","type":"string"},{"internalType":"string","name":"","type":"string"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"get_borrower_list","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"get_lender","outputs":[{"internalType":"string","name":"","type":"string"},{"internalType":"string","name":"","type":"string"},{"internalType":"string","name":"","type":"string"},{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"get_lender_list","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"lender_list","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address payable","name":"to","type":"address"},{"internalType":"uint256","name":"paisaa","type":"uint256"}],"name":"sendmoney","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"email","type":"string"},{"internalType":"uint256","name":"pos","type":"uint256"},{"internalType":"string","name":"aadhar","type":"string"},{"internalType":"string","name":"pan","type":"string"},{"internalType":"uint256","name":"score","type":"uint256"}],"name":"user","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"nonpayable","type":"function"}]');
var bytecode = "60806040526002805564174876e800600855600160095534801561002257600080fd5b506121b6806100326000396000f3fe6080604052600436106100a75760003560e01c80636bd04e56116100645780636bd04e56146101f65780637cfc342214610221578063b1f07cfd1461024a578063cf3a5a1c14610287578063d0384871146102c7578063d08e727914610304576100a7565b80630b7ea49e146100ac57806312065fe0146100dc57806324422f43146101085780633323eab0146101455780633f8ee26b146101855780634e94b75d146101b0575b600080fd5b6100c660048036038101906100c191906116c8565b61032f565b6040516100d39190611717565b60405180910390f35b3480156100e857600080fd5b506100f1610399565b6040516100ff929190611732565b60405180910390f35b34801561011457600080fd5b5061012f600480360381019061012a91906118a1565b6103a8565b60405161013c9190611a8b565b60405180910390f35b34801561015157600080fd5b5061016c60048036038101906101679190611aeb565b610789565b60405161017c9493929190611b18565b60405180910390f35b34801561019157600080fd5b5061019a6109c2565b6040516101a79190611c29565b60405180910390f35b3480156101bc57600080fd5b506101d760048036038101906101d29190611aeb565b610a50565b6040516101ed9a99989796959493929190611c4b565b60405180910390f35b34801561020257600080fd5b5061020b610f32565b6040516102189190611c29565b60405180910390f35b34801561022d57600080fd5b5061024860048036038101906102439190611d0a565b610fc0565b005b34801561025657600080fd5b50610271600480360381019061026c9190611d79565b6110bf565b60405161027e9190611db5565b60405180910390f35b34801561029357600080fd5b506102ae60048036038101906102a99190611aeb565b6110fe565b6040516102be9493929190611dd0565b60405180910390f35b3480156102d357600080fd5b506102ee60048036038101906102e99190611d79565b61144b565b6040516102fb9190611db5565b60405180910390f35b34801561031057600080fd5b5061031961148a565b6040516103269190611c29565b60405180910390f35b60006002548261033f9190611e60565b6009819055508273ffffffffffffffffffffffffffffffffffffffff166108fc6009549081150290604051600060405180830381858888f1935050505015801561038d573d6000803e3d6000fd5b50600954905092915050565b60008060095442915091509091565b6060600033905060008a036105c2576103bf611518565b8c81602001819052508981608001819052508b8160400181905250888160a0018190525087816000018181525050868160c0018181525050858160e00181905250848161010001818152505083816101200181815250506000816101400181815250506040518060200160405280600081525081610160018190525080600660003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008201518160000155602082015181600101908161049a91906120ae565b5060408201518160020190816104b091906120ae565b5060608201518160030190805190602001906104cd929190611579565b5060808201518160040190816104e391906120ae565b5060a08201518160050190816104f991906120ae565b5060c0820151816006015560e082015181600701908161051991906120ae565b506101008201518160080155610120820151816009015561014082015181600a015561016082015181600b01908161055191906120ae565b509050506004829080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508c9250505061077b565b60018a03610776578b600760008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600001908161061991906120ae565b5088600760008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600101908161066991906120ae565b5087600760008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060030190816106b991906120ae565b508a600760008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600401908161070991906120ae565b506005819080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508b91505061077b565b600080fd5b9a9950505050505050505050565b6060600060606000600660008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600101600660008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060060154600660008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600b01600660008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600a01548380546108a790611ed1565b80601f01602080910402602001604051908101604052809291908181526020018280546108d390611ed1565b80156109205780601f106108f557610100808354040283529160200191610920565b820191906000526020600020905b81548152906001019060200180831161090357829003601f168201915b5050505050935081805461093390611ed1565b80601f016020809104026020016040519081016040528092919081815260200182805461095f90611ed1565b80156109ac5780601f10610981576101008083540402835291602001916109ac565b820191906000526020600020905b81548152906001019060200180831161098f57829003601f168201915b5050505050915093509350935093509193509193565b60606004805480602002602001604051908101604052809291908181526020018280548015610a4657602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190600101908083116109fc575b5050505050905090565b6060806060806000806060600080600080600660008d73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206040518061018001604052908160008201548152602001600182018054610ac690611ed1565b80601f0160208091040260200160405190810160405280929190818152602001828054610af290611ed1565b8015610b3f5780601f10610b1457610100808354040283529160200191610b3f565b820191906000526020600020905b815481529060010190602001808311610b2257829003601f168201915b50505050508152602001600282018054610b5890611ed1565b80601f0160208091040260200160405190810160405280929190818152602001828054610b8490611ed1565b8015610bd15780601f10610ba657610100808354040283529160200191610bd1565b820191906000526020600020905b815481529060010190602001808311610bb457829003601f168201915b5050505050815260200160038201805480602002602001604051908101604052809291908181526020018280548015610c5f57602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019060010190808311610c15575b50505050508152602001600482018054610c7890611ed1565b80601f0160208091040260200160405190810160405280929190818152602001828054610ca490611ed1565b8015610cf15780601f10610cc657610100808354040283529160200191610cf1565b820191906000526020600020905b815481529060010190602001808311610cd457829003601f168201915b50505050508152602001600582018054610d0a90611ed1565b80601f0160208091040260200160405190810160405280929190818152602001828054610d3690611ed1565b8015610d835780601f10610d5857610100808354040283529160200191610d83565b820191906000526020600020905b815481529060010190602001808311610d6657829003601f168201915b5050505050815260200160068201548152602001600782018054610da690611ed1565b80601f0160208091040260200160405190810160405280929190818152602001828054610dd290611ed1565b8015610e1f5780601f10610df457610100808354040283529160200191610e1f565b820191906000526020600020905b815481529060010190602001808311610e0257829003601f168201915b505050505081526020016008820154815260200160098201548152602001600a8201548152602001600b82018054610e5690611ed1565b80601f0160208091040260200160405190810160405280929190818152602001828054610e8290611ed1565b8015610ecf5780601f10610ea457610100808354040283529160200191610ecf565b820191906000526020600020905b815481529060010190602001808311610eb257829003601f168201915b5050505050815250509050806020015181608001518260a00151836040015184600001518561014001518661016001518761010001518861012001518960c001519a509a509a509a509a509a509a509a509a509a50509193959799509193959799565b60606003805480602002602001604051908101604052809291908181526020018280548015610fb657602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019060010190808311610f6c575b5050505050905090565b81600660008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600a018190555080600660008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600b01908161105691906120ae565b506003839080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505050565b600481815481106110cf57600080fd5b906000526020600020016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b606080606080600760008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600001600760008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600401600760008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600301600760008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010183805461121890611ed1565b80601f016020809104026020016040519081016040528092919081815260200182805461124490611ed1565b80156112915780601f1061126657610100808354040283529160200191611291565b820191906000526020600020905b81548152906001019060200180831161127457829003601f168201915b505050505093508280546112a490611ed1565b80601f01602080910402602001604051908101604052809291908181526020018280546112d090611ed1565b801561131d5780601f106112f25761010080835404028352916020019161131d565b820191906000526020600020905b81548152906001019060200180831161130057829003601f168201915b5050505050925081805461133090611ed1565b80601f016020809104026020016040519081016040528092919081815260200182805461135c90611ed1565b80156113a95780601f1061137e576101008083540402835291602001916113a9565b820191906000526020600020905b81548152906001019060200180831161138c57829003601f168201915b505050505091508080546113bc90611ed1565b80601f01602080910402602001604051908101604052809291908181526020018280546113e890611ed1565b80156114355780601f1061140a57610100808354040283529160200191611435565b820191906000526020600020905b81548152906001019060200180831161141857829003601f168201915b5050505050905093509350935093509193509193565b6005818154811061145b57600080fd5b906000526020600020016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6060600580548060200260200160405190810160405280929190818152602001828054801561150e57602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190600101908083116114c4575b5050505050905090565b6040518061018001604052806000815260200160608152602001606081526020016060815260200160608152602001606081526020016000815260200160608152602001600081526020016000815260200160008152602001606081525090565b8280548282559060005260206000209081019282156115f2579160200282015b828111156115f15782518260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555091602001919060010190611599565b5b5090506115ff9190611603565b5090565b5b8082111561161c576000816000905550600101611604565b5090565b6000604051905090565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061165f82611634565b9050919050565b61166f81611654565b811461167a57600080fd5b50565b60008135905061168c81611666565b92915050565b6000819050919050565b6116a581611692565b81146116b057600080fd5b50565b6000813590506116c28161169c565b92915050565b600080604083850312156116df576116de61162a565b5b60006116ed8582860161167d565b92505060206116fe858286016116b3565b9150509250929050565b61171181611692565b82525050565b600060208201905061172c6000830184611708565b92915050565b60006040820190506117476000830185611708565b6117546020830184611708565b9392505050565b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6117ae82611765565b810181811067ffffffffffffffff821117156117cd576117cc611776565b5b80604052505050565b60006117e0611620565b90506117ec82826117a5565b919050565b600067ffffffffffffffff82111561180c5761180b611776565b5b61181582611765565b9050602081019050919050565b82818337600083830152505050565b600061184461183f846117f1565b6117d6565b9050828152602081018484840111156118605761185f611760565b5b61186b848285611822565b509392505050565b600082601f8301126118885761188761175b565b5b8135611898848260208601611831565b91505092915050565b6000806000806000806000806000806101408b8d0312156118c5576118c461162a565b5b60008b013567ffffffffffffffff8111156118e3576118e261162f565b5b6118ef8d828e01611873565b9a505060208b013567ffffffffffffffff8111156119105761190f61162f565b5b61191c8d828e01611873565b995050604061192d8d828e016116b3565b98505060608b013567ffffffffffffffff81111561194e5761194d61162f565b5b61195a8d828e01611873565b97505060808b013567ffffffffffffffff81111561197b5761197a61162f565b5b6119878d828e01611873565b96505060a06119988d828e016116b3565b95505060c06119a98d828e016116b3565b94505060e08b013567ffffffffffffffff8111156119ca576119c961162f565b5b6119d68d828e01611873565b9350506101006119e88d828e016116b3565b9250506101206119fa8d828e016116b3565b9150509295989b9194979a5092959850565b600081519050919050565b600082825260208201905092915050565b60005b83811015611a46578082015181840152602081019050611a2b565b60008484015250505050565b6000611a5d82611a0c565b611a678185611a17565b9350611a77818560208601611a28565b611a8081611765565b840191505092915050565b60006020820190508181036000830152611aa58184611a52565b905092915050565b6000611ab882611634565b9050919050565b611ac881611aad565b8114611ad357600080fd5b50565b600081359050611ae581611abf565b92915050565b600060208284031215611b0157611b0061162a565b5b6000611b0f84828501611ad6565b91505092915050565b60006080820190508181036000830152611b328187611a52565b9050611b416020830186611708565b8181036040830152611b538185611a52565b9050611b626060830184611708565b95945050505050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b611ba081611aad565b82525050565b6000611bb28383611b97565b60208301905092915050565b6000602082019050919050565b6000611bd682611b6b565b611be08185611b76565b9350611beb83611b87565b8060005b83811015611c1c578151611c038882611ba6565b9750611c0e83611bbe565b925050600181019050611bef565b5085935050505092915050565b60006020820190508181036000830152611c438184611bcb565b905092915050565b6000610140820190508181036000830152611c66818d611a52565b90508181036020830152611c7a818c611a52565b90508181036040830152611c8e818b611a52565b90508181036060830152611ca2818a611a52565b9050611cb16080830189611708565b611cbe60a0830188611708565b81810360c0830152611cd08187611a52565b9050611cdf60e0830186611708565b611ced610100830185611708565b611cfb610120830184611708565b9b9a5050505050505050505050565b600080600060608486031215611d2357611d2261162a565b5b6000611d3186828701611ad6565b9350506020611d42868287016116b3565b925050604084013567ffffffffffffffff811115611d6357611d6261162f565b5b611d6f86828701611873565b9150509250925092565b600060208284031215611d8f57611d8e61162a565b5b6000611d9d848285016116b3565b91505092915050565b611daf81611aad565b82525050565b6000602082019050611dca6000830184611da6565b92915050565b60006080820190508181036000830152611dea8187611a52565b90508181036020830152611dfe8186611a52565b90508181036040830152611e128185611a52565b90508181036060830152611e268184611a52565b905095945050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000611e6b82611692565b9150611e7683611692565b9250828202611e8481611692565b91508282048414831517611e9b57611e9a611e31565b5b5092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680611ee957607f821691505b602082108103611efc57611efb611ea2565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302611f647fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82611f27565b611f6e8683611f27565b95508019841693508086168417925050509392505050565b6000819050919050565b6000611fab611fa6611fa184611692565b611f86565b611692565b9050919050565b6000819050919050565b611fc583611f90565b611fd9611fd182611fb2565b848454611f34565b825550505050565b600090565b611fee611fe1565b611ff9818484611fbc565b505050565b5b8181101561201d57612012600082611fe6565b600181019050611fff565b5050565b601f8211156120625761203381611f02565b61203c84611f17565b8101602085101561204b578190505b61205f61205785611f17565b830182611ffe565b50505b505050565b600082821c905092915050565b600061208560001984600802612067565b1980831691505092915050565b600061209e8383612074565b9150826002028217905092915050565b6120b782611a0c565b67ffffffffffffffff8111156120d0576120cf611776565b5b6120da8254611ed1565b6120e5828285612021565b600060209050601f8311600181146121185760008415612106578287015190505b6121108582612092565b865550612178565b601f19841661212686611f02565b60005b8281101561214e57848901518255600182019150602085019450602081019050612129565b8683101561216b5784890151612167601f891682612074565b8355505b6001600288020188555050505b50505050505056fea264697066735822122082a1444bd2ea4a0b33d4b5c3c5b4bd21fcf61766ab1566a2511a1f18146bc53a64736f6c63430008110033"

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
            console.log("borrowerr ress : " + results);
            get_loan_data(acc);

            results.forEach(result => {
                console.log(result);
                get_bb(result);

            });
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

    AgentContract.methods.user(namee, email, parseInt(pos), aadhar, pan, 11111, parseInt(phone), gender, parseInt(a_incom), parseInt(dependents)).send({ from: acc }).on("confirmation", function (cnfno, receipt) {
        console.log("cnf : " + cnfno); console.log("receipt : " + receipt);
    }).on('receipt', function (receipt) {
        // receipt example
        console.log(receipt);
    })
}
// bb.name,
//     bb.aadhar,
//     bb.pan,
//     bb.email,
//     bb.score,
//     bb.loan_amountt,
//     bb.l_purpose,
//     bb.a_income,
//     bb.no_of_dependents,
//     bb.phone

function get_bb(id) {

    console.log("borower name")
    console.log(id)
    // console.log(AgentContract);
    AgentContract.methods.get_borrower(id).call(acc, { gas: 1000000 }, function (error, results) {
        if (!error) {
            // apply_loan(results[0], results[3], results[4]);
            // console.log("re " + results);
            console.log("resssssssssssssssssss : " + results[0] + " " + results[1] + " " + results[2] + " " + results[3] + " " + results[4] + " " + results[5] + " " + results[6] + " " + results[7] + " " + results[8] + " " + results[9] + " " + results[10] + " " + results[11]);

            var count = 1;
            const b_List = document.createElement('tr');
            b_List.innerHTML = `
                        <th scope="row">${count}</th>
                        <td>${results[0]}</td>
                        <td>${results[9]}</td>
                        <td>${results[6]}</td>
                        <td>${results[10]}</td>
                `;

            // document.querySelector('#borrowerLists').append(b_List);
            count = count + 1;

        }
    })
    // get_loan_data(id);
}


function getRegisterData() {
    console.log("hmmm");
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var emailAdd = document.getElementById('emailAdd').value;
    var aadharNo = document.getElementById('aadharNo').value;
    var pan = document.getElementById('pan').value;
    var phone = document.getElementById('phone').value;
    var gender = document.getElementById('radio').value;
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


function apply_loan(name, email, phone) {
    console.log("loan", name, email, phone);
    // reg_loan
    var ll_amount = document.getElementById('loan_a').value;
    var ll_purpose = document.getElementById('purposee').value;
    console.log("loan", acc, ll_amount, ll_purpose);
    AgentContract.methods.reg_loan(acc, ll_amount, ll_purpose).send({ from: acc }).on("confirmation", function (cnfno, receipt) {
        console.log("loannn : " + cnfno); console.log("loann receipt : " + receipt);
    }).on('receipt', function (receipt) {
        // receipt example
        console.log(receipt);
    })
    // get_loan_data(acc);
}
// reg_loan
function get_loan_data(addre) {

    console.log("applyyy loannnn")
    console.log(addre)
    // console.log(AgentContract);
    AgentContract.methods.get_borrower(addre).call(acc, { gas: 1000000 }, function (error, results) {
        if (!error) {
            // apply_loan(results[0], results[3], results[4]);
            // console.log("re " + results);
            console.log("aaplyyy_L : " + results[0] + " " + results[1] + " " + results[2] + " " + results[3] + " " + results[4] + " " + results[5] + " " + results[6] + " " + results[7] + " " + results[8] + " " + results[9] + " " + results[10] + " " + results[11]);

            document.getElementById("name").innerHTML = results[0];
            document.getElementById("email").innerHTML = results[3];
            document.getElementById("phone").innerHTML = results[8];
            document.getElementById("aadhar").innerHTML = results[1];
            document.getElementById("pan").innerHTML = results[2];
            document.getElementById("a_income").innerHTML = results[7];
            document.getElementById("dependents").innerHTML = results[8];
            // document.getElementById("name").innerHTML = results[0];



            // var count = 1;
            // const b_List = document.createElement('tr');
            // b_List.innerHTML = `
            //             <th scope="row">${count}</th>
            //             <td>${results[0]}</td>
            //             <td>${results[9]}</td>
            //             <td>${results[6]}</td>
            //             <td>${results[10]}</td>
            //     `;

            // document.querySelector('#borrowerLists').append(b_List);
            // count = count + 1;

        }
    })
}

// TODO:infura/quicknode