import React from 'react'
import { Link } from 'react-router-dom'

const nameList = [
    { id: 0, name: 'Артем' },
    { id: 1, name: 'Андрей' },
    { id: 2, name: 'Василий' },
    { id: 3, name: 'Хантер' },
]

function MessangerList() {
    return (
        <div className="messanger-container-left ">
            <ul className="messanger-list">
                {nameList.map((item) => (
                    <li key={item.id}>
                        <Link to={`/messenger/${item.name}`}>{item.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default MessangerList
