import { NavLink } from 'react-router-dom'
import './style.css'

const setActive = ({isActive}) => (isActive ? "active" : "")

export function Head(){
    return <div className='header'>
        <nav className='nav-container'>
            <NavLink to='/news' className={setActive}>News</NavLink>
            <NavLink to='/about'className={setActive}>Project</NavLink>
            <NavLink to='/contact'className={setActive}>Contact</NavLink>
        </nav>
    </div>
}

export default Head