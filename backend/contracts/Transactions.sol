// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract Transactions{
    uint transactionCounter;
    event Transfer(address from, address receiver, uint amount, string message, uint timestamp, string keyword);

    struct transferStruct{
        address sender;
        address receiver;
        uint amount;
        string message;
        uint timestamp;
        string keyword;
    }

    transferStruct[] transactions;

    function Transact(address payable receiver,uint amount,string memory message, string memory keyword) public{
        transactionCounter++;
        transactions.push(transferStruct(msg.sender, receiver, amount, message, block.timestamp, keyword));
        emit Transfer(msg.sender, receiver, amount, message, block.timestamp, keyword);
    }

    function viewAllTransactions() public view returns(transferStruct[] memory){
        return transactions;
    }

    function viewTransactionCount() public view returns(uint){
        return transactionCounter;
    }
}