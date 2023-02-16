import React, { useContext } from 'react'
import { CommentContext } from '../../context/CommentContext'
import { prepareContent } from '../../utilities/prepareContent'
import styles from './styles.module.css'


export const NewComment = ({ topCommentId, replyingTo = null, setReply, idComment }) => {

    const { currentUser, comments, setComments } = useContext(CommentContext)
    const aux = [...comments];


    const obj = {
        id: 10,
        createdAt: "1 weeek ago",
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
        aux.push(obj);
        setComments(aux)
    }



    const addReply = (e) => {

        const postedCommentId = topCommentId || idComment;
        const index = aux.findIndex(comment => comment.id === postedCommentId);

        obj.content = prepareContent(e.target.texto.value)
        obj.replyingTo = replyingTo;

        aux[index].replies.push(obj);
        setComments(aux);
        setReply(prev => !prev);
    }




    const handleSubmit = (e) => {

        e.preventDefault();

        if (replyingTo) {
            addReply(e);
        }

        else {
            addNewComment(e);
        }









    }

    return (
        <article className={`commentContainer ${styles.newComment}`}>
            <form onSubmit={handleSubmit} className={styles.newComment_formulario}>
                <textarea name="texto" id="" cols="30" rows="10" placeholder='anade comentario' defaultValue={replyingTo ? `@${replyingTo}, ` : ""}></textarea>
                <div className={styles.footer}>
                    <img src={currentUser.image.png} alt="profile pic" />
                    <button>Reply</button>
                </div>
            </form>
        </article>
    )
}
