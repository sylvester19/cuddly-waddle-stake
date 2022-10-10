import React, { useState, useEffect } from "react";
import { ethers } from 'ethers';
import { stakingabi, stakeAddress } from "../../stakingabi";
import { Poolinfo } from './Poolinfo'




export default function StakedBKB(props) {

    const [claimedreward, setClaimedreward] = useState([]);

    useEffect(() => {
        fetchFeeData(props)
        Poolinfo(props)
    }, [])

    async function fetchFeeData(props) {
        const stakeContract = new ethers.Contract(stakeAddress, stakingabi, props.signer);
        let stake = await stakeContract.userInfo(props.pool, props.signer.getAddress());
        let data = stake?.toString();
        setClaimedreward(data)
    }

    return (
        <span className="st_heading">{claimedreward} DTKN</span>
    );

}