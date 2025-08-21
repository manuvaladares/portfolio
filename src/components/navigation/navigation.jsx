import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './navigation.module.css';

const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      <ul>
        <li>
          <NavLink
            to="/work"
            className={({ isActive }) => (isActive ? styles.active : undefined)}
          >
            Trabalhos
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? styles.active : undefined)}
          >
            Sobre Mim
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? styles.active : undefined)}
          >
            Contato
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/skills"
            className={({ isActive }) => (isActive ? styles.active : undefined)}
          >
            Tecnologias
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;