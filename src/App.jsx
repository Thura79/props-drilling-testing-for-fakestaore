import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Products from './component/Products'
import Nav from './component/Nav'

const App = () => {
  const [items, setItems] = useState([]);

  const fetchData = async() => {
    const api = await fetch('https://fakestoreapi.com/products');
    const data = await api.json();
    setItems(data)
  }

  useEffect(() => {
    fetchData();
  }, [])


  return (
    <div className=' container mx-auto'>
      <Nav items={items} setItems={setItems} /> 
      <Routes>
        <Route path='/' element={<Products items={items} setItems={setItems} />} />
      </Routes>
    </div>
  )
}

export default App