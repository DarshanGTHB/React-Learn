import React, { useState } from 'react'
import { getAllSame, getRandomInt, sumOfArray } from './utils';
import Ticket from './Ticket';
import '../Lottery.css';

const LotteryGame = ({size, winningCondition}) => {
    const [tickets, setTickets] = useState(getRandomInt(size));
    // let isWinner = sumOfArray(tickets) === winningSum;
    let isWinner = winningCondition(tickets);
    // isWinner = true; // For testing purposes, always set to true
    let handleGenerate = () => {
        setTickets(getRandomInt(size));
    }   
    let getWinningSum = () => {
        setTickets(getAllSame(size));
    }
  return (
    <div>
        <h1>Lottery Game</h1>
        <Ticket ticket={tickets}></Ticket>
        <button className='gen-btn' onClick={handleGenerate}>
            Generate Lottery Numbers
        </button>
        <br></br>
        <button className='gen-btn' onClick={getWinningSum}>
            Generate Winnig Lottery Numbers
        </button>
        <h2 className='winner-msg'>
            {isWinner ? '🎉 You are a Winner!' : 'Try Again!'}
        </h2>
    </div>
  )
}

export default LotteryGame  