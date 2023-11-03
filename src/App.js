import logo from './logo.svg';
import './App.css';
import Card from './componants/Cards/Card';
import axios from 'axios';
import star from "./images/star.png"
import { useState, useEffect } from 'react';



function App() {
  const [productData,setProductData] = useState([])

  const getData = async ()=>{
   const fetchData = await axios.get('https://fakestoreapi.com/products')
   try{
    setProductData(fetchData.data)
   }catch(err){
    console.log(err);
   }
  
  }
  useEffect(()=>{
  getData()
  },[])
  return (
    <div className='main'>
      {
        productData.map((e,i)=>{
          const {title, image, description, rating, price,} = e
          return <Card title={title} image={image} description={description} price={price} rating={rating.rate} key={i} star={star}  />
        })
      }
      
    </div>
  );
}

export default App;
