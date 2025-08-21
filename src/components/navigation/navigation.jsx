import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './navigation.module.css';

const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      <ul>
        <li>
          <NavLink
            to="/trabalhos"
            className={({ isActive }) => (isActive ? styles.active : undefined)}
          >
            Trabalhos
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/sobre-mim"
            className={({ isActive }) => (isActive ? styles.active : undefined)}
          >
            Sobre Mim
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contato"
            className={({ isActive }) => (isActive ? styles.active : undefined)}
          >
            Contato
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/tecnologias"
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