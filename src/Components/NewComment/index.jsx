import React, { useContext } from 'react'
import { CommentContext } from '../../context/CommentContext'
import styles from './styles.module.css'
export const NewComment = ({ replyingTo = "", setReply, idComment }) => {

    const { currentUser } = useContext(CommentContext)


    return (
        <article className={`commentContainer ${styles.newComment}`}>
            <textarea name="" id="" cols="30" rows="10" defaultValue={replyingTo}></textarea>
            <div className={styles.footer}>
                <img src={currentUser.image.png} alt="profile pic" />
                <button>Reply</button>
            </div>
        </article>
    )
}
