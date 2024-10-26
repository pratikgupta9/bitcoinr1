import React, { useEffect, useState } from "react";
import Axios from "axios"
import { useNavigate } from 'react-router-dom';
export default function MainPage() {
    const navigate = useNavigate();
    const [allList, setAllList] = useState([])
    useEffect(() => {
        console.log("from use effect")
        Axios.get("https://api.coinlore.net/api/tickers/?start=0&limit=20").then((response) => {
            setAllList(response.data['data'])
            console.log("inside then of axios", response.data['data'])


        }).catch((err) => {
            console.log("inside error of axios", err)
        })
    }, [])
    const handleClick = (currency) => {
        navigate(`/currency/${currency.id}`);
    }
    return (
        <>
            <div >
                <div className="mainContent" >
                    {
                        allList.map((singleList, key) => {
                            return (
                                <div  className="doc" onClick={() => {
                                    handleClick(singleList)
                                }}>
                                    <h1>{singleList.symbol}</h1>
                                    <h1>{singleList.price_usd}</h1>
                                </div>
                            )
                        }

                        )

                    }
                </div>

            </div>
        </>
    )
}