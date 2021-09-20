import { useMutation } from '@apollo/client'
import React from 'react'
import { ADD_TO_CART } from '../graphql/mutations'
import { ACTIVE_ORDER } from '../graphql/queries'

export const AddToCart = ({ variant }) => {
  const [addToCart, {order, loadingOrder, errorOnOrder}] = useMutation(
    ADD_TO_CART,
    {
      refetchQueries: [ACTIVE_ORDER],
    },
  )
  const handleAddToCart = () => {
    addToCart({variables: { quantity: 1, productVariantId: variant.id }})
  }
  return (
    <button className="p-2 bg-green-300  shadow-md" onClick={handleAddToCart}>Add to cart</button>
  )
}
