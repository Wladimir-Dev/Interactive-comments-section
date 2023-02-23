import React, { useState } from 'react'
import { Like } from '../Like'
import { OptionsComment } from './OptionsComment';
import { NewComment } from '../NewComment';
import { useComments } from '../../hook/useComments';
import { Edit } from '../Edit';
import { calculateDate } from '../../utilities/calculateDate';
import { Delete } from '../Delete';

import styles from './styles.module.css'
import desktop from './desktop.module.css'


export const PostedComment = ({
    topCommentId,
    id,
    content,
    createdAt,
    score,
    profilePic,
    userName,
    replyingTo = null,
    voted = false }) => {


    const { currentUser } = useComments();
    const [reply, setReply] = useState(false);
    const [edit, setEdit] = useState(false);
    const [destroy, setDestroy] = useState(false);

    const isCurrentUser = userName === currentUser.username;


    return (
        <>
            <article className={`commentContainer ${styles.postedComment} ${desktop.postedComment}`}>
                <Like
                    score={score}
                    voted={voted}
                    idComment={id}
                    topCommentId={topCommentId}
                />
                <div>
                    <div className={`${styles.header} ${desktop.header}`}>
                        <div className={styles.header__left}>
                            <img src={profilePic} alt="profile pic" />
                            <p>{userName}</p>
                            {isCurrentUser &&
                                <p className={styles.tagUser}>you</p>
                            }
                            <p>{calculateDate(createdAt)}</p>
                        </div>
                        <div className={`${styles.header__right} ${desktop.header__right}`}>
                            <OptionsComment
                                isCurrentUser={isCurrentUser}
                                setReply={setReply}
                                setEdit={setEdit}
                                setDestroy={setDestroy}
                            />
                        </div>
                    </div>


                    <div className={styles.body}>
                        {
                            edit
                                ?
                                <Edit
                                    commentId={id}
                                    topCommentId={topCommentId}
                                    content={content}
                                    setEdit={setEdit}
                                />
                                :
                                <p>
                                    {replyingTo &&
                                        <span>{`@${replyingTo} `}</span>
                                    }
                                    {content}
                                </p>
                        }
                    </div>


                    <div className={`${styles.footer} ${desktop.footer}`}>
                        <Like
                            score={score}
                            voted={voted}
                            idComment={id}
                            topCommentId={topCommentId}
                        />
                        <OptionsComment
                            isCurrentUser={isCurrentUser}
                            setReply={setReply}
                            setEdit={setEdit}
                            setDestroy={setDestroy}
                        />
                    </div>
                </div>




            </article>

            {reply &&
                <NewComment
                    topCommentId={topCommentId}
                    replyingTo={userName}
                    idComment={id}
                    setReply={setReply}
                />
            }

            {destroy &&
                < Delete
                    setDestroy={setDestroy}
                    idComment={id}
                    topCommentId={topCommentId}
                />
            }
        </>
    )
}
