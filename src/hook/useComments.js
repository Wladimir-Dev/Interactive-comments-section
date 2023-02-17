import React, { useContext } from 'react'
import { CommentContext } from '../context/CommentContext'

export function useComments() {

    const { currentUser, comments, setComments } = useContext(CommentContext);

    const loadData = (obj, action, content) => {

        switch (action) {
            case "sumar":
                obj.score++
                obj.voted = true
                return obj;

            case "restar":
                obj.score--
                obj.voted = false
                return obj;

            case "update":
                obj.content = content
                return obj;

            default:
                return obj;
        }
    }
    const updateComments = ({ topCommentId, commentId, action, content }) => {

        const aux = [...comments];
        const isReply = topCommentId != null;
        let index1 = 0;


        if (isReply) {

            index1 = aux.findIndex(comment => comment.id === topCommentId);
            let index2 = aux[index1].replies.findIndex(replie => replie.id == commentId)

            action == "delete"
                ? aux[index1].replies.splice(index2, 1)
                : aux[index1].replies[index2] = loadData(aux[index1].replies[index2], action, content)


        }
        else {
            index1 = aux.findIndex(comment => comment.id === commentId);

            action == "delete"
                ? aux.splice(index1, 1)
                : aux[index1] = loadData(aux[index1], action, content)

        }


        setComments(aux);
    }


    return { currentUser, comments, setComments, updateComments }

}
