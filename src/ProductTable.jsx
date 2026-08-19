import React from 'react'

const ProductTable = ({data}) => {
  return (
    
        <table className='border-2 border-black border-collapse m-4'>
          
      
    <tr>
      <th className="border border-black px-4 py-2">ID</th>
      <th className="border border-black px-4 py-2">Product Name</th>
      <th className="border border-black px-4 py-2">Price</th>
      <th className="border border-black px-4 py-2">Quantity</th>
    </tr>
     {data.map((prod) => (
            
            <tr key={prod.id} className='border-2 border-black'>
                <td className='border border-black px-4 py-2'>{prod.id}</td>
                <td className='border border-black px-4 py-2'>{prod.productName}</td>
                <td className='border border-black px-4 py-2'>{prod.price}</td>
                <td className='border border-black px-4 py-2'>{prod.qty}</td>
            </tr>
           
            ))}
        </table>    
    
  )
}

export default ProductTable