import React from 'react'

export default function Drawer() {
  return (
    <div style={{ display: 'none' }} className="overlay">
      <div className="drawer p-30">
        <h3 className='mb-30'>Корзина</h3>
        <div className="items">
          <div className="cartItem d-flex align-center mb-20">
            <div style={{ backgroundImage: 'url(/img/sneakers/1.jpg)' }} className="cartItemImg"></div>
            <div className='mr-10'>
              <p className='mb-5'>Nike Blazer Mid Suede</p>
              <b>12 999 руб.</b>
            </div>
            <img src="/img/btn-remove.svg" alt="" />
          </div>
          <div className="cartItem d-flex align-center mb-20">
            <div style={{ backgroundImage: 'url(/img/sneakers/1.jpg)' }} className="cartItemImg"></div>
            <div className='mr-10'>
              <p className='mb-5'>Nike Blazer Mid Suede</p>
              <b>12 999 руб.</b>
            </div>
            <img src="/img/btn-remove.svg" alt="" />
          </div>
        </div>
        <div className="cartTotalBlock">
          <ul>
            <li className='d-flex'>
              <span>Итого:</span>
              <div></div>
              <b>26 000 руб.</b>
            </li>
            <li className='d-flex'>
              <span>НДС 5%:</span>
              <div></div>
              <b>1075 руб.</b>
            </li>
          </ul>
          <button className='greenButton'>Оформить заказ</button>
        </div>
      </div>
    </div>
  )
}
