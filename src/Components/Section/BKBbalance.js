import React, { useState, useEffect } from "react";
import { ethers } from 'ethers';
import { tokenABI, tokenAddress } from "../../tokenabi";





export default function BKBbalance(props) {

    const [claimedreward, setClaimedreward] = useState([]);

    useEffect(() => {
        fetchFeeData(props)
    }, [])

    async function fetchFeeData(props) {
        const tokenContract = new ethers.Contract(tokenAddress, tokenABI, props.signer);
        const balance = await tokenContract.balanceOf(props.signer.getAddress())
        setClaimedreward(balance.toString());
    }

    return (
        <span id="tokenBal" className="st_heading">{claimedreward}</span>
    );

}