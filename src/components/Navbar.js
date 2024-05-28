import { NavLink } from "react-router-dom";
import styles from './navbar.module.css'

export default function Navbar() {

    return (
        <>
            <header>
                <div className={styles.img}>
                    <img src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?size=338&ext=jpg&ga=GA1.1.2082370165.1716487200&semt=sph" alt="Logo" />
                    <h3>Learn What Matters</h3>
                </div>
                <nav>
                    <ul>
                        <li><NavLink to='/'>Home </NavLink></li>
                        <li><NavLink to='/about'>About</NavLink> </li>
                        <li><NavLink to='/contact'>Contact</NavLink></li>
                    </ul>
                </nav>
            </header>
        </>
    );
}