import React from "react";
import { stakingabi, stakeAddress } from "../../stakingabi";
import { ethers } from 'ethers';

export default function APR(props) {

    React.useEffect(() => {
        RunAPRCalculation(); getPools(props);
    }, [])

    const getPools = async (props) => {
        const stakeContract = new ethers.Contract(stakeAddress, stakingabi, props.signer);
        const pool = await stakeContract.poolInfo(props.pool);

        console.log("Pool data=>", pool)
    }

    const RunAPRCalculation = async () => {
        let annualProvisions = 100;
        let communityTax = 50;
        let bondedTokens = 60;
        let formula = annualProvisions * (1 - communityTax) / bondedTokens;

        console.log("Result=>", formula)
    }
    return (
        <>0 %</>
    );

}