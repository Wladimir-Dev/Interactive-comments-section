import React, { useContext, useState } from 'react'
import { Like } from '../Like'
import styles from './styles.module.css'
import { CommentContext } from '../../context/CommentContext';
import { OptionsComment } from './OptionsComment';
import { NewComment } from '../NewComment';

export const PostedComment = ({ topCommentId, id, content, createdAt, score, profilePic, userName, replyingTo = null }) => {


    const { currentUser } = useContext(CommentContext);
    const [reply, setReply] = useState(false);

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
                        <p>{createdAt}</p>
                    </div>
                    <div className={styles.header__right}>
                        <button>reply</button>
                    </div>
                </div>


                <div className={styles.body}>
                    <p>{replyingTo &&
                        <span>{`@${replyingTo} `}</span>
                    }
                        {content}
                    </p>
                </div>


                <div className={styles.footer}>
                    <Like score={score} />
                    <OptionsComment
                        isCurrentUser={isCurrentUser}
                        setReply={setReply}
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
        </>
    )
}
