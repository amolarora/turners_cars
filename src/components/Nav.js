import logoImg from '../images/turners-cars-logo-1.png';
import { Link } from 'react-router-dom';
//import MobileNav from './MobileNav.js';

function Nav() {
    return (
        <header>
            <div className="wrapper">
                <div className="logo">
                    <img src={logoImg} href="/" width="185" height="50" alt=""></img>
                </div>

                <nav className="leftNav">
                    <Link to="/">Buy</Link>
                    <Link to="/">Sell</Link>

                    <Link to="/" className="dropbtn">Insurance
                    
                        <div className="dropdown-content">
                            <Link to="/insurance">Car Insurance</Link> <br></br>
                            <Link to="/">Mechanical Breakdown Insurance</Link>
                        </div>

                    </Link>
                    
                    <Link to="/">Finance</Link>
                    <Link to="/">Help</Link>
                    <Link to="/">About</Link>
                </nav>

                <div className="rightNav">
                    <button type="button" className="signUp"><p>Sign Up</p></button>
                    <a href="/">Login</a>
                </div>

            </div>
        </header>
    );
}

export default Nav;