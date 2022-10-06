import React, { useEffect, useState } from "react";
import Metamask from '../../assets/Images/Wallet/metamask.png'
import WalletConnect from '../../assets/Images/Wallet/wallet_connect.png'
import Rainbow from '../../assets/Images/Wallet/rainbow.png'
import { MetamaskConnect, WalletConnectFunction } from '../../Wallet/index'
import './Popup.css';


export default function Mainsection() {

    const [openpopup, setOpenpopup] = useState(false);



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
                                    BSC &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </a>
                                <ul
                                    className="dropdown-menu"
                                    aria-labelledby="dropdownMenuLink"
                                >
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            BSC
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            SOLANA
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            OKC
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            {/* Connect Wallet Button  */}
                            <a href="#" onClick={() => setOpenpopup(true)} className="wallet_btn btn">
                                Connect Wallet
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {openpopup && (
                <>
                    <div className='checkout'>
                        <div className='maincheckout'>
                            <button className='btn-close' onClick={() => setOpenpopup(false)}>x</button>
                            <div className="row">
                                <div className="col-md-4">
                                    <img src={Metamask} onClick={MetamaskConnect} className="wallet_icon" alt="Metamask" />
                                </div>
                                <div className="col-md-4">
                                    <img src={WalletConnect} onClick={WalletConnectFunction} className="wallet_icon" alt="Wallet Connect" />
                                </div>
                                <div className="col-md-4">
                                    <img src={Rainbow} className="wallet_icon" alt="Rain Bow" />
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}



        </>
    );
}