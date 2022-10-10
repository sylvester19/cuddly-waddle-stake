import React, { useState, useEffect } from "react";
import { ethers } from 'ethers';
import { tokenABI, tokenAddress } from "../../tokenabi";





export default function APR(props) {


    return (
        <>{props.pool} %</>
    );

}