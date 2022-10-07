import React from 'react'
import styled from 'styled-components';
import Headerbox from '../Get Start/Get Started';
import Togetherwe from './TogetherWe';

const Topic =styled.div`
margin-top:539px ;
text-align: center;
font-size: 80px;
font-weight: 900;

`


 function Topbar() {
  return (
    <React.Fragment>
      <Togetherwe/>
      <Headerbox/>
       <Topic>PROJECT</Topic>
    </React.Fragment>
  )
}

export default Topbar;