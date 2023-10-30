// Your code goes here
// do a deafult export
import React from 'react'
import styles from './Title.module.css'

export default function Title() {
  return (
    <div className='Title'>
        <h1 className={styles.mainHeading}>Users Display</h1>
    </div>
  )
}

