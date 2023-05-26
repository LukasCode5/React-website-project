import { NavLink } from 'react-router-dom';
import css from './Footer.module.css';

function Footer() {
  return (
    <footer className={css.container}>
      <div>
        <h1>Fitnesso</h1>
      </div>
      <div>
        <h3>Contact</h3>
        <ul>
          <li>
            <NavLink to={'#'}>contact@fitnesso.com</NavLink>
          </li>
        </ul>

        <h3>Licencing</h3>
        <ul>
          <li>
            <NavLink to={'#'}>Copyright Flow Ninja</NavLink>
          </li>
          <li>
            <NavLink to={'#'}>Powered By Webflow</NavLink>
          </li>

          <li>
            <NavLink to={'#'}>Licencing</NavLink>
          </li>

          <li>
            <NavLink to={'#'}>Support</NavLink>
          </li>
        </ul>
      </div>
      <div>
        <h3>Explore</h3>
        <ul>
          <li>
            <NavLink to={'#'}>Premium Courses</NavLink>
          </li>
          <li>
            <NavLink to={'#'}>Free Courses</NavLink>
          </li>
          <li>
            <NavLink to={'#'}>BLog</NavLink>
          </li>
          <li>
            <NavLink to={'#'}>About</NavLink>
          </li>
          <li>
            <NavLink to={'#'}>Contact</NavLink>
          </li>
          <li>
            <NavLink to={'#'}>Style Guide</NavLink>
          </li>
        </ul>
      </div>
      <div className={css.paymentOptions}>
        <i>Paypal</i>

        <i>Stripe</i>

        <i>VISA</i>

        <i>MasterCard</i>

        <i>American Express</i>
      </div>
    </footer>
  );
}

export default Footer;
