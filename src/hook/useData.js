import { useEffect, useState } from 'react'
import withResults from '../mocks/data.json'


export const useData = () => {

    const userJson = withResults.currentUser;
    const commentsJson = withResults.comments;

    const [comments, setComments] = useState(JSON.parse(window.localStorage.getItem("comentarios")) || commentsJson);
    const [currentUser] = useState(userJson);


    useEffect(() => {
        window.localStorage.setItem("comentarios", JSON.stringify(comments));
    }, [comments])

    return { currentUser, comments, setComments }

}
