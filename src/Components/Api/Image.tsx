import{ useEffect, useState} from 'react'
import styled from 'styled-components';
import instance from './Config';
import ImageProps from './ImageProps';


const Blog = styled.div`
display: grid; 
grid-template-columns: repeat(1, minmax(0, 1fr)); 
gap: 2.5rem; 

@media (min-width: 768px) { 
  grid-template-columns: repeat(3, minmax(0, 1fr)); 
 }
@media (min-width: 1024px) { 
   }
   `;


const Section = styled.div`
width: 100%; 
padding-left: 1.25rem;
padding-right: 1.25rem; 
height: 700px;
`

     
function Image() {
      
const[images,setImages]=useState([]);

     useEffect(()=>{
          getData();
      },[]);
//API call for get Images
const getData = async () => {

  const res = await instance.get("/fundraising");
  console.log(res);
  setImages(res.data.data); 
   }
  
     return (
      <Section>
      <Blog>
    
      {images.map((image:any)=>  //Getting six cards using one card ,Viewing card list
       <ImageProps key={image.id} {...image}/>
        )
       
        }
      
    </Blog>
    </Section>
  )
}
export default Image;