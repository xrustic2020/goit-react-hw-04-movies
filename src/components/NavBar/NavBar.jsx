import { NavLink } from 'react-router-dom';
import s from './NavBar.module.css';

const NavBar = ({ data, additionalClass }) => {
  const classes = [s.navigations];
  if (additionalClass) classes.push(additionalClass);
  return (
    <ul className={classes.join(' ')}>
      {data.map(({ path, label, exact }) => (
        <li key={path} className={s.navigations__item}>
          <NavLink
            exact={exact}
            className={s.link}
            activeClassName={s.active}
            to={path}
          >
            {label}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default NavBar;
