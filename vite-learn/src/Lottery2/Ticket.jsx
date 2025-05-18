import React from 'react'
import TicketNum from './TicketNum'

let style = {
    display: 'flex',
    justifyContent: 'space-evenly',
    width: '100%',
    height: '100%',
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#fff',
    // backgroundColor: '#000',
    borderRadius: '10px',
    padding: '10px',
    margin: '10px 0'
}

const Ticket = ({ticket}) => {
  return (
    <>
    <h1>Ticket</h1>
    <div className="ticket-div" style={style}>
        {ticket.map((num, index) => (    
        <TicketNum number={num} key={index}></TicketNum>
    ))}

    </div>
    </>
  )
}

export default Ticket