import React, { useState, useEffect } from "react";
import Icon from '../../assets/Images/bkblogo.png'
import { stakingabi, stakeAddress } from "../../stakingabi";
import { tokenABI, tokenAddress } from "../../tokenabi";
import { useSigner, useProvider } from 'wagmi'
import { ethers } from 'ethers';



export default function SortSection() {

    const { data: signer } = useSigner()
    const provider = useProvider();
    const [stakeValue, setStakeValue] = useState(0);
    const [poolDataArray, setPoolData] = useState([]);

    const tokenContract = new ethers.Contract(tokenAddress, tokenABI, signer);
    const stakeContract = new ethers.Contract(stakeAddress, stakingabi, signer);

    useEffect(() => {
        getPools();
    }, [])

    setTimeout(() => {
        getPools();
    }, 1000)

    const getPools = async () => {
        const noofPools = await stakeContract?.poolLength()
        const totalPools = noofPools?.toNumber();
        const poolData = [];
        for (let i = 0; i < totalPools; i++) {
            const pool = await stakeContract?.poolInfo(i);
            poolData.push(pool);
        }
        setPoolData(poolData);
    }

    const handleInputChange = (e) => {
        setStakeValue(e.target.value);
    }

    const stakeTokens = async () => {

        try {
            let approve = await tokenContract.approve(stakeAddress, stakeValue);
            await approve.wait();
            let stake = await stakeContract.stakeTokens(4, stakeValue);
            await stake.wait();
            console.log("Staked successfully", stake);
        } catch (error) {
            console.log(error);
        }
    }

    console.log("poolDataArray", poolDataArray);
    if (poolDataArray.length === 0) {
        return (<div style={{ paddingTop: '50px' }}><center>Loding please wait....</center></div>)
    }

    return (
        <>
            <section className="accordian_section">
                <div className="row">
                    <div className="col-md-12">
                        <div className="accordion" id="accordionPanelsStayOpenExample">
                            {poolDataArray?.map((item, index) => {
                                console.log(index)
                                return (
                                    <div className="accordion-item">
                                        <h2
                                            className="accordion-header"
                                            id={index === 0 ? "panelsStayOpen-headingOne" : `panelsStayOpen-heading${index + 1}`}
                                        >
                                            <button
                                                className="accordion-button"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target={index === 0 ? "#panelsStayOpen-collapseOne" : `#panelsStayOpen-collapse${index + 1}`}
                                                aria-expanded="true"
                                                aria-controls={index === 0 ? "panelsStayOpen-collapseOne" : `panelsStayOpen-collapse${index + 1}`}
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
                                            id={index === 0 ? "panelsStayOpen-collapseOne" : `panelsStayOpen-collapse${index + 1}`}
                                            className="accordion-collapse collapse"
                                            aria-labelledby={index === 0 ? "panelsStayOpen-headingOne" : `panelsStayOpen-heading${index + 1}`}
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
                                                                        onChange={handleInputChange}
                                                                    />
                                                                    <span
                                                                        className="text"
                                                                        style={{ cursor: "pointer" }}
                                                                    >
                                                                        100 MAX
                                                                    </span>
                                                                </div>
                                                                <button
                                                                    type="button"
                                                                    className="btn btn-default form-button"
                                                                    onClick={stakeTokens}
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
                                )
                            })
                            }
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}