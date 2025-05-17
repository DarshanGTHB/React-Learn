import React, { useState } from 'react'

const LudoBoard = () => {

    const [moves, setMoves] = useState({
        blue: 0,
        green: 0,
        red: 0,
        yellow: 0
    });

    const incrementMove = (color) => {
        setMoves((prevMoves) => ({
            ...prevMoves,
            [color]: prevMoves[color] + 1
        }));
    }

    const decrementMove = (color) => {
        setMoves((prevMoves) => ({
            ...prevMoves,
            [color]: prevMoves[color] - 1
        }));
    }

  return (
    <>
    <h1>Game Here</h1>
    <div className="board">
        <h2 style={{color:'blue'}} >blue move : {moves.blue} </h2>
        <button onClick={()=>incrementMove('blue')}> + </button>
        <button onClick={() =>decrementMove('blue')}> - </button>
        {/* <h2>Green moves</h2>
        <button> + </button>
        <button> - </button>
        <h2>Red moves</h2>
        <button> + </button>
        <button> - </button>
        <h2>Yellow moves</h2>
        <button> + </button>
        <button> - </button> */}
        <h2 style={{color:'green'}} >green move : {moves.green} </h2>
        <button onClick={()=>incrementMove('green')}> + </button>
        <button onClick={() =>decrementMove('green')}> - </button>
        <h2 style={{color:'red'}} >red move : {moves.red} </h2>
        <button onClick={()=>incrementMove('red')}> + </button>
        <button onClick={() =>decrementMove('red')}> - </button>
        <h2 style={{color:'yellow'}} >yellow move : {moves.yellow} </h2>
        <button onClick={()=>incrementMove('yellow')}> + </button>
        <button onClick={() =>decrementMove('yellow')}> - </button>

    </div>
    </>
  )
}

export default LudoBoard