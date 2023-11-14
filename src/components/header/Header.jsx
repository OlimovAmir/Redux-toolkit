import React from 'react';
import styles from './Header.module.css';
import { ROUTES } from './../../utils/routes';
import { Link } from 'react-router-dom';
import LOGO from '../../img/logo_it.jpg';
import AVATAR from '../../img/robot.jpg'
import '@fortawesome/fontawesome-free/css/all.min.css';


function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <Link to={ROUTES.HOME} > <img src={LOGO} alt="logo" /> </Link>
      </div>
      <div className={styles.info}>
        <div className={styles.user}>
          <div className={styles.avatar}> <img src={AVATAR} alt="avatar" /> </div>
          <div className={styles.username} >Guest</div>
        </div>
      </div>
      <form className={styles.form}>
        <div className={styles.searchContainer}>
        <i className="fa-solid fa-magnifying-glass"></i>
          <input
            type="search"
            name='search'
            placeholder='Search'
            autoComplete='off'
            onChange={() => { }}
            value=''
          />
          
        </div>
        <div className={styles.box}> </div>
        <button type='button' >
          <div className={styles.icon} >
             Search 
          </div></button>
      </form>
      <div className={styles.account}>
        <Link to={ROUTES.HOME} className={styles.icon} > <i className="fa-regular fa-heart"></i> </Link>
        <Link to={ROUTES.CART} className={styles.cartIcon}> <i className="fa-solid fa-cart-shopping"></i> </Link>
        <span className={styles.count}>2</span>
      </div>
    </div>
  )
}

export default Header