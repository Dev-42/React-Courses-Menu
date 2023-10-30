// Your code goes here
// do a default export
import React, { useState } from 'react'
import styles from './UserCard.module.css'


export default function UserCard(props) {
    const [name,setName] = useState('follow')

    let changeState = () => {
        console.log('Button Clicked')
        console.log('Current state' , name)
        if(name === 'follow'){
            setName('following')
        }
        else{
            setName('follow')
        }
        console.log('Current state' , name)
    }
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
        <button className={styles.btn} onClick={changeState}>{name}</button>
        </div>
    </div>
  )
}
