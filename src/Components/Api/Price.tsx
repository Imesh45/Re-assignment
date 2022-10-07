import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import instance from './Config';

const List = styled.div`
 font-family: Arial, Helvetica, sans-serif;
 font-weight: 700;
 font-size: 18px;
 padding: 5px 5px 5px 5px;

`



function Price() {
    const[data,setData]=useState([]);


     useEffect(()=>{
          getData();
      },[]);

const getData = async () => {

  const res = await instance.get("/amounts");
  console.log(res);
  setData(res.data.data); 
   }
 
  
  return (
    
     <>
     {data.map((detail:any)=>
       <List><input type="checkbox"/>${detail}</List>
       )}  
        
      </>
    
  )
}
export default Price;