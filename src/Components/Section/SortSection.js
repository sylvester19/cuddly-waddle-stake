import React, { useState, useEffect } from "react";
import { ethers } from 'ethers';
import { stakingabi, stakeAddress } from "../../stakingabi";
import { useSigner } from 'wagmi'
import Accordination from '../Section/Accordination'

export default function SortSection() {
    const { data: signer } = useSigner()
    const [tvldata, setTVLData] = useState(true);
    const [counter, setCounter] = useState(0);
    const [poolDataArray, setPoolData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [data, Setdata] = React.useState(true);

    const stakeContract = new ethers.Contract(stakeAddress, stakingabi, signer);

    useEffect(() => {
        getPools()
        fetch(`https://cors-digi.herokuapp.com/` + `https://api.pancakeswap.info/api/v2/tokens/0xdB0c5577728520e5D979dFAAA89ab78d316Be66C`)
            .then(resp => resp.json())
            .then(function (data) {
                Setdata(data.data.price)
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [])

    setTimeout(() => {
        getPools()
    }, 1000)


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
        if (counter === 0) {
            setFilteredData(poolData)
            setCounter(1)
        } else {
            return
        }

    }

    const SearchFilter = async (event) => {
        if (event === '') {
            setFilteredData(poolDataArray);
        } else {
            for (let i = 0; i <= poolDataArray.length; i++) {
                let filterData = poolDataArray.filter((item) => {
                    return item[7].toString().includes(event)
                })
                setFilteredData(filterData);
            }
        }

    }



    const TVLData = async () => {
        const poolSize = [];
        for (let i = 0; i <= poolDataArray.length; i++) {
            let poolsize = poolDataArray[i]?.currentPoolSize;
            if (poolsize != undefined) {
                poolSize.push(poolsize.toNumber());
            }
        }
        const sum = poolSize.reduce((partialSum, a) => partialSum + a, 0);
        let tvlformula = sum * data;
        setTVLData(tvlformula)
        return false;
    }

    const handleChange = async event => {
        if (event.target.checked) {
            console.log('✅ Checkbox is checked');
            for (let i = 0; i <= poolDataArray.length; i++) {
                const stakeContract = new ethers.Contract(stakeAddress, stakingabi, signer);
                let stake = await stakeContract.userInfo([i], signer.getAddress());
                let stakedata = stake.amount.toString()
                if (stakedata != 0) {
                    let arraycount = stakedata[i];
                    setFilteredData([filteredData[arraycount]]);
                }
            }
        } else {
            console.log('⛔️ Checkbox is NOT checked');
            window.location.reload();
        }

    };

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
                                        onChange={handleChange}
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
            <Accordination data={filteredData} />
        </>
    );
}