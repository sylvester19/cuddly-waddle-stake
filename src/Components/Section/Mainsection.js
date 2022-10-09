import React, { useEffect, useState } from "react";
import './Popup.css';

import "@rainbow-me/rainbowkit/styles.css";
import {
    ConnectButton
} from "@rainbow-me/rainbowkit";


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