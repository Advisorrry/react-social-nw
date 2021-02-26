import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addPostAC } from '../../redux/reducers'
import './mypost.scss'
import { MyPosts } from './MyPosts'

export function AddPosts() {
    const dispatch = useDispatch()
    const addPostSelector = useSelector((state) => state.addPost.items)
    const [initialValue, setInitialValue] = React.useState('')

    const handleAddNewPost = () => {
        if (initialValue === '') {
            return 
        }
        dispatch(addPostAC(initialValue))
        setInitialValue('')
    }

    return (
        <div className="addposts">
            <div className="addposts__container">
                <form className="form-floating">
                    <textarea
                        className="form-control"
                        placeholder="Leave a comment here"
                        id="floatingTextarea"
                        value={initialValue}
                        onChange={(e) => setInitialValue(e.target.value)}
                    />
                    <label htmlFor="floatingTextarea">Новый пост</label>
                    <button 
                        type="button" 
                        className="btn btn-primary"
                        onClick={handleAddNewPost}
                                          
                    >Добавить
                    </button>
                </form>
                {addPostSelector.map((post, idx) => {
                    return <MyPosts postText={post} key={idx} />
                })}
            </div>         
        </div>
    )
}
