import { useState } from 'react';
import { useComments } from '../../hook/useComments';
import styles from './styles.module.css'



export const Like = ({ idComment: commentId, topCommentId, score, voted }) => {

    const { updateComments } = useComments();


    const handleLike = () => {


        if (!voted) {

            updateComments({ topCommentId, commentId, action: "sumar" })
        }
        else {
            updateComments({ topCommentId, commentId, action: "restar" })
        }


        console.log("render like")
    }


    return (
        <div className={styles.like}>
            <button onClick={handleLike} disabled={voted}>+</button>
            <p>{score}</p>
            <button onClick={handleLike} disabled={!voted}>-</button>
        </div>
    )
}
