import React, { useState } from 'react'
import withResults from '../mocks/data.json'


export function useComments() {

    const userJson = withResults.currentUser;
    const commentsJson = withResults.comments;

    const [comments, setComments] = useState(commentsJson);
    const [currentUser] = useState(userJson);

    return { currentUser, comments,setComments }
}
