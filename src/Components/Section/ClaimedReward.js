import React, { useState, useEffect } from "react";
import { ethers } from 'ethers';
import { stakingabi, stakeAddress } from "../../stakingabi";
import { fetchFeeData } from "@wagmi/core";
import { ToastContainer, toast } from 'react-toastify';



export default function ClaimedReward(props) {

    const [claimableTokens, setClaimableTokens] = useState([]);

    const poolId = props.pool

    useEffect(() => {
        fetchFeeData(props)
    }, [])

    async function fetchFeeData(props) {
        const stakeContract = new ethers.Contract(stakeAddress, stakingabi, props?.signer);
        let stake = await stakeContract?.claimableRewards(poolId,props.signer.getAddress());
        let data = stake.toString();
        if(data != 0){
            document.getElementById('claimbtn').disabled = false;
        } else {
            document.getElementById('claimbtn').disabled = true;
        }
        setClaimableTokens(data)
    }

    async function ClaimToken() {
        toast.info("Claiming in progress...");
        const stakeContract = new ethers.Contract(stakeAddress, stakingabi, props?.signer);
        try {
            let stake = await stakeContract.claimRewards(poolId);
            await stake.wait();
            toast.success("Rewards successfully claimed");
        } catch (err) {
            toast.error('Transaction failed');
        }
    }


    return (
        <>
        <div className="total">
            <span className="st_heading">{claimableTokens}</span>
        </div>
        <div className="inputs">
            <button
            style={{margin:'0 auto'}}
            type="button"
            id="claimbtn"
            className="btn btn-default form-button"
            onClick={() => ClaimToken()}
            disabled
            >
            Claim
            </button>
        </div>
        </>
        
    );

}