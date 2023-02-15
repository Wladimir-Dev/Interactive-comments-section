import React from 'react'
import withResults from '../mocks/data.json'


export function useComments() {

    const currentUser = withResults.currentUser;
    const comments = withResults.comments;


    return { currentUser, comments }
}
