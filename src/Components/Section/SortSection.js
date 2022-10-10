import React from "react";

export default function SortSection() {
    return (
        <>

            <section className="sortsearch_sec">
                <div className="row">
                    <div className="col-md-8 ">
                        <div className="gridcontainer ">
                            <div className="griditem">
                                <span className="its_title">sort by</span>
                                <div className="dropdown">
                                    <a
                                        className="btn dropdown-toggle ssdropdown"
                                        href="#"
                                        role="button"
                                        id="dropdownMenuLink"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        Default &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    </a>
                                    <ul
                                        className="dropdown-menu"
                                        aria-labelledby="dropdownMenuLink"
                                    >
                                        <li>
                                            <a className="dropdown-item" href="#">
                                                Default
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="#">
                                                APR
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="#">
                                                Liquidity
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="griditem">
                                <span className="its_title">search</span>
                                <div className="input-search">
                                    <input type="text" name="search" />
                                </div>
                            </div>
                            <div className="griditem ">
                                <div className="form-check mt-md-4">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        defaultValue=""
                                        id="Staked"
                                        disabled=""
                                        checked="true"
                                    />
                                    <label
                                        className="form-check-label its_title"
                                        htmlFor="Staked"
                                    >
                                        Staked only
                                    </label>
                                </div>
                                {/* <div className="form-check mt-md-4">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        defaultValue=""
                                        id="Show"
                                    />
                                    <label
                                        className="form-check-label its_title"
                                        htmlFor="Show"
                                    >
                                        Show ended
                                    </label>
                                </div> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="info-tvl d-flex justify-content-between">
                            <div className="label">TVL:</div>
                            <div className="total">
                                $<span>0.00</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}