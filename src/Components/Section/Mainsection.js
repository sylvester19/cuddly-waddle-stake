import React, { useEffect, useState } from "react";
import './Popup.css';
import "@rainbow-me/rainbowkit/styles.css";
import {
    ConnectButton
} from "@rainbow-me/rainbowkit";
import { toast } from 'react-toastify';

export default function Mainsection() {

    const [chain,setChain] = useState('BSC')

    function handleChain(name){
        if(name === 'BSC'){
            setChain('BSC')
        } else if (name === 'SOL'){
            toast.info('Coming Soon')
        } else if (name === 'OKC'){
            toast.info('Coming Soon')
        }
    }

    return (

        <>
            <section className="mainsec">
                <div className="row">
                    <div className="col-md-6" />
                    <div className="col-md-6">
                        <div className="main">
                            {/* BSC dropdown  */}
                            <div className="dropdown">
                                <a
                                    className="btn dropdown-toggle bscdropdown"
                                    href="#"
                                    role="button"
                                    id="dropdownMenuLink"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    {chain} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </a>
                                <ul
                                    className="dropdown-menu"
                                    aria-labelledby="dropdownMenuLink"
                                >
                                    <li>
                                        <a onClick={()=>handleChain('BSC')} className="dropdown-item" href="#">
                                            BSC
                                        </a>
                                    </li>
                                    <li>
                                        <a onClick={()=>handleChain('SOL')} className="dropdown-item" href="#">
                                            SOLANA
                                        </a>
                                    </li>
                                    <li>
                                        <a onClick={()=>handleChain('OKC')} className="dropdown-item" href="#">
                                            OKC
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            
                                    <div>
                                        <ConnectButton />
                                    </div>
                                

                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}