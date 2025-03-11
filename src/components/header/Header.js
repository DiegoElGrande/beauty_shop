import './header.scss'
import Account from './Account'
import { useState } from 'react'

export default function Header() {
    const [open, setOpen] = useState(false)

    return (
        <header>
            <div className="container">
                <div className='logo'>
                    <h2 className='pink_logo'>Bloom</h2>
                    <h2>Beauty</h2>
                </div>
                <nav>
                    <ul>
                        <li><a href="#">Shop all</a></li>
                        <li><a href="#">Bestsellers</a></li>
                        <li><a href="#">Collection</a></li>
                        <li><a href="#">about as</a></li>
                        <li><a href="#">blog</a></li>
                    </ul>
                </nav>
                <ul className='top_bar_menu'>
                    <li>
                        <img src="/image/icons/search.svg" alt="search" />
                        <p>search</p>
                    </li>
                    <li onClick={() => setOpen(!open)}>
                        <img src="/image/icons/account.svg" alt="account" />
                        <p>account</p>
                    </li>
                    <li >
                        <img src="/image/icons/cart.svg" alt="cart" />
                        <p>cart</p>
                    </li>
                </ul>
                {open && <Account closeButton={() => setOpen(!open)} />}
            </div>
        </header>
    )
}