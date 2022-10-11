import React, { useState, useEffect } from "react";
import { ethers } from 'ethers';
import { stakingabi, stakeAddress } from "../../stakingabi";
import { Poolinfo } from './Poolinfo'




export default function StakedBKB(props) {

    const [stakedBalance, setStakedBalance] = useState([]);

    useEffect(() => {
        fetchFeeData(props)
        Poolinfo(props)
    }, [])

    async function fetchFeeData(props) {
        const stakeContract = new ethers.Contract(stakeAddress, stakingabi, props.signer);
        let stake = await stakeContract.userInfo(props.pool, props.signer.getAddress());
        setStakedBalance(stake.amount.toString())
    }

    return (
        <span className="st_heading">{stakedBalance}</span>
    );

}