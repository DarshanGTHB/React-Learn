import './App.css'
import Lottery from './Lottery'
import LotteryGame from './Lottery2/LotteryGame'
import Ticket from './Lottery2/Ticket'
import TicketNum from './Lottery2/TicketNum'
import { sumOfArray } from './Lottery2/utils'
import LudoBoard from './LudoBoard'

function App() {
  let winningCondition = (arr) => {
    let sum = sumOfArray(arr);
    return arr.every((num) => num === arr[0])
    //return sum === 15;
  }
  return <>
    {/* <LudoBoard></LudoBoard> */}
    {/* <Lottery/> */}
    <LotteryGame size={3} winningCondition={winningCondition}></LotteryGame>
  </>
}

export default App
