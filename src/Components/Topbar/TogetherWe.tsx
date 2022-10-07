import React from 'react'
import styled from 'styled-components';


const StyledParagraph =styled.div`

margin-left: 120px;
font-family: 'Circular Std';
font-style: normal;
font-weight: 900;
font-size: 38px;
line-height: 48px;
/* identical to box height */

`;


function Togetherwe() {
  return (
    <div>
      <StyledParagraph>Together We</StyledParagraph>     
    </div>
  );
}
export default Togetherwe;