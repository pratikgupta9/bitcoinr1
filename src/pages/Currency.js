import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import Axios from "axios"
export default function Currency() {
    const { id } = useParams();
    const [currencyInfo, setCurrencyInfo] = useState({})
    useEffect(() => {
        console.log("inside params", id)
        Axios.get(`https://api.coinlore.net/api/ticker/?id=${id}`).then((response) => {
            console.log("inside response object", response)
            setCurrencyInfo(response.data[0])
        }).catch(err => {
            console.log("inside error of use effect in currency page", err)
        })

    }, [])
    return (
        <>
            <div className="mainContent">
                <div className="currency">
                    <h1>Symbol: {currencyInfo.symbol}</h1>
                    <h1>Price: {currencyInfo.price_usd}</h1>
                    <h1>Rank: {currencyInfo.rank}</h1>
                    <h1>Volume: {currencyInfo.volume24}</h1>
                </div>

            </div>
            {/* <div>
        <h1>hello from Currency page</h1>
    </div> */}
        </>
    )
}