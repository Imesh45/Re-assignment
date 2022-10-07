import styled from "styled-components";

const Sucess = styled.div`
font-size: larger;
font-weight: 500;

`

function End() {
  return (
    <>
    <Sucess> 
      <p> You have successfully</p>
       <p>made the donation!</p>  
    </Sucess>
    </>
  )
}
export default End;