import {gql} from '@apollo/client'

export const GET_PRODUCTS = gql`
  query Products {
    products {
      totalItems
      items {
        id
        name
        featuredAsset{
          preview
        }
        variants {
          id
          name
          price
        }
      }
    }
  }
`

export const ACTIVE_ORDER = gql`
  query ActiveOrder {
    activeOrder{
      code
      state
      active
      total
      currencyCode
      payments{
        method
      }
      
      lines{
        id
        productVariant{
          name
          id
          price
        }
        quantity
      }
    }
  }
`