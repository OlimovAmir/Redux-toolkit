import React from 'react';
import styles from './Header.module.css';
import { ROUTES } from './../../utils/routes';
import { Link } from 'react-router-dom';
import LOGO from '../../img/logo_it.jpg';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Добавьте эту строку


function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <Link to={ROUTES.HOME} > <img src={LOGO} alt="logo" /> </Link>
      </div>
      <div className={styles.info}>
        <div className={styles.user}>
          <div className={styles.avatar}></div>
          <div className={styles.username} >Guest</div>
        </div>

      </div>
      <form className={styles.form}>
        <div className={styles.icon} > <i class="fa-solid fa-magnifying-glass"></i> </div>
        <input type="search" />
        <button type='button' >Search</button>
      </form>
    </div>
  )
}

export default Header