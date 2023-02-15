import React from 'react'
import { ListOfComments } from '../ListOfComments';

export const TimeLine = ({ data }) => {

    const hasComments = data.comments.length;
    return (
        <>
            {
                hasComments
                    ? <ListOfComments comments={data.comments} />
                    : <p>ho hay comentarios</p>
            }
        </>

    )
}
