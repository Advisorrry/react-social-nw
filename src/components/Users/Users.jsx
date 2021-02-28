import React from 'react'
import ava from '../../assets/img/ava.jpg'

export function Users() {
    return (      
            <div className='users'>
                <div className='users__paginator--buttons'>1 2 3</div>
                <div className='users__card'>
                    <div className='users__card--photo'>
                        <img src={ava} alt="" />
                        <p><button className='btn btn-primary'>Подписаться</button></p>
                    </div>
                    <div className="users__card--info">
                        dgdfgdgdfgd
                    </div>
                </div>
            </div>
        
    )
}
