import React, { useState, useEffect } from "react";
import { ethers } from 'ethers';
import { stakingabi, stakeAddress } from "../../stakingabi";
import { Poolinfo } from './Poolinfo'
import { toast } from 'react-toastify';


export default function Unstake(props) {

    const [stakedBalance, setStakedBalance] = useState([]);

    const poolId = props.pool;

    useEffect(() => {
        fetchFeeData(props)
        Poolinfo(props)
    }, [])

    async function fetchFeeData(props) {
        const stakeContract = new ethers.Contract(stakeAddress, stakingabi, props.signer);
        let stake = await stakeContract.userInfo(props.pool, props.signer.getAddress());
        if (stake.amount.toString() !== '0') {
            document.getElementById(`unstakebtn${poolId}`).disabled = false;
        } else {
            document.getElementById(`unstakebtn${poolId}`).disabled = true;
        }

        setStakedBalance(stake.amount.toString())
    }

    async function unstakeTokens() {
        toast.info("Unstaking in progress...");
        const stakeContract = new ethers.Contract(stakeAddress, stakingabi, props.signer);
        try {
            let stake = await stakeContract.unstakeTokens(poolId);
            await stake.wait();
            toast.success("BKB unstaked successfully");
        } catch (stake) {
            toast.error(stake.reason);
        }
    }

    return (
        <>
            <div className="total">
                <span className="st_heading">{stakedBalance}</span>
            </div>
            <div className="inputs">
                {/*<div className="input-group">
            <input
             className="input"
             type="number"
             step="1"
             min={0}
             value={ index === unstakeValue.index ? unstakeValue.value : 0 }
              onChange={(e) => handleUnstakeValue(e, index)}
              id={`unStakeValue${index}`}/>
               <span
                className="text"
                style={{ cursor: "pointer" }}
                 onClick={() => unstakeTokensMAX(index)}
                 >
                 MAX
                 </span>
                 </div>*/}
                <button
                    style={{ margin: '0 auto' }}
                    type="button"
                    id={`unstakebtn${poolId}`}
                    className="btn btn-default form-button"
                    onClick={() => unstakeTokens()}
                >
                    Unstake
                </button>
            </div>
        </>
    );

}