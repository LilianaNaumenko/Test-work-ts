import { NavLink } from 'react-router-dom'
import s from './NavBar.module.css'

function NavBar() {
    return (
        <header className={s.header}>
            <ul>
                <NavLink className={s.link} to="/">
                    Information
                </NavLink>

                <NavLink className={s.link} to="/todos">
                    Todos
                </NavLink>
            </ul>
        </header>
    )
}

export default NavBar
