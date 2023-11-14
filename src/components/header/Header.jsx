import React from 'react';
import styles from './Header.module.css';
import { ROUTES } from './../../utils/routes';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <Link to={ROUTES.HOME} >My courses</Link>
      </div>
    </div>
  )
}

export default Header