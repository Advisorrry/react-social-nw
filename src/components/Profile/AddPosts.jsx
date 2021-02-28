import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addPostAC } from '../../reducers/addProfilePostsReducer'
import { MyPosts } from './MyPosts'

export function AddPosts() {
    const dispatch = useDispatch()
    const addPostSelector = useSelector((state) => state.addPost.items)
    const [initialValue, setInitialValue] = React.useState('')

    // const handleAddNewPost = () => {
    //     if (initialValue === '') {
    //         return 
    //     }
    //     dispatch(addPostAC(initialValue))
    //     setInitialValue('')
    // }

    const handleAddNewPost = useCallback(() => {
        if (initialValue === '') {
            return 
        }
        dispatch(addPostAC(initialValue))
        setInitialValue('')
    }, [dispatch, initialValue])

    const handleChangeValue = useCallback((e) => {
        setInitialValue(e.target.value)
    }, [])

    return (
        <div className="addposts">
            <div className="addposts__container">
                <form className="form-floating">
                    <textarea
                        className="form-control"
                        placeholder="Leave a comment here"
                        id="floatingTextarea"
                        value={initialValue}
                        onChange={handleChangeValue}
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
                    return <MyPosts postText={post} idx={idx} key={idx} />
                })}
                
            </div>         
        </div>
    )
}
