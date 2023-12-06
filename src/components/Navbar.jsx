"use client";
import React from "react";
import { useEffect, useState } from "react";
import { Dialog } from "@headlessui/react";
import {
  connect,
  disconnect,
  ConnectedStarknetWindowObject,
} from "@argent/get-starknet";
import Link from "react";
import { WalletDetails } from "../Config/WalletDetails";
import { useDispatch } from 'react-redux';
import { setConn } from "../store/connectionActions";

function NavLink({to, children}) {
    return <a href={to} className={`mx-4 hover:underline font-bold hover:text-gray-900`}>
        {children}
    </a>
}

function MobileNav({open, setOpen}) {
    const WW_URL = "https://web.argent.xyz";
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [connection, setConnection] = useState();
    const dispatch = useDispatch();

    useEffect(() => {
        const connectToStarknet = async () => {
          const connection = await connect({
            modalMode: "neverAsk",
            webWalletUrl: WW_URL,
          }); // try to reconnect to a previously used wallet
    
          if (connection && connection.isConnected) {
            setConnection(connection);
            dispatch(setConn(connection));

          }
        };
        connectToStarknet();
      }, []);
    return (
        <div className={`absolute top-0 left-0 h-screen w-screen bg-gray-900 transform ${open ? "-translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out filter drop-shadow-md `}>
            <div className="flex items-center justify-center filter drop-shadow-md font-bold bg-gradient-to-r from-yellow-400 via-yellow-200 to-white h-20"> {/*logo container*/}
                <a className="text-xl font-bold" href="/">StakeUrTicket</a>
            </div>
            <div className="flex flex-col ml-4 text-white">
                <a className="text-xl my-4 font-bold hover:underline" href="/" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                    Home
                </a>
                <a className="text-xl font-bold my-4" href="/about" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                    About
                </a>
                <a className="text-xl font-bold my-4" href="/Concerts" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                    Concerts
                </a>
                <a className="text-xl font-bold my-4" href="/host" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                    Host
                </a>
            </div>  
        </div>
    )
}

export default function Navbar() {
    const WW_URL = "https://web.argent.xyz";
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [connection, setConnection] = useState();

    useEffect(() => {
        const connectToStarknet = async () => {
          const connection = await connect({
            modalMode: "neverAsk",
            webWalletUrl: WW_URL,
          }); // try to reconnect to a previously used wallet
    
          if (connection && connection.isConnected) {
            setConnection(connection);
          }
        };
        connectToStarknet();
      }, []);
    const [open, setOpen] = useState(false)
    return (
        <nav className="flex filter drop-shadow-md bg-gradient-to-r from-yellow-500 via-yellow-300 to-yellow-200 px-4 py-4 h-20 items-center">
            <MobileNav open={open} setOpen={setOpen}/>
            <div className="w-3/12 flex items-center">
                <a className="text-3xl font-bold" href="/">Stake<span className="text-4xl text-gray-900 underline">UR</span>Ticket</a>
            </div>
            <div className="w-9/12 flex justify-end items-center text-black">
                <div className="z-50 flex relative w-8 h-8 flex-col justify-between items-center md:hidden" onClick={() => {
                    setOpen(!open)
                }}>
                    {/* hamburger button */}
                    <span className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${open ? "rotate-45 translate-y-3.5" : ""}`} />
                    <span className={`h-1 w-full bg-black rounded-lg transition-all duration-300 ease-in-out ${open ? "w-0" : "w-full"}`} />
                    <span className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${open ? "-rotate-45 -translate-y-3.5" : ""}`} />
                </div>
                <div className="hidden text-lg font-bold md:flex ">
                    <NavLink to="/" className='hover:underline'>
                        HOME
                    </NavLink>
                    <NavLink to="/about">
                        ABOUT
                    </NavLink>
                    <NavLink to="/Concerts">
                        CONCERTS
                    </NavLink>
                    <NavLink to="/Collections">
                        COLLECTIONS
                    </NavLink>
                    
                </div>
                <div className="flex md:flex-row flex-col items-center justify-center md:space-y-0 md:space-x-4 space-y-4">
              {!connection ? (
                <>
                 
                  <button
                    onClick={async () => {
                      const connection = await connect({
                        webWalletUrl: WW_URL,
                      });

                      if (connection && connection.isConnected) {
                        setConnection(connection);
                      }
                    }}
                    className="herobtn px-6 py-3 text-lg font-bold text-black bg-yellow-300 rounded-full border-2 border-black"
                  >
                    Connect wallet
                  </button>
                </>
              ) : (
                <>
                  <div className="flex">
                    <WalletDetails wallet={connection} />
                    <button
                      onClick={async () => {
                        await disconnect();
                        setConnection(undefined);
                      }}
                      className="herobtn px-6 py-3 text-lg font-bold text-black bg-yellow-300 rounded-full  border-2 border-black " >   Disconnect wallet   </button>
                  </div>
                </>
              )}
            </div>

             </div>
        </nav>
    )
}