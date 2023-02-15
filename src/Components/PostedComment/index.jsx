import React from 'react'
import { Like } from '../Like'
import styles from './styles.module.css'
export const PostedComment = ({ id, content, createdAt, score, profilePic, userName, replyingTo }) => {

    return (
        <article className={`commentContainer`}>
            <div className={styles.header}>
                <div className={styles.header__left}>
                    <img src={profilePic} alt="profile pic" />
                    <p>{userName}</p>
                    <p>{createdAt}</p>
                </div>
                <div className={styles.header__right}>
                </div>
            </div>
            <div className={styles.body}>
                <p>{content}</p>
            </div>
            <div className={styles.footer}>
                <Like score={score} />
                <button>Reply</button>
            </div>
        </article>
    )
}
