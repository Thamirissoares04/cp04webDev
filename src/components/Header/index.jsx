import { Link } from 'react-router-dom'

import './Header.css'

export const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li><Link className={({ isActive }) =>
                        isActive ? "active" : ""
                    } to={'/'}>Home</Link></li>
                    <li><Link className={({ isActive }) =>
                        isActive ? "active" : ""
                    } to={'/sobre'}>Sobre</Link></li>
                    <li><Link className={({ isActive }) =>
                        isActive ? "active" : ""
                    } to={'/contato'}>Contato</Link></li>
                </ul>
            </nav>
        </header>
    )
}