import React from 'react';
import styles from './Header.module.css';
import { ROUTES } from './../../utils/routes';
import { Link } from 'react-router-dom';
import LOGO from '../../img/logo_it.jpg'

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <Link to={ROUTES.HOME} >
          <img src={LOGO} alt="logo" />
        </Link>
      </div>
    </div>
  )
}

export default Header