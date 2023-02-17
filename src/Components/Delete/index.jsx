import React from 'react'
import { useComments } from '../../hook/useComments';
import styles from './styles.module.css'


export const Delete = ({ commentId, topCommentId, setDestroy }) => {


  const { updateComments } = useComments();

  const handleSubmit = (e) => {
    e.preventDefault();
    updateComments({ topCommentId, commentId, action: "delete" })
    setDestroy(prev => !prev)
  }

  return (
    <div className={styles.delete}>
      <form onSubmit={handleSubmit}>

        <h3>Delete comment</h3>
        <p>Are you sure you want to delete this comment? This will remove the comment and can't be undone.</p>


        <div className={styles.footer}>
          <button typeof='button'
            onClick={() => setDestroy(prev => !prev)}>
            No, cancel
          </button>
          <button typeof='submit'>
            yes, delete
          </button>
        </div>


      </form>
    </div>
  )
}
