import { useState } from "react";
import styled from "styled-components";
import Price from "../Api/Price";
import End from "../End/End";


const Button = styled.button`
  color: #fef4f7;
  background-color:#4169e1;
  font-size: 1em;
  border: 2px solid palevioletred;
  padding: 5px 5px 5px 5px;
  border-radius: 9px;
  border-style: none;
  margin-left:60px;
  margin-top: 60px;
`;


 function PayNow() {
    const [state,SetState]=useState(true);
    const handleClick =()=>{
       SetState(!state)
    }
  return (
    <div>
        {state? <Price/>:<End/>}
      {state? <Button onClick={handleClick}>Pay Now</Button>:null} // use Handling Events
    </div>
  )
}
export default PayNow;