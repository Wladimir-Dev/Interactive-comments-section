import React from 'react'
import { useComments } from '../../hook/useComments'
import { generateRandomId } from '../../utilities/generateRandomId'
import { prepareContent } from '../../utilities/prepareContent'
import styles from './styles.module.css'


export const NewComment = ({ topCommentId, replyingTo = null, setReply, idComment }) => {

    const { currentUser, comments, setComments } = useComments()
    const clone = structuredClone(comments);
    const isReply = replyingTo != null;

    const obj = {
        id: generateRandomId(),
        createdAt: new Date().toString(),
        score: 0,
        user: {
            image: {
                png: currentUser.image.png
            },
            username: currentUser.username
        },

    }

    const addNewComment = (e) => {
        obj.replies = [];
        obj.content = e.target.texto.value;
        e.target.texto.value = "";
        clone.push(obj);
    }

    const addReply = (e) => {

        const postedCommentId = topCommentId || idComment;
        const index = clone.findIndex(comment => comment.id === postedCommentId);

        obj.content = prepareContent(e.target.texto.value)
        obj.replyingTo = replyingTo;

        clone[index].replies.push(obj);
        setReply(prev => !prev);
    }


    const handleSubmit = (e) => {

        e.preventDefault();


        if (isReply) {
            addReply(e);
        }

        else {
            addNewComment(e);
        }
        setComments(clone);
    }
   

    return (
        <article className={`commentContainer ${styles.newComment}`}>
            <form onSubmit={handleSubmit} className={styles.newComment_formulario}>
                <textarea
                    required
                    onInvalid={e=> e.target.setCustomValidity("This field can not be empty")}
                    onInput={e=> e.target.setCustomValidity("")}
                    name="texto" id="" cols="30" rows="10"
                    placeholder='Add New Comment'
                    defaultValue={replyingTo ? `@${replyingTo}, ` : ""}>

                </textarea>
                <div className={styles.footer}>
                    <img src={currentUser.image.png} alt="profile pic" />
                    <button className='button__submit' >Reply</button>
                </div>
            </form>
        </article>
    )
}
