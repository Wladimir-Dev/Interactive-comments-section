import React from 'react'
import { useComments } from '../../hook/useComments'
import styles from './styles.module.css'
export const Edit = ({ commentId, topCommentId, content, setEdit }) => {

    const { updateComments } = useComments();

    const handleSubmit = (e) => {
        e.preventDefault();

        updateComments({ topCommentId, commentId, action: "update", content: e.target.texto.value })
        setEdit(prev => !prev)
    }

    return (
        <div className={`commentContainer ${styles.edit}`} >
            <form onSubmit={handleSubmit}>
                <textarea
                    required
                    name="texto" id="" cols="30" rows="10"
                    onInvalid={e => e.target.setCustomValidity("This field can not be empty")}
                    onInput={e => e.target.setCustomValidity("")}
                    defaultValue={content}
                    placeholder="Add New Comment">
                </textarea>
                <button className='button__submit'>update</button>
            </form>
        </div>
    )
}
