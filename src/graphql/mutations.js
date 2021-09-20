import { gql } from '@apollo/client'

export const ADD_TO_CART = gql`
  mutation AddItemToOrder($quantity: Int!, $productVariantId: ID!) {
    addItemToOrder(quantity: $quantity, productVariantId: $productVariantId) {
      __typename
    }
  }
` 
export const REMOVE_FROM_CART = gql`
mutation RemoveItemFromOrder($orderLineId: ID!) {
  removeOrderLine(orderLineId:$orderLineId){
  __typename
}
}
`