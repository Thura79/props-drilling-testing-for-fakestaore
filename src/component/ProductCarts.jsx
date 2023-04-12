import React from 'react'

const ProductCarts = ({title, image, price}) => {
  return (
    <div className=' border rounded w-44 md:w-64 p-5 '>
        <div className=" flex flex-col gap-3">
            <img src={image} className=" block mx-auto w-20 h-20 md:w-44 md:h-44 mb-2 md:mb-5 object-contain  " />
            <h1 className=' truncate font-bold '>{title}</h1>
            <p>$ {price} </p>
            <div className=" flex flex-col md:flex-row md:gap-3 mt-auto">
                <button className=' border rounded px-2 py-1 md:w-36 bg-green-700 hover:bg-green-900 duration-500 text-sm  md:text-base md:p-2 text-white'>Add to Cart</button>
                <button className=' border rounded px-2 py-1 md:w-36 bg-green-700 hover:bg-green-900 duration-500 text-sm  md:text-base md:p-2 text-white'>Detail</button>
            </div>
        </div>
    </div>
  )
}

export default ProductCarts