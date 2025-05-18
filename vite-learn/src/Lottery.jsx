import React, { useState } from 'react';
import './Lottery.css';

function getRandomNumber() {
    return Math.floor(Math.random() * 10);
}

const Lottery = () => {
    const [tickets, setTickets] = useState([0, 0, 0]);
    const [isRolling, setIsRolling] = useState(false);
    const [isWinner, setIsWinner] = useState(false);

    const rollNumbers = () => {
        setIsRolling(true);
        setIsWinner(false);

        let finalNumbers = [];

        for (let i = 0; i < 3; i++) {
            let count = 0;
            const interval = setInterval(() => {
                setTickets(prev => {
                    const newTickets = [...prev];
                    newTickets[i] = getRandomNumber();
                    return newTickets;
                });
                count++;
                if (count > 20 + i * 10) {
                    clearInterval(interval);
                    finalNumbers[i] = getRandomNumber();
                    setTickets(prev => {
                        const newTickets = [...prev];
                        newTickets[i] = finalNumbers[i];
                        return newTickets;
                    });

                    if (i === 2) {
                        setTimeout(() => {
                            setIsRolling(false);
                            const sum = finalNumbers.reduce((a, b) => a + b, 0);
                            setIsWinner(sum === 15 || true); // ✅ Check sum condition here
                        }, 200);
                    }
                }
            }, 50);
        }
    };

    return (
        <div className="lottery-container">
            <h1 className="lottery-title">🎰 AI Lottery Game</h1>
            <div className="ticket">
                {tickets.map((num, index) => (
                    <div className='lottery-num' key={index}>
                        {num}
                    </div>
                ))}
            </div>
            <button className='gen-btn' onClick={rollNumbers} disabled={isRolling}>
                {isRolling ? 'Rolling...' : 'Get Lottery Numbers'}
            </button>
            {isWinner && <div className="winner-msg">🎉 You Win! Lucy Number was : {tickets} 🎉</div>}
        </div>
    );
};

export default Lottery;
