import { ethers } from 'ethers';
import { stakingabi, stakeAddress } from "../../stakingabi";


export const Poolinfo = async (props) => {
    const stakeContract = new ethers.Contract(stakeAddress, stakingabi, props.signer);
    console.log(stakeContract)
    const noofPools = await stakeContract.poolInfo(props.pool)
    console.log("data=>", noofPools)
}