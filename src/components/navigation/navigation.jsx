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
            Work
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? styles.active : undefined)}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? styles.active : undefined)}
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;