import React, { useState } from 'react';
import styled from 'styled-components';
import Cardcollection from './Components/Cardcollection';
import Topbar from './Components/Topbar/Topbar';
import './Components/Dark theme/Theme.css'

const Top = styled.div`
margin-top: 10px;
 `
 const Bottom = styled.div`
 margin-top: 100px;

 `
 const Toggle = styled.div`
 top:0px;
 right: 0px;;
 padding: 1px 1px;
 
 `
 
function App() {
  const[theme,setTheme]=useState(true)
  const handleClick=()=>{
    setTheme(!theme)

  }
  return (

        <React.Fragment>
     <Toggle><button onClick={handleClick} className='changetheme'>{theme? 'Dark':'Light'}</button></Toggle>      
          <div className={'dark ' +(theme ? 'light ':'')}>
          <Top><Topbar/></Top> 
          <Bottom><Cardcollection /></Bottom>
        
      </div>
      </React.Fragment>
     
     
  );
}

export default App;
