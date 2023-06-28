import { useDispatch, useSelector } from 'react-redux';
import { Garbage } from '../../SVGS/SVG';
import './CartItem.css'
import { deleteItems, minusItems, plusItems } from '../../store/slices/cart/cartSlice';

function CartItem({ id, img, title, description, newPrice, count }) {
const cart = useSelector(state => state.cart)
const dispatch = useDispatch()



const plusItem = (id) => {
    // setCart([
    //   ...cart.map(item => {
    //          if (item.id === id) {
    //       return {
    //         ...item,
    //         count: item.count + 1,
    //         newPrice: item.newPrice + item.newPrice / item.count
    //       }
    //     }
    //     return item
    //   })

    // ])
      dispatch(plusItems(id))

    }

   const minusItem = (id) => {
  //   setCart([
  //     ...cart.map(item => {
  //       if(item.id === id  && item.count > 1){
  //         return {
  //           ...item,
  //           count: item.count - 1,
  //           newPrice: item.newPrice -item.newPrice / item.count
  //         }
  //       }
  //       return item
  //     })
  //   ])
      dispatch(minusItems(id))
     

   }
  
  const deleteItem = (id) => {
    // setCart([
    //   ...cart.filter(item => item.id !== id)
    // ])
    dispatch(deleteItems(id))
  
  }


  return (
    <div className='cartItem'>

      <div className='CartImage' >
        <img src={img} alt={title} className='itemImg' />
      </div>

      <div className='cartFunction'>
        <div className='cartContainer'>
        <div className='CartInfo'>
          <button onClick={() => plusItem(id)}>+</button>
          <div className='countBlock'>
          <p className='itemCount'>{count}</p>
          </div>
          <button onClick={() => minusItem(id)}>-</button>
          <div onClick={() => deleteItem(id)}>
          <Garbage    />
          </div>
          </div>
        <div className='cartTitle'>

          <h4>{title}</h4>
          <p>{description}</p>
          <p className='cartPrice'>Price {newPrice} $</p>
        </div>

        </div>


      </div>

     </div>

  )
}

export default CartItem