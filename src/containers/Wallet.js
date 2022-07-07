import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deposit, selectBalance, selectUser, withdraw } from '../reducers/walletSlice';

const Wallet = () => {
   
    const user = useSelector(selectUser);
    const balance = useSelector(selectBalance);
    const [currentAmount, setCurrentAmount] = useState(0);
    const dispatch = useDispatch()

    return (
        <div>
            <h1>{user} Wallet</h1>
            <h2>Balance: Rp {balance.toLocaleString("ID")}</h2>
            <button onClick={() => dispatch(withdraw({amount: 10000}))}>Withdraw Rp 10.000</button>
            <button onClick={() => dispatch(deposit({amount: 10000}))}>Deposit Rp 10.000</button>
            <br /><br />
            <input
                type="number"
                value={currentAmount}
                onChange={e => setCurrentAmount(parseInt(e.target.value))}
            />
            <button onClick={() => dispatch(withdraw({amount: currentAmount}))}>Withdraw</button>
            <button onClick={() => dispatch(deposit({amount: currentAmount}))}>Deposit</button>
        </div>
    )
}

export default Wallet;