import React from 'react'

const dialogData = [
    { id: 0, ava: '', name: 'Артем', text: 'какой-то длинный текст' },
    { id: 1, ava: '', name: 'Артем', text: 'какой-то длинный текст' },
    { id: 2, ava: '', name: 'Артем', text: 'какой-то длинный текст' },
    { id: 3, ava: '', name: 'Александр', text: 'ок' },
]

function Dialog() {
    return (
        <div className="messanger-container-right">
            {dialogData.map((item) => (
                <div key={item.id} className="messanger-dialogs">
                    <div className="messanger-dialogs-ava">{item.ava}</div>
                    <div className="messanger-dialogs-name">{item.name}</div>
                    <div className="messanger-dialogs-text">{item.text}</div>
                </div>
            ))}
            <div className="messanger-dialogs-group">
                <input className="input" type="text" />
                <button type="button" className="btn btn-success">
                    Отправить
                </button>
            </div>
        </div>
    )
}


export default Dialog
