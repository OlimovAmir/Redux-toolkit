import React from 'react'
import  styles from './Home.module.css'
import Posters from '../poster/Posters'
import Products from '../products/Products'
import { useSelector } from 'react-redux'

function Home() {
    const {list} = useSelector(({products})=> products)
    console.log('testProduct---> ',list)
    return (
        <div className={styles.main}>
            <Posters/>
            <Products products={list} amount={5} title="Trending"/>
            
        </div>
    )
   
}

export default Home