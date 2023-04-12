import React from 'react'
import ProductCarts from './ProductCarts'

const Products = ({items}) => {
  return (
    <div className=' flex flex-wrap items-center justify-between md:justify-around gap-2 md:gap-5 my-5 md:my-10 lg:my-10'>
      {items.map(item => <ProductCarts key={item.id} {...item} />)}
    </div>
  )
}

export default Products