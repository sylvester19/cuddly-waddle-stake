import React, { useState, useEffect } from "react";
import Icon from '../../assets/Images/bkblogo.png'
import { stakingabi, stakeAddress } from "../../stakingabi";
import { tokenABI, tokenAddress } from "../../tokenabi";
import { useSigner, useProvider } from 'wagmi'
import { ethers } from 'ethers';
import ClaimedReward from './ClaimedReward'
import StakedBKB from './StakedBKB'
import BKBbalance from './BKBbalance'
import APR from './APR'
import PropagateLoader from "react-spinners/PropagateLoader";
import { ToastContainer, toast } from 'react-toastify';


export default function SortSection() {

    const { data: signer } = useSigner()
    const provider = useProvider();
    const [stakeValue, setStakeValue] = useState({
        value: 0,
        index: 0
    });
    const [poolDataArray, setPoolData] = useState([]);
    const [loading, setLoader] = useState(false);
    const [maxstack, setMaxStack] = useState([]);
    const tokenContract = new ethers.Contract(tokenAddress, tokenABI, signer);
    const stakeContract = new ethers.Contract(stakeAddress, stakingabi, signer);

    useEffect(() => {
        getPools();
    }, [])

    setTimeout(() => {
        getPools();
    }, 1000)

    console.log("Singer=>", signer)

    if (signer === null) {
        return (<div style={{ paddingTop: '50px' }}>
            <center>Please Connect your wallet to continue</center>
        </div>)
    }

    const getPools = async () => {
        const noofPools = await stakeContract.poolLength()
        const totalPools = noofPools?.toNumber();
        const poolData = [];
        for (let i = 0; i < totalPools; i++) {
            const pool = await stakeContract?.poolInfo(i);
            poolData.push(pool);
        }
        setPoolData(poolData);
    }

    const handleInputChange = (e, index) => {
        setStakeValue({
            value: e.target.value,
            index: index
        });
    }

    const stakeTokens = async (index) => {
        setLoader(true)
        toast.info("Staking in progress...");
        try {
            let amount = ethers.utils.parseEther(stakeValue.value.toString());
            let approve = await tokenContract.approve(stakeAddress, amount);
            await approve.wait();
            let stake = await stakeContract.stakeTokens(index, amount);
            await stake.wait();
            toast.success("BKB staked successfully");
            setLoader(false)
            /*console.log("Staked successfully", stake);*/
        } catch (error) {
            toast.error(error.message);
            setLoader(false)
            alert(error.message)
        }
    }

    async function unstakeTokens(index) {
        setLoader(true)
        toast.info("Unstaking in progress...");
        try {
            let stake = await stakeContract.unstakeTokens(index);
            await stake.wait();
            toast.success("BKB unstaked successfully");
            setLoader(false)
            /*console.log("unstaked successfully", stake);*/
        } catch (err) {
            toast.error(err.message);
            setLoader(false)
            alert(err.message)
        }
    }

    async function unstakeTokensMAX(index) {
        setLoader(true)
        const stakeContract = new ethers.Contract(stakeAddress, stakingabi, signer);
        let stake = await stakeContract.userInfo(index, signer.getAddress());
        let data = stake.amount.toString();
        setMaxStack(data)
        setLoader(false)
        return false;
    }

    async function ClaimToken(index) {
        setLoader(true)
        toast.info("Claiming in progress...");
        try {
            let stake = await stakeContract.claimRewards(index);
            await stake.wait();
            toast.success("Rewards successfully claimed");
            setLoader(false)
            /*console.log("Clain", stake);*/
        } catch (err) {
            setLoader(false)
            toast.error(err.message);
            alert(err.message)
        }
    }

    function setMaxStakeValue(index) {
        const tokenBal = document.getElementById('tokenBal').textContent;
        document.getElementById(`stakeValue${index}`).value = tokenBal;
        setStakeValue({
            value: tokenBal,
            index: index
        })
    }

    if (poolDataArray.length === 0) {
        return (<div style={{ paddingTop: '50px' }}><center><PropagateLoader color="#267d79" size={40} /></center></div>)
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
                                                            <ClaimedReward pool={index} signer={signer} />
                                                            <span className="st_info">Earned BKB</span>
                                                        </div>
                                                        <div className="col-md-3">
                                                            <span className="st_heading">
                                                                <APR pool={index} />
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
                                                                <BKBbalance signer={signer} /> DKTN
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
                                                                    className="btn btn-default form-button"
                                                                    onClick={() => stakeTokens(index)}
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
                                                                <StakedBKB pool={index} signer={signer} />
                                                            </div>
                                                            <div className="inputs">
                                                                <div className="input-group">
                                                                    <input
                                                                        className="input"
                                                                        type="text"
                                                                        value={maxstack}
                                                                    />
                                                                    <span
                                                                        className="text"
                                                                        style={{ cursor: "pointer" }}
                                                                        onClick={() => unstakeTokensMAX(index)}
                                                                    >
                                                                        MAX
                                                                    </span>
                                                                </div>
                                                                <button
                                                                    type="button"
                                                                    className="btn btn-default form-button"
                                                                    onClick={() => unstakeTokens(index)}
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
                                                                <ClaimedReward pool={index} signer={signer} />
                                                            </div>
                                                            <div className="inputs">
                                                                <button
                                                                    type="button"
                                                                    className="btn btn-default form-button"
                                                                    onClick={() => ClaimToken(index)}
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
                        {
                            loading && (
                                <div className='checkout'>
                                    <div className='maincheckout'>
                                        <div style={{ height: '50px' }}> <center><PropagateLoader color="#267d79" size={40} /></center></div>
                                    </div>
                                </div>
                            )
                        }

                    </div>
                </div>
            </section>

        </>
    );
}