import React from 'react';
import stylesSidebar from './Sidebar.module.css';
import { NavLink } from 'react-router-dom';

function Sidebar() {
  return (
    <div className={stylesSidebar.sidebar}>
      <div className={stylesSidebar.title}>CATRGIRIES </div>
      <nav>
        <ul className={stylesSidebar.menu}>
          <li>
            <NavLink to={`categories/${1}`}>
              Link
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className={stylesSidebar.footer}>
        <a href="/#" target='d' className={stylesSidebar.link}> help </a>
        <a href="/terms" target='' className={stylesSidebar.link}> Terms & Conditions </a>
      </div>
    </div>
  )
}

export default Sidebar