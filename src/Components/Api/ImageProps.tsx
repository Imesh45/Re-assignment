import { useState } from "react";
import styled from "styled-components";
import PayNow from "../Pay/PayNow";
import './All.css'


const Card = styled.div`
padding-left: 50px;
padding-right: 50px;
padding-top: 40px;
padding-bottom: 10px;
width: 40%;
height:90%;
border-radius: 1.5rem; 
box-shadow: 0 4px 6px -1px #15eb52, 0 2px 4px -1px #49e610; 
 `
const Profile = styled.div`
padding-left:40PX;
font-family: Arial, Helvetica, sans-serif;
font-weight:700;
`

const Button = styled.button`
  font-size: 1em;
  border: 2px solid palevioletred;
  padding: 5px 5px 5px 5px;
  border-radius: 9px;
  border-style: solid;
  background-color:#d83f3f;
 
`

 



function ImageProps(props: { urls: { thumb: string | undefined }; title: string | undefined ; target_amount: string | undefined }) {
  const [state,SetState]=useState(true);
  const handleClick =()=>{
     SetState(!state)
  }
   
  return (
    
    <Card>
      /*create card structure 
     {state?<img src={props.urls.thumb} alt={props.title}/>:<PayNow/>}
     <Profile> {state? <p>Target :${props.target_amount}</p>:null} </Profile> 
     <Profile>{state? <Button onClick={handleClick}>Donate Now</Button>:null}</Profile>  
    
    
      </Card>
      
  )
}

export default ImageProps;