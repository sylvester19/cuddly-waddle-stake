import React, { useState, useEffect } from "react";
import Icon from '../../assets/Images/bkblogo.png'
import { stakingabi, stakeAddress } from "../../stakingabi";
import { tokenABI, tokenAddress } from "../../tokenabi";
import { useSigner, useProvider } from 'wagmi'
import { ethers } from 'ethers';
import ClaimedReward from './ClaimedReward'
import EarnedBkb from './earnedBkb'
import StakedBKB from './StakedBKB'
import BKBbalance from './BKBbalance'
import APR from './APR'
import { ToastContainer, toast } from 'react-toastify';
import Unstake from "./unStake";


export default function SortSection(props) {

    const { data: signer } = useSigner()
    const provider = useProvider();
    const [stakeValue, setStakeValue] = useState({
        value: 0,
        index: 0
    });
    const [unstakeValue, setUnstakeValue] = useState({
        value: 0,
        index: 0
    });

    const poolDataArray = props.data;
    const [maxstack, setMaxStack] = useState([]);
    const [stakeBtn, setStakeBtn] = useState({
        active: false,
        index: 0
    });



    const tokenContract = new ethers.Contract(tokenAddress, tokenABI, signer);
    const stakeContract = new ethers.Contract(stakeAddress, stakingabi, signer);




    const handleInputChange = (e, index) => {
        if (e.target.value != 0) {
            setStakeValue({
                value: e.target.value,
                index: index
            });
            setStakeBtn({
                active: false,
                index: index
            });
        } else {
            setStakeBtn({
                active: true,
                index: index
            })
        }
    }


    const stakeTokens = async (index) => {
        toast.info("Staking in progress...");
        const amount = ethers.utils.parseEther(stakeValue.value.toString(), 'ether');
        try {
            let approve = await tokenContract.approve(stakeAddress, amount);
            await approve.wait();
            toast.success("Please Wait...");
            let stake = await stakeContract.stakeTokens(index, stakeValue.value);
            await stake.wait();
            toast.success("BKB staked successfully");
            setStakeValue({
                value: 0,
                index: 0
            });

            window.location.reload();

        } catch (stake) {
            toast.error(stake.reason);
        }
    }



    function setMaxStakeValue(index) {
        const tokenBal = document.getElementById('tokenBal').textContent;
        document.getElementById(`stakeValue${index}`).value = tokenBal;
        setStakeValue({
            value: tokenBal,
            index: index
        })
        setStakeBtn({
            active: false,
            index: index
        });
    }

    if (poolDataArray.length === 0) {
        return (<div style={{ paddingTop: '50px' }}><center>Please Connect your wallet to continue..</center></div>)
    }

    return (
        <>
            <ToastContainer
                position="top-center"
            />
            <section className="accordian_section">
                <div className="row">
                    <div className="col-md-12">
                        <div className="accordion" id="accordionPanelsStayOpenExample">
                            {poolDataArray?.map((item, index) => {
                                if (item[9] === true) {

                                    return (
                                        <div className="accordion-item" key={index} >
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
                                                                    BKB Staking {item[7].toNumber()} days
                                                                    <small />
                                                                </a>
                                                                <div className="date">Stake Now - Active</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-5 col-6">
                                                        <div className="row">
                                                            <div className="col-md-3">
                                                                <StakedBKB pool={index} signer={signer} />
                                                                <span className="st_info">Staked BKB</span>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <EarnedBkb pool={index} signer={signer} />
                                                                <span className="st_info">Earned BKB</span>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <span className="st_heading">
                                                                    <APR pool={index} signer={signer} />
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
                                                                    <BKBbalance signer={signer} />
                                                                </div>
                                                                <div className="inputs">
                                                                    <div className="input-group">
                                                                        <input
                                                                            className="input"
                                                                            type="number"
                                                                            min={0}
                                                                            step="1"
                                                                            value={index === stakeValue.index ? stakeValue.value : 0}
                                                                            id={`stakeValue${index}`}
                                                                            onChange={(e) => handleInputChange(e, index)}
                                                                        />
                                                                        <span
                                                                            className="text"
                                                                            style={{ cursor: "pointer" }}
                                                                            onClick={() => setMaxStakeValue(index)}
                                                                        >
                                                                            MAX
                                                                        </span>
                                                                    </div>
                                                                    <button
                                                                        type="button"
                                                                        id="stakebtn"
                                                                        className="btn btn-default form-button"
                                                                        onClick={() => stakeTokens(index)}
                                                                        disabled={stakeBtn.index === index ? stakeBtn.active : true}
                                                                    >
                                                                        STAKE
                                                                    </button>
                                                                </div>
                                                                <span className="verticalbar" />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-4">
                                                            <div style={{ textAlign: 'center' }} className="Blockombat-form">
                                                                <div style={{ textAlign: 'center' }} className="title">Staked BKB Balance</div>
                                                                <Unstake pool={index} signer={signer} />
                                                                <span className="verticalbar" />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-4">
                                                            <div className="Blockombat-form">
                                                                <div className="title">BKB Earned</div>
                                                                <ClaimedReward pool={index} signer={signer} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                            })
                            }
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}
