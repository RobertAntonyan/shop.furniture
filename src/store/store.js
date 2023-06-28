
// import Images from '../Images/inde
import { configureStore } from '@reduxjs/toolkit';
import { blogDataReducer, blogReducer, initialBlogData } from './slices/blog/blogSlice';
import { cartReducer, initialCart } from './slices/cart/cartSlice';
import { initialProductData } from './slices/cart/cartUI';
import { initialCurrentUser, loginReducer } from './slices/login/loginSlice';
import { initialPostItem, postItemReducer } from './slices/postItem/postItemSlice';
import { formInfoReducer, initialFormInfo, registrReducer } from './slices/registr/registrSlice';
const { createStore, combineReducers } = require("redux");



// const store = createStore(
//   combineReducers({
//     formInfo: registrReducer,
//     currentUser: loginReducer,
//     cart: cartReducer,
//     blogData: blogReducer,
//     postItem: postItemReducer
//   }),

// {
//   // (state, action) => {
//   //      switch (action.type) {
//   // case 'ADD_TO_CART':
//   //   if (state.cart.some(product => product.id === action.payload.id)) {
//   //     return {
//   //       ...state,
//   //       cart: [
//   //         ...state.cart.map(item => {
//   //           if (item.id === action.payload.id) {
//   //             return {
//   //               ...item,
//   //               count: item.count + 1,
//   //               newPrice: item.newPrice + item.newPrice / item.count
//   //             }
//   //           }
//   //         })
//   //       ]
//   //     }
//   //   } else {
//   //     return {
//   //       ...state,
//   //       cart: [
//   //         ...state.cart,
//   //         {
//   //           ...state.productData.find(el => el.id === action.payload.id),
//   //           count: 1,

//   //         }
//   //       ]
//   //     }
//   //   }

//   // case 'plusItem':
//   //   return {
//   //     ...state,
//   //     cart: [
//   //       ...state.cart.map(item => {
//   //         if (item.id === action.payload.id) {
//   //           return {
//   //             ...item,
//   //             count: item.count + 1,
//   //             newPrice: item.newPrice + item.newPrice / item.count
//   //           }
//   //         }
//   //         return item
//   //       })
//   //     ]
//   //   }

//   // case 'minusItem':
//   //   return {
//   //     ...state,
//   //     cart: [
//   //       ...state.cart.map(item => {
//   //         if (item.id === action.payload.id && item.count > 1) {
//   //           return {
//   //             ...item,
//   //             count: item.count - 1,
//   //             newPrice: item.newPrice - item.newPrice / item.count
//   //           }
//   //         }
//   //         return item
//   //       })
//   //     ]
//   //   }

//   // case 'deleteItem':
//   //   return {
//   //     ...state,
//   //     cart: [
//   //       ...state.cart.filter(item => item.id !== action.payload.id)
//   //     ]
//   //   }


//   // case 'set_Form_Info':
//   //   return {
//   //     ...state,
//   //     formInfo: action.payload
//   //   }

//   // case 'toggleInput':
//   //   const { name, value } = action.payload
//   //   return {
//   //     ...state,
//   //     [name]: value
//   //   }

//   // case 'toggleUser':
//   //   return {
//   //     currentUser: [
//   //       {
//   //         ...state
//   //       },
//   //     ]
//   //   }

//   // default:
//   //   return state
//   // }


//   //  },

// }

//   {
//     productData: initialProductData,
//     cart: initialCart,

//     formInfo: initialFormInfo,
//     currentUser: initialCurrentUser,

//     blogData: initialBlogData,
//     postItem: initialPostItem,
//   },window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),)
// export default store


// export const selectCart = state => state.cart
// export const selectProduct = state => state.productData
//  export const selectFormInfo = state => state.formInfo
// export const selectCurrentUser = state => state.currentUser
// export const selectBlogData = state => state.blogData
// export const selectPostItem = state => state.postItem

// export const ADD_TO_CART = (id) => {
//   return {
//     type: 'ADD_TO_CART',
//     payload: id
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

// export const setFormInfo = (value) => {
//   return {
//     type: 'set_Form_Info',
//     payload: value
//   }
// }
// export const toggleInput = (value) => {
//   return {
//     type: 'toggleInput',
//     payload: value
//   }
// }
// export const toggleUser = (value) => {
//   return {
//     type: 'toggleUser',
//     payload: value
//   }
// }



const store = configureStore({
  reducer: {
    cart: cartReducer,
    formInfo: formInfoReducer,
    currentUser: loginReducer,
    blogData: blogDataReducer,
    postItem: postItemReducer,
  }
})
export default store