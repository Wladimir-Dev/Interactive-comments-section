import React from 'react'
import styles from './styles.module.css'



export const Like = ({ score }) => {



    return (
        <div className={styles.like}>
            <button>+</button>
            <p>{score}</p>
            <button>-</button>
        </div>
    )
}
