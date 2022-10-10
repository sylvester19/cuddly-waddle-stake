import React, { useState, useEffect } from "react";
import { ethers } from 'ethers';
import { stakingabi, stakeAddress } from "../../stakingabi";
import { fetchFeeData } from "@wagmi/core";




export default function ClaimedReward(props) {

    const [claimedreward, setClaimedreward] = useState([]);

    useEffect(() => {
        fetchFeeData(props)
    }, [])

    async function fetchFeeData(props) {
        const stakeContract = new ethers.Contract(stakeAddress, stakingabi, props?.signer);
        let stake = await stakeContract?.totalRewardsClaimed();
        let data = stake.toString();
        setClaimedreward(data)
    }


    return (
        <span className="st_heading">{claimedreward}</span>
    );

}