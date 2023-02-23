import React from 'react'
import { FaReply, FaTrash, FaPencilAlt } from 'react-icons/fa';


import styles from './styles.module.css'
import desktop from './desktop.module.css'


export const OptionsComment = ({ isCurrentUser, setReply, setEdit, setDestroy }) => {

  return (
    <>
      {
        isCurrentUser
          ?
          <div className={`${styles.optionsContainer} ${desktop.optionsContainer}`}>
            <button
              className={`${styles.option__button} ${styles.option__button_container} ${styles.button__delete}`}
              onClick={() => setDestroy(prev => !prev)}>
              <FaTrash />Delete
            </button>

            <button
              className={`${styles.option__button} ${styles.option__button_container} ${styles.button__edit}`}
              onClick={() => setEdit(prev => !prev)}>
              <FaPencilAlt />Edit
            </button>
          </div>

          :
          <button
            className={`${styles.option__button} ${styles.button__reply}`}
            onClick={() => setReply(prev => !prev)}>
            <FaReply />Reply
          </button>
      }
    </>

  )
}
