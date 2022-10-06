import React from "react";
import '../assets/styles.css'
import Logo from '../assets/Images/blockombat-logo.png';

export default function Sidebox() {
    return (
        <>
            <div className="leftbox">
                <div id="menu-bars" className="fas fa-bars" />
                <header>
                    <a href="#" className="logo">
                        <img src={Logo} alt="logo" width="150px" />
                    </a>
                    <nav
                        className="navbar"
                        style={{ flexDirection: "column", alignItems: "flex-start" }}
                    >
                        <a href="https://blockombat.com">
                            <i className="fa-solid fa-backward" /> Back to BlocKombat
                        </a>
                        <a href="#">
                            <i className="fa-solid fa-database" /> Locked Staking
                        </a>
                        <a href="https://blockombat.gitbook.io/whitepaper/">
                            <i className="fa-solid fa-newspaper" /> Whitepaper
                        </a>
                    </nav>
                    <div className="inputgrp" style={{ marginTop: 300 }}>
                        <div className="inputitem">
                            <a href="" className="text">
                                $BKB
                            </a>
                            <a href="" className="input">
                                $<span>0.005</span>
                            </a>
                        </div>
                    </div>
                    <div className="follow">
                        <a href="#" className="fa-brands fa-discord" />
                        <a href="#" className="fa-brands fa-github" />
                        <a
                            href="https://www.youtube.com/channel/UC1X7I5u6u8bpQCVr7w2H7xw"
                            className="fa-brands fa-youtube"
                        />
                        <a
                            href="https://t.me/blockombat"
                            className="fa-brands fa-telegram"
                        />
                        <a
                            href="https://medium.com/@blockombat"
                            className="fa-brands fa-medium"
                        />
                        <a
                            href="https://twitter.com/blockombat?s=11"
                            className="fa-brands fa-twitter"
                        />
                    </div>
                </header>
            </div>
            {/*----------------- sidebarmenu End -------------------*/}








            {/*----------------------------------------------- modals ----------------------------------------- */}
            {/* Modal for Accordian One*/}
            <div
                className="modal fade"
                id="exampleModalOne"
                tabIndex={-1}
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog  modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                                <img src="images/calculator.svg" alt="" width="30px" />
                                <span>ROI</span>
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            />
                        </div>
                        <div className="modal-body">
                            <div className="roi-calculator-container">
                                <div className="column">
                                    <div className="label">Timeframe</div>
                                    <div className="input">1d</div>
                                    <div className="input">7d</div>
                                    <div className="input">30d</div>
                                    <div className="input">365d</div>
                                </div>
                                <div className="column">
                                    <div className="label">ROI</div>
                                    <div className="input" id="roi1d">
                                        <span>0.00</span>%
                                    </div>
                                    <div className="input" id="roi7d">
                                        <span>0.00</span>%
                                    </div>
                                    <div className="input" id="roi30d">
                                        <span>0.00</span>%
                                    </div>
                                    <div className="input" id="roi365d">
                                        <span>0.00</span>%
                                    </div>
                                </div>
                                <p className="small" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}