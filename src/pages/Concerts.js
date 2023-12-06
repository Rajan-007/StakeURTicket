import React from 'react'
import Navbar from '../components/Navbar'
import Cards from '../components/Cards'
import Footer from '../components/Footer'
import { useSelector } from 'react-redux'
import { stringToFelt } from '../utils/utils'
import { Contract, RpcProvider } from 'starknet'


const Concerts = () => {
  const connection = useSelector((state) => state.connection);
  
  const book = async () => {
    console.log(">> interactWithContract started");
    try {
      const provider = new RpcProvider({
        nodeUrl:
          "https://starknet-goerli.g.alchemy.com/v2/z_ZWlsOXWnNNXqo9hveLbeX4QDNycdA9",
      });
      const contAddress =
        "0x06f38c7f33e350fa3450f1fc1f68b7de5a2a91f36be7e3c068cab14ea5646ab0";
      const ContAbi = await provider.getClassAt(contAddress);
      const newContract = new Contract(
        ContAbi.abi,
        contAddress,
        connection.account
      );

      const address = connection.account.address;

      const value = stringToFelt("booking");

      console.log("contract details", newContract);

      const response = await newContract.set(address, value);

      console.log(">> firstresponse", response);
      if (response) {
        alert("Your ticket is booked");
      }
      return true;
    } catch (error) {
      console.log("error", error);
      return false;
    }
  };
  return (
    <div className='bg-gray-900'>
      <Navbar />
      <h1 className='text-center text-white text-xl py-10 md:text-4xl font-bold font-sans uppercase'>Ongoing Concerts</h1>
      <div className='flex '>
        <Cards />
        <Cards />
        <Cards />
      </div>  
      <Footer />    
    </div>
  )
}

export default Concerts;
