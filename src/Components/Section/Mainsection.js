import React, { useEffect, useState } from "react";
import './Popup.css';

import "@rainbow-me/rainbowkit/styles.css";
import {
    ConnectButton,
    getDefaultWallets,
    RainbowKitProvider
} from "@rainbow-me/rainbowkit";
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";

const { chains, provider } = configureChains(
    [chain.mainnet, chain.polygon, chain.optimism, chain.arbitrum],
    [alchemyProvider({ alchemyId: "49YmnXw90OQ1d2ZRy5hCUcpgi6I6UP6H" }), publicProvider()]
);

const { connectors } = getDefaultWallets({
    appName: "My RainbowKit App",
    chains
});

const wagmiClient = createClient({
    autoConnect: true,
    connectors,
    provider
});




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

                            <WagmiConfig client={wagmiClient}>
                                <RainbowKitProvider chains={chains}>
                                    <div>
                                        <ConnectButton />
                                    </div>
                                </RainbowKitProvider>
                            </WagmiConfig>

                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}