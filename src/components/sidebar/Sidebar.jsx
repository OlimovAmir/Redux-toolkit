import React from 'react';
import stylesSidebar from './Sidebar.module.css';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';


function Sidebar() {
  
  const { list } = useSelector(({ categories }) => categories)
  //console.log('list--> ', list);
  return (
    <div className={stylesSidebar.sidebar}>
      <div className={stylesSidebar.title}>CATRGIRIES </div>
      <nav>
        <ul className={stylesSidebar.menu}>
          {list.map(({ id, name }) => (
            <li key={id}>
              <NavLink
                to={`categories/${id}`}
                className={({isActive})=>`${stylesSidebar.link} ${isActive ? stylesSidebar.active: ''}`}
                >
                {name}
              </NavLink>
            </li>
          ))}
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