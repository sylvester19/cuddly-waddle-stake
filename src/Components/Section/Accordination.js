import React from "react";
import Icon from '../../assets/Images/bkblogo.png'
export default function SortSection() {
    return (
        <>
            <section className="accordian_section">
                <div className="row">
                    <div className="col-md-12">
                        <div className="accordion" id="accordionPanelsStayOpenExample">
                            {/* Accordion One  */}
                            <div className="accordion-item">
                                <h2
                                    className="accordion-header"
                                    id="panelsStayOpen-headingOne"
                                >
                                    <button
                                        className="accordion-button"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#panelsStayOpen-collapseOne"
                                        aria-expanded="true"
                                        aria-controls="panelsStayOpen-collapseOne"
                                    >
                                        <div className="col-md-5 col-6">
                                            <div className="row">
                                                <div className="col-md-3 col-3">
                                                    <div className="bkb-logo">
                                                        <div className="css-1ocivj0" />
                                                        <div className="logo-wrap">
                                                            <img
                                                                src={Icon}
                                                                alt=""
                                                                width="100%"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-9">
                                                    <a
                                                        href="#"
                                                        className="title no-info"
                                                        onclick="return false;"
                                                    >
                                                        BKB Staking 7 days
                                                        <small />
                                                    </a>
                                                    <div className="date">Stake Now - Active</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-5 col-6">
                                            <div className="row">
                                                <div className="col-md-3">
                                                    <span className="st_heading">N/A</span>
                                                    <span className="st_info">Staked BKB</span>
                                                </div>
                                                <div className="col-md-3">
                                                    <span className="st_heading">N/A</span>
                                                    <span className="st_info">Earned BKB</span>
                                                </div>
                                                <div className="col-md-3">
                                                    <span className="st_heading">
                                                        0.00%
                                                        <sup>
                                                            <img
                                                                src="images/info.svg"
                                                                alt=""
                                                                width="15px"
                                                                data-bs-toggle="modal"
                                                                data-bs-target="#exampleModalOne"
                                                            />
                                                        </sup>
                                                    </span>
                                                    <span className="st_info">APR</span>
                                                </div>
                                                <div className="col-md-3">
                                                    <span className="st_heading">$0.00</span>
                                                    <span className="st_info">Liquidity</span>
                                                </div>
                                            </div>
                                        </div>
                                    </button>
                                </h2>
                                <div
                                    id="panelsStayOpen-collapseOne"
                                    className="accordion-collapse collapse"
                                    aria-labelledby="panelsStayOpen-headingOne"
                                >
                                    <div className="accordion-body">
                                        <div className="row">
                                            <div className="col-md-4">
                                                <div className="Blockombat-form">
                                                    <div className="title">Your BKB Balance</div>
                                                    <div className="total">
                                                        <span>N/A</span>
                                                    </div>
                                                    <div className="inputs">
                                                        <div className="input-group">
                                                            <input
                                                                className="input"
                                                                type="number"
                                                                min={0}
                                                                step="0.1"
                                                            />
                                                            <span
                                                                className="text"
                                                                style={{ cursor: "pointer" }}
                                                            >
                                                                MAX
                                                            </span>
                                                        </div>
                                                        <button
                                                            type="button"
                                                            className="btn btn-default form-button"
                                                        >
                                                            STAKE
                                                        </button>
                                                    </div>
                                                    <span className="verticalbar" />
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="Blockombat-form">
                                                    <div className="title">Staked BKB Balance</div>
                                                    <div className="total">
                                                        <span>N/A</span>
                                                    </div>
                                                    <div className="inputs">
                                                        <div className="input-group">
                                                            <input
                                                                className="input"
                                                                type="number"
                                                                min={0}
                                                                step="0.1"
                                                            />
                                                            <span
                                                                className="text"
                                                                style={{ cursor: "pointer" }}
                                                            >
                                                                MAX
                                                            </span>
                                                        </div>
                                                        <button
                                                            type="button"
                                                            className="btn btn-default form-button"
                                                        >
                                                            Unstake
                                                        </button>
                                                    </div>
                                                    <span className="verticalbar" />
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="Blockombat-form">
                                                    <div className="title">BKB Earned</div>
                                                    <div className="total">
                                                        <span>N/A</span>
                                                    </div>
                                                    <div className="inputs">
                                                        <button
                                                            type="button"
                                                            className="btn btn-default form-button"
                                                        >
                                                            Claim
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*- acc 2 -*/}
                            <div className="accordion-item">
                                <h2
                                    className="accordion-header"
                                    id="panelsStayOpen-heading2"
                                >
                                    <button
                                        className="accordion-button"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#panelsStayOpen-collapse2"
                                        aria-expanded="true"
                                        aria-controls="panelsStayOpen-collapse2"
                                    >
                                        <div className="col-md-5 col-6">
                                            <div className="row">
                                                <div className="col-md-3 col-3">
                                                    <div className="bkb-logo">
                                                        <div className="css-1ocivj0" />
                                                        <div className="logo-wrap">
                                                            <img
                                                                src={Icon}
                                                                alt=""
                                                                width="100%"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-9">
                                                    <a
                                                        href="#"
                                                        className="title no-info"
                                                        onclick="return false;"
                                                    >
                                                        BKB Staking 14 days
                                                        <small />
                                                    </a>
                                                    <div className="date">Stake Now - Active</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-5 col-6">
                                            <div className="row">
                                                <div className="col-md-3">
                                                    <span className="st_heading">N/A</span>
                                                    <span className="st_info">Staked BKB</span>
                                                </div>
                                                <div className="col-md-3">
                                                    <span className="st_heading">N/A</span>
                                                    <span className="st_info">Earned BKB</span>
                                                </div>
                                                <div className="col-md-3">
                                                    <span className="st_heading">
                                                        0.00%
                                                        <sup>
                                                            <img
                                                                src="images/info.svg"
                                                                alt=""
                                                                width="15px"
                                                                data-bs-toggle="modal"
                                                                data-bs-target="#exampleModal2"
                                                            />
                                                        </sup>
                                                    </span>
                                                    <span className="st_info">APR</span>
                                                </div>
                                                <div className="col-md-3">
                                                    <span className="st_heading">$0.00</span>
                                                    <span className="st_info">Liquidity</span>
                                                </div>
                                            </div>
                                        </div>
                                    </button>
                                </h2>
                                <div
                                    id="panelsStayOpen-collapse2"
                                    className="accordion-collapse collapse"
                                    aria-labelledby="panelsStayOpen-heading2"
                                >
                                    <div className="accordion-body">
                                        <div className="row">
                                            <div className="col-md-4">
                                                <div className="Blockombat-form">
                                                    <div className="title">Your BKB Balance</div>
                                                    <div className="total">
                                                        <span>N/A</span>
                                                    </div>
                                                    <div className="inputs">
                                                        <div className="input-group">
                                                            <input
                                                                className="input"
                                                                type="number"
                                                                min={0}
                                                                step="0.1"
                                                            />
                                                            <span
                                                                className="text"
                                                                style={{ cursor: "pointer" }}
                                                            >
                                                                MAX
                                                            </span>
                                                        </div>
                                                        <button
                                                            type="button"
                                                            className="btn btn-default form-button"
                                                        >
                                                            STAKE
                                                        </button>
                                                    </div>
                                                    <span className="verticalbar" />
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="Blockombat-form">
                                                    <div className="title">Staked BKB Balance</div>
                                                    <div className="total">
                                                        <span>N/A</span>
                                                    </div>
                                                    <div className="inputs">
                                                        <div className="input-group">
                                                            <input
                                                                className="input"
                                                                type="number"
                                                                min={0}
                                                                step="0.1"
                                                            />
                                                            <span
                                                                className="text"
                                                                style={{ cursor: "pointer" }}
                                                            >
                                                                MAX
                                                            </span>
                                                        </div>
                                                        <button
                                                            type="button"
                                                            className="btn btn-default form-button"
                                                        >
                                                            Unstake
                                                        </button>
                                                    </div>
                                                    <span className="verticalbar" />
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="Blockombat-form">
                                                    <div className="title">BKB Earned</div>
                                                    <div className="total">
                                                        <span>N/A</span>
                                                    </div>
                                                    <div className="inputs">
                                                        <button
                                                            type="button"
                                                            className="btn btn-default form-button"
                                                        >
                                                            Claim
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* acc 3*/}
                            <div className="accordion-item">
                                <h2
                                    className="accordion-header"
                                    id="panelsStayOpen-heading3"
                                >
                                    <button
                                        className="accordion-button"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#panelsStayOpen-collapse3"
                                        aria-expanded="true"
                                        aria-controls="panelsStayOpen-collapse3"
                                    >
                                        <div className="col-md-5 col-6">
                                            <div className="row">
                                                <div className="col-md-3 col-3">
                                                    <div className="bkb-logo">
                                                        <div className="css-1ocivj0" />
                                                        <div className="logo-wrap">
                                                            <img
                                                                src={Icon}
                                                                alt=""
                                                                width="100%"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-9">
                                                    <a
                                                        href="#"
                                                        className="title no-info"
                                                        onclick="return false;"
                                                    >
                                                        BKB Staking 30 days
                                                        <small />
                                                    </a>
                                                    <div className="date">Stake Now - Active</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-5 col-6">
                                            <div className="row">
                                                <div className="col-md-3">
                                                    <span className="st_heading">N/A</span>
                                                    <span className="st_info">Staked BKB</span>
                                                </div>
                                                <div className="col-md-3">
                                                    <span className="st_heading">N/A</span>
                                                    <span className="st_info">Earned BKB</span>
                                                </div>
                                                <div className="col-md-3">
                                                    <span className="st_heading">
                                                        0.00%
                                                        <sup>
                                                            <img
                                                                src="images/info.svg"
                                                                alt=""
                                                                width="15px"
                                                                data-bs-toggle="modal"
                                                                data-bs-target="#exampleModal3"
                                                            />
                                                        </sup>
                                                    </span>
                                                    <span className="st_info">APR</span>
                                                </div>
                                                <div className="col-md-3">
                                                    <span className="st_heading">$0.00</span>
                                                    <span className="st_info">Liquidity</span>
                                                </div>
                                            </div>
                                        </div>
                                    </button>
                                </h2>
                                <div
                                    id="panelsStayOpen-collapse3"
                                    className="accordion-collapse collapse"
                                    aria-labelledby="panelsStayOpen-heading3"
                                >
                                    <div className="accordion-body">
                                        <div className="row">
                                            <div className="col-md-4">
                                                <div className="Blockombat-form">
                                                    <div className="title">Your BKB Balance</div>
                                                    <div className="total">
                                                        <span>N/A</span>
                                                    </div>
                                                    <div className="inputs">
                                                        <div className="input-group">
                                                            <input
                                                                className="input"
                                                                type="number"
                                                                min={0}
                                                                step="0.1"
                                                            />
                                                            <span
                                                                className="text"
                                                                style={{ cursor: "pointer" }}
                                                            >
                                                                MAX
                                                            </span>
                                                        </div>
                                                        <button
                                                            type="button"
                                                            className="btn btn-default form-button"
                                                        >
                                                            STAKE
                                                        </button>
                                                    </div>
                                                    <span className="verticalbar" />
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="Blockombat-form">
                                                    <div className="title">Staked BKB Balance</div>
                                                    <div className="total">
                                                        <span>N/A</span>
                                                    </div>
                                                    <div className="inputs">
                                                        <div className="input-group">
                                                            <input
                                                                className="input"
                                                                type="number"
                                                                min={0}
                                                                step="0.1"
                                                            />
                                                            <span
                                                                className="text"
                                                                style={{ cursor: "pointer" }}
                                                            >
                                                                MAX
                                                            </span>
                                                        </div>
                                                        <button
                                                            type="button"
                                                            className="btn btn-default form-button"
                                                        >
                                                            Unstake
                                                        </button>
                                                    </div>
                                                    <span className="verticalbar" />
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="Blockombat-form">
                                                    <div className="title">BKB Earned</div>
                                                    <div className="total">
                                                        <span>N/A</span>
                                                    </div>
                                                    <div className="inputs">
                                                        <button
                                                            type="button"
                                                            className="btn btn-default form-button"
                                                        >
                                                            Claim
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*acc 4*/}
                            <div className="accordion-item">
                                <h2
                                    className="accordion-header"
                                    id="panelsStayOpen-heading4"
                                >
                                    <button
                                        className="accordion-button"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#panelsStayOpen-collapse4"
                                        aria-expanded="true"
                                        aria-controls="panelsStayOpen-collapse4"
                                    >
                                        <div className="col-md-5 col-6">
                                            <div className="row">
                                                <div className="col-md-3 col-3">
                                                    <div className="bkb-logo">
                                                        <div className="css-1ocivj0" />
                                                        <div className="logo-wrap">
                                                            <img
                                                                src={Icon}
                                                                alt=""
                                                                width="100%"
                                                            />
                                                            <img
                                                                src="images/busd.png"
                                                                className="busdlogo"
                                                                alt=""
                                                                width="100%"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-9">
                                                    <a
                                                        href="#"
                                                        className="title no-info"
                                                        onclick="return false;"
                                                    >
                                                        BUSD/BKB LP Staking 7 days
                                                        <small />
                                                    </a>
                                                    <div className="date">Stake Now - Active</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-5 col-6">
                                            <div className="row">
                                                <div className="col-md-3">
                                                    <span className="st_heading">N/A</span>
                                                    <span className="st_info">Staked BKB</span>
                                                </div>
                                                <div className="col-md-3">
                                                    <span className="st_heading">N/A</span>
                                                    <span className="st_info">Earned BKB</span>
                                                </div>
                                                <div className="col-md-3">
                                                    <span className="st_heading">
                                                        0.00%
                                                        <sup>
                                                            <img
                                                                src="images/info.svg"
                                                                alt=""
                                                                width="15px"
                                                                data-bs-toggle="modal"
                                                                data-bs-target="#exampleModal4"
                                                            />
                                                        </sup>
                                                    </span>
                                                    <span className="st_info">APR</span>
                                                </div>
                                                <div className="col-md-3">
                                                    <span className="st_heading">$0.00</span>
                                                    <span className="st_info">Liquidity</span>
                                                </div>
                                            </div>
                                        </div>
                                    </button>
                                </h2>
                                <div
                                    id="panelsStayOpen-collapse4"
                                    className="accordion-collapse collapse "
                                    aria-labelledby="panelsStayOpen-heading4"
                                >
                                    <div className="accordion-body">
                                        <div className="row">
                                            <div className="col-md-4">
                                                <div className="Blockombat-form">
                                                    <div className="title">Your BKB Balance</div>
                                                    <div className="total">
                                                        <span>N/A</span>
                                                    </div>
                                                    <div className="inputs">
                                                        <div className="input-group">
                                                            <input
                                                                className="input"
                                                                type="number"
                                                                min={0}
                                                                step="0.1"
                                                            />
                                                            <span
                                                                className="text"
                                                                style={{ cursor: "pointer" }}
                                                            >
                                                                MAX
                                                            </span>
                                                        </div>
                                                        <button
                                                            type="button"
                                                            className="btn btn-default form-button"
                                                        >
                                                            STAKE
                                                        </button>
                                                    </div>
                                                    <span className="verticalbar" />
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="Blockombat-form">
                                                    <div className="title">Staked BKB Balance</div>
                                                    <div className="total">
                                                        <span>N/A</span>
                                                    </div>
                                                    <div className="inputs">
                                                        <div className="input-group">
                                                            <input
                                                                className="input"
                                                                type="number"
                                                                min={0}
                                                                step="0.1"
                                                            />
                                                            <span
                                                                className="text"
                                                                style={{ cursor: "pointer" }}
                                                            >
                                                                MAX
                                                            </span>
                                                        </div>
                                                        <button
                                                            type="button"
                                                            className="btn btn-default form-button"
                                                        >
                                                            Unstake
                                                        </button>
                                                    </div>
                                                    <span className="verticalbar" />
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="Blockombat-form">
                                                    <div className="title">BKB Earned</div>
                                                    <div className="total">
                                                        <span>N/A</span>
                                                    </div>
                                                    <div className="inputs">
                                                        <button
                                                            type="button"
                                                            className="btn btn-default form-button"
                                                        >
                                                            Claim
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* acc 5 */}
                            <div className="accordion-item">
                                <h2
                                    className="accordion-header"
                                    id="panelsStayOpen-heading5"
                                >
                                    <button
                                        className="accordion-button"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#panelsStayOpen-collapse5"
                                        aria-expanded="true"
                                        aria-controls="panelsStayOpen-collapse5"
                                    >
                                        <div className="col-md-5 col-6">
                                            <div className="row">
                                                <div className="col-md-3 col-3">
                                                    <div className="bkb-logo">
                                                        <div className="css-1ocivj0" />
                                                        <div className="logo-wrap">
                                                            <img
                                                                src={Icon}
                                                                alt=""
                                                                width="100%"
                                                            />
                                                            <img
                                                                src="images/busd.png"
                                                                className="busdlogo"
                                                                alt=""
                                                                width="100%"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-9">
                                                    <a
                                                        href="#"
                                                        className="title no-info"
                                                        onclick="return false;"
                                                    >
                                                        BUSD/BKB LP Staking 14 days <small />
                                                    </a>
                                                    <div className="date">Stake Now - Active</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-5 col-6">
                                            <div className="row">
                                                <div className="col-md-3">
                                                    <span className="st_heading">N/A</span>
                                                    <span className="st_info">Staked BKB</span>
                                                </div>
                                                <div className="col-md-3">
                                                    <span className="st_heading">N/A</span>
                                                    <span className="st_info">Earned BKB</span>
                                                </div>
                                                <div className="col-md-3">
                                                    <span className="st_heading">
                                                        0.00%
                                                        <sup>
                                                            <img
                                                                src="images/info.svg"
                                                                alt=""
                                                                width="15px"
                                                                data-bs-toggle="modal"
                                                                data-bs-target="#exampleModal5"
                                                            />
                                                        </sup>
                                                    </span>
                                                    <span className="st_info">APR</span>
                                                </div>
                                                <div className="col-md-3">
                                                    <span className="st_heading">$0.00</span>
                                                    <span className="st_info">Liquidity</span>
                                                </div>
                                            </div>
                                        </div>
                                    </button>
                                </h2>
                                <div
                                    id="panelsStayOpen-collapse5"
                                    className="accordion-collapse collapse "
                                    aria-labelledby="panelsStayOpen-heading5"
                                >
                                    <div className="accordion-body">
                                        <div className="row">
                                            <div className="col-md-4">
                                                <div className="Blockombat-form">
                                                    <div className="title">Your BKB Balance</div>
                                                    <div className="total">
                                                        <span>N/A</span>
                                                    </div>
                                                    <div className="inputs">
                                                        <div className="input-group">
                                                            <input
                                                                className="input"
                                                                type="number"
                                                                min={0}
                                                                step="0.1"
                                                            />
                                                            <span
                                                                className="text"
                                                                style={{ cursor: "pointer" }}
                                                            >
                                                                MAX
                                                            </span>
                                                        </div>
                                                        <button
                                                            type="button"
                                                            className="btn btn-default form-button"
                                                        >
                                                            STAKE
                                                        </button>
                                                    </div>
                                                    <span className="verticalbar" />
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="Blockombat-form">
                                                    <div className="title">Staked BKB Balance</div>
                                                    <div className="total">
                                                        <span>N/A</span>
                                                    </div>
                                                    <div className="inputs">
                                                        <div className="input-group">
                                                            <input
                                                                className="input"
                                                                type="number"
                                                                min={0}
                                                                step="0.1"
                                                            />
                                                            <span
                                                                className="text"
                                                                style={{ cursor: "pointer" }}
                                                            >
                                                                MAX
                                                            </span>
                                                        </div>
                                                        <button
                                                            type="button"
                                                            className="btn btn-default form-button"
                                                        >
                                                            Unstake
                                                        </button>
                                                    </div>
                                                    <span className="verticalbar" />
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="Blockombat-form">
                                                    <div className="title">BKB Earned</div>
                                                    <div className="total">
                                                        <span>N/A</span>
                                                    </div>
                                                    <div className="inputs">
                                                        <button
                                                            type="button"
                                                            className="btn btn-default form-button"
                                                        >
                                                            Claim
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2
                                    className="accordion-header"
                                    id="panelsStayOpen-heading6"
                                >
                                    <button
                                        className="accordion-button"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#panelsStayOpen-collapse6"
                                        aria-expanded="true"
                                        aria-controls="panelsStayOpen-collapse6"
                                    >
                                        <div className="col-md-5 col-6">
                                            <div className="row">
                                                <div className="col-md-3 col-3">
                                                    <div className="bkb-logo">
                                                        <div className="css-1ocivj0" />
                                                        <div className="logo-wrap">
                                                            <img
                                                                src={Icon}
                                                                alt=""
                                                                width="100%"
                                                            />
                                                            <img
                                                                src="images/busd.png"
                                                                className="busdlogo"
                                                                alt=""
                                                                width="100%"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-9">
                                                    <a
                                                        href="#"
                                                        className="title no-info"
                                                        onclick="return false;"
                                                    >
                                                        BUSD/BKB LP Staking 30 days <small />
                                                    </a>
                                                    <div className="date">Stake Now - Active</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-5 col-6">
                                            <div className="row">
                                                <div className="col-md-3">
                                                    <span className="st_heading">N/A</span>
                                                    <span className="st_info">Staked BKB</span>
                                                </div>
                                                <div className="col-md-3">
                                                    <span className="st_heading">N/A</span>
                                                    <span className="st_info">Earned BKB</span>
                                                </div>
                                                <div className="col-md-3">
                                                    <span className="st_heading">
                                                        0.00%
                                                        <sup>
                                                            <img
                                                                src="images/info.svg"
                                                                alt=""
                                                                width="15px"
                                                                data-bs-toggle="modal"
                                                                data-bs-target="#exampleModal6"
                                                            />
                                                        </sup>
                                                    </span>
                                                    <span className="st_info">APR</span>
                                                </div>
                                                <div className="col-md-3">
                                                    <span className="st_heading">$0.00</span>
                                                    <span className="st_info">Liquidity</span>
                                                </div>
                                            </div>
                                        </div>
                                    </button>
                                </h2>
                                <div
                                    id="panelsStayOpen-collapse6"
                                    className="accordion-collapse collapse"
                                    aria-labelledby="panelsStayOpen-heading6"
                                >
                                    <div className="accordion-body">
                                        <div className="row">
                                            <div className="col-md-4">
                                                <div className="Blockombat-form">
                                                    <div className="title">Your BKB Balance</div>
                                                    <div className="total">
                                                        <span>N/A</span>
                                                    </div>
                                                    <div className="inputs">
                                                        <div className="input-group">
                                                            <input
                                                                className="input"
                                                                type="number"
                                                                min={0}
                                                                step="0.1"
                                                            />
                                                            <span
                                                                className="text"
                                                                style={{ cursor: "pointer" }}
                                                            >
                                                                MAX
                                                            </span>
                                                        </div>
                                                        <button
                                                            type="button"
                                                            className="btn btn-default form-button"
                                                        >
                                                            STAKE
                                                        </button>
                                                    </div>
                                                    <span className="verticalbar" />
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="Blockombat-form">
                                                    <div className="title">Staked BKB Balance</div>
                                                    <div className="total">
                                                        <span>N/A</span>
                                                    </div>
                                                    <div className="inputs">
                                                        <div className="input-group">
                                                            <input
                                                                className="input"
                                                                type="number"
                                                                min={0}
                                                                step="0.1"
                                                            />
                                                            <span
                                                                className="text"
                                                                style={{ cursor: "pointer" }}
                                                            >
                                                                MAX
                                                            </span>
                                                        </div>
                                                        <button
                                                            type="button"
                                                            className="btn btn-default form-button"
                                                        >
                                                            Unstake
                                                        </button>
                                                    </div>
                                                    <span className="verticalbar" />
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="Blockombat-form">
                                                    <div className="title">BKB Earned</div>
                                                    <div className="total">
                                                        <span>N/A</span>
                                                    </div>
                                                    <div className="inputs">
                                                        <button
                                                            type="button"
                                                            className="btn btn-default form-button"
                                                        >
                                                            Claim
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}