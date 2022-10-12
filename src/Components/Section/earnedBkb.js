import React, { useState, useEffect } from "react";
import { ethers } from 'ethers';
import { stakingabi, stakeAddress } from "../../stakingabi";
import { fetchFeeData } from "@wagmi/core";


export default function EarnedBkb(props) {

    const [earnedReward, setEarnedReward] = useState([]);

    const poolId = props.pool

    useEffect(() => {
        fetchFeeData(props)
    }, [])

    async function fetchFeeData(props) {
        const stakeContract = new ethers.Contract(stakeAddress, stakingabi, props?.signer);
        let stake = await stakeContract?.claimableRewards(poolId,props.signer.getAddress());
        let data = stake.toString();
        setEarnedReward(data)
    }


    return (
            <span className="st_heading">{earnedReward === 0 ? '0' : earnedReward}</span>
    );

}