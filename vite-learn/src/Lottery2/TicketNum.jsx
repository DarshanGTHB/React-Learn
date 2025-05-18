import React from 'react'

let style ={
  border : '1px solid purple ',
  borderRadius : '50px',
  textAlign : 'center',
  padding : "10px 10px 0 10px", 
}

const TicketNum = ({number}) => {
  return (
    <span className='lottery-num' style={style}>
        {number}
    </span>
  )
}

export default TicketNum