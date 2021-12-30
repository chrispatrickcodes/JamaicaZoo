import { useState, useEffect } from 'react';
import './ScrollNavBar.css';
import { ReactComponent as ScrollNavBarIcon } from '../assets/menu-svgrepo-com.svg'
import { ReactComponent as BrandIcon } from '../assets/elephant-side-view-svgrepo-com.svg'
import { ReactComponent as CartIcon } from '../assets/shopping-cart-svgrepo-com-vert.svg'

const ScrollNavBar = () => {

    const [showNav, setShowNav] = useState(false);

    const handleClick = (e) => {
        e.preventDefault();
        setShowNav(true);
    }

    return (
        <div className="ScrollNavBar-ctr">
            {
                !showNav &&
                <ScrollNavBarIcon className='vnav-menu__icon' onClick={handleClick} />
            }
            {
                showNav &&
                <div className='vnav-ctr'>
                    <div className='vnav-brand__ctr'>
                        <a href='/'>
                            <BrandIcon className='vnav-brand__icon' />
                        </a>
                    </div>
                    <div className='vnav-menu__items-ctr'>
                        <a className='vnav-menu__item' href='/shopping'>
                            <CartIcon className='vnav-cart__icon' />
                        </a>
                        <a id='ticket-link' className='vnav-menu__item' href='/ticketinfo' target="_blank">Ticket Info</a>
                    </div>
                </div>

            }
        </div>
    );
}

export default ScrollNavBar;
