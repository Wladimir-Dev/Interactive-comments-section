import React from 'react'
import { PostedComment } from '../PostedComment'
import styles from './styles.module.css'


export const ListOfComments = ({ topCommentId = null, comments }) => {


    return (
        <>
            {comments.map(comment => {
                return <>
                    <PostedComment
                        key={comment.id}
                        topCommentId={topCommentId}
                        id={comment.id}
                        content={comment.content}
                        createdAt={comment.createdAt}
                        score={comment.score}
                        profilePic={comment.user?.image.png}
                        userName={comment.user?.username}
                        replyingTo={comment.replyingTo}
                        voted={comment.voted}
                    />
                    {comment.replies?.length > 0 &&
                        <div className={styles.repliesContainer}>
                            <div className={styles.repliesContainer__line}></div>
                            <div className={styles.repliesContainer__comments}>
                                <ListOfComments topCommentId={comment.id} comments={comment.replies} />
                            </div>
                        </div>
                    }
                </>

            })
            }
        </>
    )
}
