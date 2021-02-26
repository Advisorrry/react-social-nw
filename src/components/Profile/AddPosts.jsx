import React from 'react'
import './mypost.scss'
import { MyPosts } from './MyPosts'

export function AddPosts() {
    return (
        <div className="addposts">
            <div className="addposts__container">
                <div class="form-floating">
                    <textarea
                        class="form-control"
                        placeholder="Leave a comment here"
                        id="floatingTextarea" 
                        
                        />
                    <label for="floatingTextarea">Новый пост</label>
                    <button type="button" class="btn btn-primary">Добавить</button>
                </div>
            </div>
            <MyPosts />
            <MyPosts />
            <MyPosts />
            <MyPosts />
        </div>
    )
}
