import React from 'react'
import { useMutation } from '@apollo/client'
import { REMOVE_FROM_CART } from '../graphql/mutations'
import { ACTIVE_ORDER } from '../graphql/queries'

export const RemoveButton = ({ line }) => {
  const [removeFromCart] = useMutation(
    REMOVE_FROM_CART,
    {
      refetchQueries: [ACTIVE_ORDER],
    },
  )
  const HandleRemoveFromCart = () => {
    removeFromCart({variables: { orderLineId: line.id }})
      .then(res => {
        console.log('item removed from cart')
      })
      .catch(err => {
        console.log('error while removing item from cart. Try again')
      })
  }
  
  return (
    <button className="bg-red-300 p-2" onClick={HandleRemoveFromCart}>X</button>
  )
}
