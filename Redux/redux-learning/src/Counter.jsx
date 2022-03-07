import React from 'react';
import { useState } from 'react';
import { useDispatch } from "react-redux";
import { increment, decrement } from './redux/ducks/counter';

const Counter = (props) => {
    const { name } = props;

    const dispatchAction = useDispatch();
    const [votes, setVotes] = useState(0);

    const handleIncrement = () => {
        dispatchAction(increment());
        setVotes(oldVotes => oldVotes + 1);
    }
    const handleDecrement = () => {
        dispatchAction(decrement());
        setVotes(oldVotes => oldVotes - 1);
    }

    return (
        <div style={{ backgroundColor: "#e4e4e4", margin: "10px auto", width:"50%" }}>
            <br/>
            <h2>{name}</h2>
            <h3>Votes : {votes}</h3>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <button onClick={handleIncrement}> + </button>
                <button onClick={handleDecrement}> - </button>
            </div>
            <br/>
        </div>
    )
}

export default Counter;