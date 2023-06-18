
import Images from '../Images/index'
const { createStore } = require("redux");

const store = createStore((state, action) => {


  switch (action.type) {
    case 'ADD_TO_CART':
    if (state.cart.some(product => product.id === action.payload.id)) {
      return {
          ...state,
          cart: [
              ...state.cart.map(item => {
                  if (item.id === action.payload.id) {
                      return {
                          ...item,
                          count: item.count + 1,
                          newPrice: item.newPrice + item.newPrice / item.count
                      }
                  }
              })
          ]
      }
  } else {
      return {
          ...state,
          cart: [
              ...state.cart,
              {
                  ...state.productData.find(el => el.id === action.payload.id),
                  count: 1,

              }
          ]
      }
  }

  case 'plusItem':
    return {
      ...state,
      cart: [
          ...state.cart.map(item => {
              if (item.id === action.payload.id) {
                  return {
                      ...item,
                      count: item.count + 1,
                      newPrice: item.newPrice + item.newPrice / item.count
                  }
              }
              return item
          })
      ]
  }

  case 'minusItem':
    return {
      ...state,
      cart:[
        ...state.cart.map(item => {
          if(item.id === action.payload.id && item.count > 1) {
            return {
              ...item,
                      count: item.count - 1,
                      newPrice: item.newPrice - item.newPrice / item.count
            }
          }
          return item
        })
      ]
    }

    case 'deleteItem':
      return {
        ...state,
        cart: [
          ...state.cart.filter(item => item.id !== action.payload.id)
        ]
      }
      case 'set_Form_Info':
        return {
          ...state.formInfo,
          formInfo: action.payload
        }

      case 'toggleInput':
        const {name, value} = action.payload
        return {
          ...state.formInfo,
          [name]:value
        }
     
        
    default:
      return state
  }
}, {
   productData: [
    {
      id: '1',
      title: 'CHAIR',
      description: 'Minimal LCD chair',
      newPrice: 180,
      oldPrice: 250,
      img: Images.product6,
    },
    {
      id: '2',
      title: 'SOFA',
      description: 'Modern Sofa',
      newPrice: 120,
      oldPrice: 150,
      img: Images.product1,
    },
    {
      id: '3',
      title: 'SOFA',
      description: 'Microfiber Sofa',
      newPrice: 130,
      oldPrice: 150,
      img: Images.product2,
    },
    {
      id: '4',
      title: 'TABBLE',
      description: 'Wood Cofee Tables',
      newPrice: 100,
      oldPrice: 120,
      img: Images.product3,
    },
    {
      id: '5',
      title: 'CHAIR',
      description: 'Acacia Wood Club Chairs',
      newPrice: 100,
      oldPrice: 120,
      img: Images.product4,
    },
    {
      id: '6',
      title: 'BENCH',
      description: 'Amalia Cowhide Bench',
      newPrice: 130,
      oldPrice: 150,
      img: Images.product5,
    },
    {
      id: '7',
      title: 'STORAGE',
      description: 'Juno-Hinged Lid Storage',
      newPrice: 180,
      oldPrice: 250,
      img: Images.product7,
    },
    {
      id: '8',
      title: 'FURNITURE',
      description: 'Delicia 3 Piece Living Room',
      newPrice: 120,
      oldPrice: 150,
      img: Images.product8,
    },
  ],
   cart: [],
   
   formInfo:{
      firstName: '',
      lastName: '',
      password: ''
   }
})
export default store
export const selectCart = state => state.cart
export const selectProduct = state => state.productData
export const selectFormInfo = state => state.formInfo

export const ADD_TO_CART = (id) => {
  return {
    type: 'ADD_TO_CART',
    payload: id
  }
}
export const plusItem = (id) => {
  return{
    type: 'plusItem',
    payload: id
  }
}
export const minusItem = (id) => {
  return {
    type: 'minusItem',
    payload: id
  }
}
export const deleteItem = (id) => {
  return {
    type: 'deleteItem',
    payload: id
  }
}

export const setFormInfo = (formInfo) => {
  return {
    type: 'set_Form_Info',
    payload: formInfo
  }
}
export const toggleInput = (value) => {
  return {
    type: 'toggleInput',
    payload: value
  }
}
