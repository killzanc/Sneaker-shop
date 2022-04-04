import React from 'react'


export default function Card() {
    return (
            <div className="card d-flex flex-column">
            <img width={18} height={18} src="/img/heart.svg" alt="" />
            <img width={133} height={112} src="img/sneakers/1.jpg" alt="" />
            <h5>Nike Blazer Mid Suede</h5>
            <div className='d-flex justify-between align-center'>
              <div className='d-flex flex-column'>
                <span>ЦЕНА:</span>
                <b>12 999 руб.</b>
              </div>
              <button className="button"><img width={11} height={11} src="img/plus.svg" alt="plus" /></button>
            </div>
          </div>
    )
}