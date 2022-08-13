import React, { useEffect, useState } from "react";
import { ethers } from "ethers";

const contractABI = process.env.ABI;
const contractAddress = process.env.CONTRACT_ADDRESS;

export const TransactionContext = React.createContext();

const { ethereum } = window;

const createEthereumContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const transactionsContract = new ethers.Contract(
    contractAddress,
    contractABI,
    signer
  );

  console.log(transactionsContract, provider, signer);
};
