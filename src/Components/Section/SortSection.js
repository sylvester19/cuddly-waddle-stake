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
        getPools()
    }, [])

    // setTimeout(() => {
    //     getPools()
    // }, 1000)


    const getPools = async () => {
        const noofPools = await stakeContract.poolLength()
        const totalPools = noofPools.toNumber();
        const poolData = ([]);
        for (let i = 0; i < totalPools; i++) {
            const pool = await stakeContract.poolInfo(i);
            poolData.push(pool);
        }
        setPoolData(poolData);
        TVLData()
    }

    const SearchFilter = async (event) => {
        if (!event) {
            getPools();
        } else {
            for (let i = 0; i <= poolDataArray.length; i++) {
                let data = poolDataArray[i][7].toNumber();
                if (`${data}` === event) {
                    setPoolData([poolDataArray[i]]);
                }
            }
        }
    }

    const CheckFilter = async () => {
        getPools();
        // const stakeContract = new ethers.Contract(stakeAddress, stakingabi, props.signer);
        // let stake = await stakeContract.userInfo(props.pool, props.signer.getAddress());

        // console.log("data=>", stake)
    }



    const TVLData = async () => {
        const stakeContract = new ethers.Contract(stakeAddress, stakingabi, signer);
        const noofPools = await stakeContract.poolInfo(1)
        const stakeContracts = new ethers.Contract(stakeAddress, stakingabi, signer);
        const noofPool = await stakeContracts.poolInfo(0)
        let dataone = noofPools.currentPoolSize.toNumber();
        let datateo = noofPool.currentPoolSize.toNumber()

        let result = parseInt(dataone) + parseInt(datateo);

        console.log("TVL=>", result)

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
                                <span className="its_title">Enter lock period</span>
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
                                        onClick={() => CheckFilter()}
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