import React, { createContext, useState } from 'react'
import { useData } from '../hook/useData';

export const CommentContext = createContext();


export const CommentProvider = ({ children }) => {

    const { currentUser, comments,setComments } = useData();



    return (
        <CommentContext.Provider value={{ currentUser, comments,setComments }}>
            {children}
        </CommentContext.Provider>
    )
}
