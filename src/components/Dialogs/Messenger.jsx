import React from 'react'
import Dialog from './Dialog'
import './messanger.scss'
import MessengerList from './MessengerList'

export function Messenger() {
    return (
        <div className="messanger-container ">
            <MessengerList />
            <Dialog />
        </div>
    )
}
