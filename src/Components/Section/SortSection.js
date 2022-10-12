import React, { useState, useEffect } from "react";
import { ethers } from 'ethers';
import { stakingabi, stakeAddress } from "../../stakingabi";
import { useSigner } from 'wagmi'
import Accordination from '../Section/Accordination'

export default function SortSection() {
    const { data: signer } = useSigner()
    const [tvldata, setTVLData] = useState(true);
    const [poolDataArray, setPoolData] = useState([]);
    const stakeContract = new ethers.Contract(stakeAddress, stakingabi, signer);

    useEffect(() => {
        SearchFilter()
    }, [])

    setTimeout(() => {
        SearchFilter()
    }, 1000)

    const SearchFilter = async (event) => {
        if (!event) {
            getPools();
        } else {
            setPoolData(poolDataArray[0]);
        }
    }



    const getPools = async () => {
        const noofPools = await stakeContract.poolLength()
        const totalPools = noofPools?.toNumber();
        const poolData = [];
        for (let i = 0; i < totalPools; i++) {
            const pool = await stakeContract?.poolInfo(i);
            poolData.push(pool);
        }
        setPoolData(poolData); TVLData()
    }

    const TVLData = async () => {
        let pool = 0;
        const stakeContract = new ethers.Contract(stakeAddress, stakingabi, signer);
        let stake = await stakeContract.userInfo(pool, signer.getAddress());
        let dataone = stake.amount.toString();
        let pools = 1;
        const stakeContracts = new ethers.Contract(stakeAddress, stakingabi, signer);
        let stakes = await stakeContracts.userInfo(pools, signer.getAddress());
        let datatwo = stakes.amount.toString();
        let result = dataone + datatwo;

        setTVLData(result)
    }



    return (
        <>

            <section className="sortsearch_sec">
                <div className="row">
                    <div className="col-md-8 ">
                        <div className="gridcontainer ">
                            <div className="griditem">
                                <span className="its_title">sort by</span>
                                <div className="dropdown">
                                    <select className="input-search" style={{ width: '250px' }}>
                                        <option>Default</option>
                                        <option>APR</option>
                                        <option>Liquidity</option>
                                    </select>
                                </div>
                            </div>
                            <div className="griditem">
                                <span className="its_title">search</span>
                                <div className="input-search">
                                    <input type="text" onChange={(event) => SearchFilter(event.target.value)} name="search" />
                                </div>
                            </div>
                            <div className="griditem ">
                                <div className="form-check mt-md-4">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        defaultValue=""
                                        id="Staked"
                                        disabled=""
                                    />
                                    <label
                                        className="form-check-label its_title"
                                        htmlFor="Staked"
                                    >
                                        Staked only
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="info-tvl d-flex justify-content-between">
                            <div className="label">TVL:</div>
                            <div className="total">
                                $<span>{tvldata}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Accordination data={poolDataArray} />
        </>
    );
}