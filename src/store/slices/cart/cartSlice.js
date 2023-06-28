import { createSlice } from "@reduxjs/toolkit"
import { initialProductData } from "./cartUI"


// export const initialCart = []
// export const cartReducer = (state = initialCart, action) => {
//   switch (action.type) {
//     case 'ADD_TO_CART':
//       if (state.some(product => product.id === action.payload.id)) {
//         return [
//           ...state,
//           {
//             ...state.map(item => {
//               if (item.id === action.payload.id) {
//                 return {
//                   ...item,
//                   count: item.count + 1,
//                   newPrice: item.newPrice + item.newPrice / item.count
//                 }
//               }
//             })

//           }
//         ]



//       } else {
//         return [
//           ...state,
//           {
//             ...initialProductData.find(el => el.id === action.payload.id),
//             count: 1,

//           }
//         ]

//       }
//     case 'plusItem':
//       return [
//         ...state.map(item => {
//           if (item.id === action.payload.id) {
//             return {
//               ...item,
//               count: item.count + 1,
//               newPrice: item.newPrice + item.newPrice / item.count
//             }
//           }
//           return item
//         })
//       ]
//     case 'minusItem':
//       `return [
//         ...state.map(item => {
//           if (item.id === action.payload.id && item.count > 1) {
//             return {
//               ...item,
//               count: item.count - 1,
//               newPrice: item.newPrice - item.newPrice / item.count
//             }
//           }
//           return item
//         })
//       ]`
//     case 'deleteItem':
//       return  [
//           ...state.filter(item => item.id !== action.payload.id)
//         ]

//     default:
//       return state
//   }
// }
// export const selectCart = state => state.cart

// export const addToCart = (payload) => {
//   return {
//     type: 'ADD_TO_CART',
//     payload
//   }
// }
// export const plusItem = (id) => {
//   return {
//     type: 'plusItem',
//     payload: id
//   }
// }
// export const minusItem = (id) => {
//   return {
//     type: 'minusItem',
//     payload: id
//   }
// }
// export const deleteItem = (id) => {
//   return {
//     type: 'deleteItem',
//     payload: id
//   }
// }

export const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    add_To_Cart(state, { payload }) {
      if (state.some(product => product.id === payload)) {
        return [
          ...state,
          {
            ...state.map(item => {
              if (item.id === payload) {
                return {
                  ...item,
                  count: item.count + 1,
                  newPrice: item.newPrice + item.newPrice / item.count
                }
              }
            })

          }
        ]

      } else {
        return [
          ...state,
          {
            ...initialProductData.find(el => el.id === payload),
            count: 1,

          }
        ]

      }
    },
    plusItems(state, { payload }) {
      return [
        ...state.map(item => {
          if (item.id === payload) {
            return {
              ...item,
              count: item.count + 1,
              newPrice: item.newPrice + item.newPrice / item.count
            }
          }
          return item
        })
      ]
    },
    minusItems(state, { payload }) {
      return [
        ...state.map(item => {
          if (item.id === payload && item.count > 1) {
            return {
              ...item,
              count: item.count - 1,
              newPrice: item.newPrice - item.newPrice / item.count
            }
          }
          return item
        })
      ]
    },
    deleteItems(state, { payload }) {
      return [
        ...state.filter(item => item.id !== payload)
      ]
    }
  }
})

export const selectCart = state => state.cart

export const cartReducer = cartSlice.reducer

export const { add_To_Cart, plusItems, minusItems, deleteItems } = cartSlice.actions