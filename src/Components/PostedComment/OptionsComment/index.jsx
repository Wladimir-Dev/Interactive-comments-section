import React from 'react'
import { FaReply, FaTrash, FaPencilAlt } from 'react-icons/fa';
import styles from './styles.module.css'

export const OptionsComment = ({ isCurrentUser, setReply }) => {

  return (
    <>
      {
        isCurrentUser
          ?
          <div className={styles.optionsContainer}>
            <button
              className={`${styles.option__button} ${styles.option__button_container} ${styles.button__delete}`}>
              <FaTrash />Delete
            </button>

            <button
              className={`${styles.option__button} ${styles.option__button_container} ${styles.button__edit}`}>
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
