import React, { createContext, useState } from 'react'
import { useComments } from '../hook/useComments';

export const CommentContext = createContext();


export const CommentProvider = ({ children }) => {

    const { currentUser, comments,setComments } = useComments();



    return (
        <CommentContext.Provider value={{ currentUser, comments,setComments }}>
            {children}
        </CommentContext.Provider>
    )
}
