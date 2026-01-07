import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { id } from 'date-fns/locale';

const App = () => {

  const [productData, setProductData] = useState([]);

 const getData = async() => {
      const response = await axios.get('https://fakestoreapi.com/products')
      setProductData(response.data);
 }

  const getfirstData = async() => {
      const response = await axios.get(`https://fakestoreapi.com/products/${id}`)
      console.log(response.data);
 }

 useEffect(() => {
    getData();
  
 }, [])

  return (
     <div className="allProducts">
    {productData.map((elem, idx) => {
      return (
        <a className="product" key={idx} href="">
          <div>
            <img src={elem.image} alt={elem.title} />
            <h2>{elem.title}</h2>
          </div>
        </a>
      );
    })}
  </div>
   
  )
}

export default App
