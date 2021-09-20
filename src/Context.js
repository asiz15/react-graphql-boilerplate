import React, { createContext } from 'react'
import {useQuery, gql, useMutation} from '@apollo/client'

import { ACTIVE_ORDER, GET_PRODUCTS } from './graphql/queries'

export const ShopContext = createContext()

export const ShopProvider = ({children}) => {

  const {loading: loadingProducts, error:errorLoadingProducts, data:products} = useQuery(GET_PRODUCTS)
  const {loading: loadingCart, error:errorLoadingCart, data:cart} = useQuery(ACTIVE_ORDER)

  return (
    <ShopContext.Provider value={{
      products,
      loadingProducts,
      errorLoadingProducts,
      loadingCart,
      errorLoadingCart,
      cart
    }}>
      { children }
    </ShopContext.Provider>
  )
}
