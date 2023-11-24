import React, { useContext } from 'react'
import './cartItem.css'
import { shopContext } from '../../context/ShopContext'
import remove_icon from '../Assets/cart_cross_icon.png'
const CartItem = () => {
    const {getToatalCartAmount, all_product, cartItem, addToCard, removeFromCard} = useContext(shopContext)

  return (
    <div className='cartitem'>
      <div className="cartitem-formate-main">
       <p>Product</p>
       <p>Title</p>
       <p>Price</p>
       <p>Quantity</p>
       <p>Total</p>
       <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e)=>{
        if(cartItem[e.id]>0)
        {
            return  <div>
              <div className="cartitem_formate cartitem-formate-main">
                  <img src={e.image} alt="" className='carticon-product-icon' />
                  <p>{e.name}</p>
                  <p>${e.new_price}</p>
                  <button className="cartitem-quantity">{cartItem[e.id]}</button>
                  <p>${e.new_price*cartItem[e.id]}</p>
                  <img className='remove' src={remove_icon} onClick={()=>{removeFromCard(e.id)}} alt="" />
              </div>
              <hr />
            </div>
        }
        return null
      })}
      <div className='cartitem-down'>
      <div className="cartitem-total">
        <h1>Cart Totals</h1>
        <div>
            <div className="cartitem-total-item">
                <p>Subtatal</p>
                <p>${getToatalCartAmount()}</p>
            </div>
            <hr />
            <div className="cartitem-total-item">
                <p>Shipping Fee</p>
                <p>Free</p>
            </div>
            <hr />
            <div className="cartitem-total-item">
                <h3>Total</h3>
                <h3>${getToatalCartAmount()}</h3>
            </div>
        </div>
        <button>Proceed to Checkout</button>
      </div>
      <div className="cartitem-promocode">
        <p>If you have promo code enter here</p>
        <div className="cartitem-promobox">
            <input type="text" placeholder='enter code' />
            <button>Submit</button>
        </div>
      </div>
      </div>
    </div>
    
  )
}

export default CartItem