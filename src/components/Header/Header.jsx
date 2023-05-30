import { NavLink } from 'react-router-dom';
import css from './Header.module.css';

function Header() {
  return (
    <header>
      <nav>
        <NavLink to={'/'}>
          <h1>Fitnesso</h1>
        </NavLink>
        <div className={css.navigationGroup}>
          <NavLink to={'/about'}>About</NavLink>
          <NavLink to={'/free-workouts'}>Free Workouts</NavLink>
          <NavLink to={'/shop'}>Shop</NavLink>
          <div className={css.bookACallWrapper}>
            <NavLink to={'/contact'}>BOOK A CALL</NavLink>
          </div>
          <div className={css.shoppingCartGroup}>
            <button>Shopping cart</button>
            {/* <div className={css.shoppingCardWindow}>
              <div className={css.shoppingCartWindowHeader}>
                <h3>Your Cart</h3>
                <button>x</button>
              </div>
              <div className={css.shoppingCartWindowContent}>
                <div className={css.emptyCart}>
                  <h3>Nothing here</h3>
                  <p>Browse around my shop to add programs or nutrition plans</p>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
