import React from 'react'
import Dialog from '../components/Dialogs/Dialog'
import MessengerList from '../components/Dialogs/MessengerList'

export function MessengerPage() {
    return (
        <div className="messanger-container ">
            <MessengerList />
            <Dialog />
        </div>
    )
}
