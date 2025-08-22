
import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './navigation.module.css';

import Button from '../ui/Button/Button';
import buttonStyles from '../ui/Button/Button.module.css';

const Navigation = () => {
  return (
    <nav className={styles.navigation}>
          <NavLink to="/work">
            {({ isActive }) => (
              <Button className={isActive ? buttonStyles.active : ''}>Trabalhos</Button>
            )}
          </NavLink>

          <NavLink to="/">
            {({ isActive }) => (
              <Button className={isActive ? buttonStyles.active : ''}>Sobre Mim</Button>
            )}
          </NavLink>

          <NavLink to="/contact">
            {({ isActive }) => (
              <Button className={isActive ? buttonStyles.active : ''}>Contato</Button>
            )}
          </NavLink>

          <NavLink to="/skills">
            {({ isActive }) => (
              <Button className={isActive ? buttonStyles.active : ''}>Tecnologias</Button>
            )}
          </NavLink>
    </nav>
  );
};

export default Navigation;