// Your code goes here
// do a default export
import React from 'react'
import styles from './UserCard.module.css'


export default function UserCard(props) {
  return (
    <div className={styles.card}>
        <div>
            <img src={props.avatar} alt="name" id={styles.avatar} />
        </div>
        <div>
            <div>
                <h2 data-testid = "user_name">{props.name}</h2>
                <p data-testid = "user_address">{props.address}</p>
            </div>
            <div className={styles.postsPart}>
                <div>
                    <h3>Posts</h3>
                    <p data-testid = "user_posts">{props.posts}</p>
                </div>
                <div>
                    <h3>Followers</h3>
                    <p data-testid = "user_followers">{props.followers}</p>
                </div>
            </div>
            {/* Button part */}
        </div>
        <div>
        <button className={styles.btn}>follow</button>
        </div>
    </div>
  )
}
