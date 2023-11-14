import React from 'react'
import stylesFooter from './Footer.module.css'
import { ROUTES } from '../../utils/routes'
import { Link } from 'react-router-dom'
import LOGO from '../../img/logo_it.jpg';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Footer() {
  return (
    <section className={stylesFooter.footer}>
      <div className={stylesFooter.logo}>
        <Link to={ROUTES.HOME} > <img src={LOGO} alt="logo" /> </Link>
      </div>
      <div className={stylesFooter.right}>
        <p>Developed by Olimov Amir</p>
      </div>
      <div className={stylesFooter.social}>
        <i className="fa-brands fa-square-facebook"></i>
        <i className="fa-regular fa-envelope"></i>
        <i className="fa-brands fa-tiktok"></i>
      </div>
    </section>
  )
}

export default Footer