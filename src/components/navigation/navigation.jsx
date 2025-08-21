
import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './navigation.module.css';
import Button from '../ui/Button/Button';

const Navigation = () => {
  return (
    <nav className={styles.navigation}>
          <NavLink to="/work" className={({ isActive }) => (isActive ? styles.active : undefined)}>
            <Button>Trabalhos</Button>
          </NavLink>

          <NavLink to="/" className={({ isActive }) => (isActive ? styles.active : undefined)}>
            <Button>Sobre Mim</Button>
          </NavLink>

          <NavLink to="/contact" className={({ isActive }) => (isActive ? styles.active : undefined)}>
            <Button>Contato</Button>
          </NavLink>

          <NavLink to="/skills" className={({ isActive }) => (isActive ? styles.active : undefined)}>
            <Button>Tecnologias</Button>
          </NavLink>
    </nav>
  );
};

export default Navigation;