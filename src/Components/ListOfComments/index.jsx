import React from 'react'
import { PostedComment } from '../PostedComment'
import styles from './styles.module.css'


export const ListOfComments = ({ comments }) => {


    return (
        <>
            {comments.map(comment => {
                return <>
                    <PostedComment
                        key={comment.id}
                        id={comment.id}
                        content={comment.content}
                        createdAt={comment.createdAt}
                        score={comment.score}
                        profilePic={comment.user.image.png}
                        userName={comment.user.username}
                        replyingTo={comment.replyingTo}
                    />
                    {comment.replies?.length > 0 &&
                        <div className={styles.repliesContainer}>
                            <div className={styles.repliesContainer__line}></div>
                            <div className={styles.repliesContainer__comments}>
                                <ListOfComments comments={comment.replies} />
                            </div>
                        </div>
                    }
                </>

            })
            }
        </>
    )
}
