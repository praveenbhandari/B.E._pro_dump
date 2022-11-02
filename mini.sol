// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.8.16;

// import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";
contract mini {
    uint256 amt;
    uint256 val;
uint256 intrest=2;
    // constructor() public {}

    struct borower {
        uint score;
        string name;
        string email;
        address[] lenders;
        string aadhar;
        string pan;
    }

    struct lender {
        string name;
        string aadhar;
        address[] borrowerlist;
        string pan;
        string email;
    }

    address[] public borower_list;
    address[] public lender_list;

    mapping(address => borower) borowerInfo;
    mapping(address => lender) lenderInfo;
    // var date=new Date();
    // uint deposit;
    // constructor() public {
    //     amt=0;
    //     val=1000;
    // }
    // mapping(address => uint) borower_addr,lender_addr;
// TODO:ABI bytecode in js
    uint256 PAISA = 10 * 1e10;
    uint256 aa = 1;

    function user(string memory name,string memory email,uint256 pos,string memory aadhar,string memory pan,uint256 score) public returns (string memory) {
        address addr = msg.sender;
        if (pos == 0) {
            borower memory b;
            b.name = name;
            b.aadhar = aadhar;
            b.email = email;
            b.pan=pan;
            b.score=score;
            borowerInfo[msg.sender] = b;
            borower_list.push(addr);
            return name;
        } else if (pos == 1) {
            lenderInfo[addr].name = name;
            lenderInfo[addr].aadhar = aadhar;
            lenderInfo[addr].pan = pan;
            lenderInfo[addr].email = email;
            
            lender_list.push(addr);
            return name;
        } else {
            revert();
        }
    }

    function sendmoney(address payable to,uint256 paisaa) public payable returns (uint256) {
        // amt=amountt
        // amt=amountt;
        // return amountt;
        // 0xab594600376ec9fd91f8e885dadf0ce036862de0 matic/usd
        // require(getConversion(1*1e10) >= 0,"ERROR NO funds"); //1*10**18=100000000000000000 wei / 1 ether (set a min limit of 1 ethr)
        // getConversion(msg.value);
        // getConversion(msg.value)
        aa = paisaa * intrest;
        to.transfer(aa);
        return aa;
    }

    function getBalance() public view returns (uint256, uint256) {
        // var time=now;
        return (aa, block.timestamp);
    }

    function get_borrower(address addr)public view returns (string memory, string memory,string memory,string memory,uint256 ){
        // if(keccak256(patientInfo[addr].name) == keccak256(""))revert();
        return (borowerInfo[addr].name, borowerInfo[addr].aadhar, borowerInfo[addr].pan, borowerInfo[addr].email, borowerInfo[addr].score);
    }

    function get_lender(address addr) view public  returns (string memory, string memory,string memory,string memory) {
        // if(keccak256(doctorInfo[addr].name)==keccak256(""))revert();
        return (lenderInfo[addr].name, lenderInfo[addr].email, lenderInfo[addr].pan, lenderInfo[addr].aadhar);
    }

    function get_borrower_list() public view returns (address[] memory) {
        return borower_list;
    }

    function get_lender_list() public view returns (address[] memory) {
        return lender_list;
    }

    // function getprice()public view returns(uint256){
    //     AggregatorV3Interface interfacee = AggregatorV3Interface(0xAB594600376Ec9fD91F8e885dADF0CE036862dE0);
    //     (,int256 price,,,) = interfacee.latestRoundData();
    //     return uint256(price*1e10);

    // }

    // function getConversion(uint256 amount)public view returns(uint256){
    //     uint256 price=getprice();
    //     uint256 convert_price=(price*amount)/1e18;
    //     return convert_price;

    // }

    // function withdraw(){}

    // function getBalance()public view returns(uint){
    //     return val;
    // }
    // // function getAmt() public view returns(uint){
    //     return amt;
    // }
    // function send() public returns(uint deposit){
    //     val=val-deposit;
    //     amt=val+deposit;
    // }
}
