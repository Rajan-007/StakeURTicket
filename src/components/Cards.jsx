"use client";
import React from 'react'
import main from '../assets/Concert.jpg'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from 'react-redux'
import { stringToFelt } from '../utils/utils'
import { Contract, RpcProvider } from 'starknet'

const Cards = (props) => {
  const connection = useSelector((state) => state.connection);
  console.log("account",connection?.connection?.account)
  console.log("address",connection?.connection?.account?.address) 
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
        connection?.connection?.account
      );

      const address = connection?.connection?.account?.address;

      const value = stringToFelt("booking");

      console.log("contract details", newContract);

      const response = await newContract.set(address, value);

      console.log(">> firstresponse", response);
      if (response) {
        toast.success("Ticket booked successfully !");
        
      }
      return true;
    } catch (error) {
      console.log("error", error);
      return false;
    }

  };
  return (
    <div className='md:pt-10 md:pl-10  py-10 pl-10 md:grid md:grid-cols-3 flex justify-start'>
      <div href='#' className='flex flex-col justify-around bg-gradient-to-t from-blue-600 via-purple-300 border border-2-black to-purple-400 md:pl-10 md:pr-16 md:py-10 pb-10 pl-10 pr-16 rounded-xl  w-80' >
          <h1 className='font-bold text-center text-xl pb-8 underline'>Concert Details</h1>
          <img src={main} alt="pradeep kumar " className="w-64 h-32 " /> <br />
          <p className='pt-2 font-semibold'>Concert Name: {props.Concert}<span className='font-bold'>Vibe with Pradeep</span></p>
          <p className='pt-2 font-semibold'>Artist: {props.Artist} <span className='font-bold'>Pradeep kumar</span></p>
          <p className='pt-2 font-semibold'>Description: {props.Description}Symphony of sounds and lights that transport the audience to another world. </p>
          <p className='pt-2 font-semibold'>Timing : {props.timing}7:00 pm</p>
          <p className='pt-2 font-semibold '>Location : {props.location}Chennai</p>
          <p className='pt-2 text-lg font-bold'>Price : $50</p>

          <button onClick={book} className='bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-200 font-bold text-xl text-center rounded-full mt-4 py-3'>Book</button>
          {/* <p className='pt-2'>image : {props.image}</p> */}
          <ToastContainer />
      </div>
    </div>
  )
}
  
export default Cards;
