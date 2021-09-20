import React, { useContext } from 'react'
import { ShopContext } from '../Context'
import { AddToCart } from './AddToCart'

export const ProductList = () => {
  const { products, loadingProducts, errorLoadingProducts} = useContext(ShopContext)
  if (loadingProducts) return <p>Loading products...</p>
  if (errorLoadingProducts) return <p>Error loading products</p>

  return <div className="grid grid-cols-4 gap-3" style={{width: '1000px'}}>
    {products.products.items.map((product) => (
    product.variants.map(variant => (
      <div key={variant.id} className="bg-white shadow-lg p-3">
        <img src={product?.featuredAsset?.preview}/>
      <p>{variant.name}</p>
      <p>{variant.price}</p>
      <AddToCart variant={variant}/>
    </div>
    ))
  ))}
  </div>
}
