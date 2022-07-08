import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deposit, selectBalance, selectUser, withdraw, userAsync } from '../reducers/walletSlice';

const Wallet = () => {
   
    const user = useSelector(selectUser);
    const balance = useSelector(selectBalance);
    const [currentAmount, setCurrentAmount] = useState(0);
    const [id, setId] = useState(0);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(userAsync(3));
    }, [])

    return (
        <div>
            <img src={user.avatar} alt='avatar' />
            <h1>{user.first_name} Wallet</h1>
            <input
                type="number"
                value={id}
                placeholder="1 to 12"
                onChange={e => setId(parseInt(e.target.value))}
            />
            <button onClick={() => dispatch(userAsync(id))}>Get User</button>
            
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