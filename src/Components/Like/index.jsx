import { useComments } from '../../hook/useComments';
import styles from './styles.module.css'
import desktop from './desktop.module.css'


export const Like = ({ idComment: commentId, topCommentId, score, voted }) => {

    const { updateComments } = useComments();


    const handleLike = () => {

        !voted
            ? updateComments({ topCommentId, commentId, action: "sumar" })
            : updateComments({ topCommentId, commentId, action: "restar" })

    }


    return (
        <div className={`${styles.like} ${desktop.like}`}>
            <button onClick={handleLike} disabled={voted}>+</button>
            <p>{score}</p>
            <button onClick={handleLike} disabled={!voted}>-</button>
        </div>
    )
}
