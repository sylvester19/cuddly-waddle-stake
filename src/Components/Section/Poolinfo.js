import { ethers } from 'ethers';
import { stakingabi, stakeAddress } from "../../stakingabi";


export const Poolinfo = async (props) => {
    const stakeContract = new ethers.Contract(stakeAddress, stakingabi, props.signer);
    const noofPools = await stakeContract.poolInfo(props.pool)
}