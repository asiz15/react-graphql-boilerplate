import {useQuery, gql, useMutation} from '@apollo/client'
import React from 'react'
import { useContext } from 'react'
import { ShopContext } from '../Context'
import { RemoveButton } from './RemoveButton'

const REMOVE_FROM_CART = gql`
mutation RemoveItemFromOrder($orderLineId: ID!) {
  removeOrderLine(orderLineId:$orderLineId){
  __typename
}
}
`

export const Cart = () => {
  const {cart, loadingCart, errorLoadingCart} = useContext(ShopContext)
  if (loadingCart) return <p>Loading shopping Cart...</p>
  if (errorLoadingCart) return <p>Error loading cart :(</p>

    return <div className="flex-col p-4">
    { cart.activeOrder ? 
    <>
      <h2>Estado: { cart?.activeOrder.state }</h2>
    <h2>Total: ${ cart?.activeOrder.total.toLocaleString() } { cart?.activeOrder?.currencyCode }</h2>
    <ul className="mt-3">
      { cart?.activeOrder.lines.map((line,index) => (
        <li key={index} className="flex flex-col p-3 bg-green-300 mb-3">
          <h6>id:{line.id}  { line.productVariant.name }</h6>
          <span>{ line?.quantity } * ${ line.productVariant.price.toLocaleString() }</span>
          <RemoveButton line={line}/>
        </li>
      )) }
    </ul>
    </> :
    'El carro esta vacío' 
    }
  </div>
}
