import React from 'react'
import styles from './Home.module.css'
import Posters from '../poster/Posters'


function Home() {

    return (
        <div className={styles.main}>
            <div>
                <Posters />
            </div>
        </div>
    )

}

export default Home