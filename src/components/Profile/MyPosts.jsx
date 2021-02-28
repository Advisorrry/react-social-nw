import React from 'react'

export function MyPosts(props) {
    return (
        <div className='myposts'>
            <div className="myposts__container">
                
                <div className='myposts__text'>               
                    {props.postText}                 
                </div>
            </div>
        </div>
    )
}
