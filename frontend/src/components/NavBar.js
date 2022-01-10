import './NavBar.css';

import { ReactComponent as BrandIcon } from '../assets/elephant-side-view-svgrepo-com.svg'
import { ReactComponent as CartIcon } from '../assets/shopping-cart-svgrepo-com.svg'

const NavBar = () => {
  return (
    <div className="NavBar-ctr">
      <div className='brand-ctr'>
        <a href='/'>
          <BrandIcon className='brand-icon' />
        </a>
      </div>
      <div className='menu-items__ctr'>
        <a className='menu-item' href='/shopping'>
          <CartIcon className='cart-icon' />
        </a>
        <a className='menu-item' href='/ticketinfo' target="_blank">Plan Your Visit</a>
        <a className='menu-item' href='/ticketinfo' target="_blank">About</a>
        <a className='menu-item' href='/ticketinfo' target="_blank">Events</a>
        <a className='menu-item' href='/ticketinfo' target="_blank">Animals</a>
        <a className='menu-item' href='/ticketinfo' target="_blank">Shop Online</a>
        <a className='menu-item' href='/ticketinfo' target="_blank">Contact</a>
        <a className='menu-item' href='/ticketinfo' target="_blank">Ticket Info</a>
      </div>
    </div>
  );
}

export default NavBar;
