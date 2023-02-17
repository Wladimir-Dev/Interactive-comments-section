import React, { useState } from 'react'
import { Like } from '../Like'
import styles from './styles.module.css'
import { OptionsComment } from './OptionsComment';
import { NewComment } from '../NewComment';
import { useComments } from '../../hook/useComments';
import { Edit } from '../Edit';
import { calculateDate } from '../../utilities/calculateDate';
import { Delete } from '../Delete';

export const PostedComment = ({ topCommentId, id, content, createdAt, score, profilePic, userName, replyingTo = null, voted = false }) => {


    const { currentUser } = useComments();
    const [reply, setReply] = useState(false);
    const [edit, setEdit] = useState(false);
    const [destroy, setDestroy] = useState(false);

    const isCurrentUser = userName === currentUser.username;


    return (
        <>
            <article className={`commentContainer`}>

                <div className={styles.header}>
                    <div className={styles.header__left}>
                        <img src={profilePic} alt="profile pic" />
                        <p>{userName}</p>
                        {isCurrentUser &&
                            <p className={styles.tagUser}>you</p>
                        }
                        <p>{calculateDate(createdAt)}</p>
                    </div>
                    <div className={styles.header__right}>
                        <button>reply</button>
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


                <div className={styles.footer}>
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
