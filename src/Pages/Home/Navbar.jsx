import {useState, useEffect} from "react"
import {Link} from "react-scroll"

function Navbar() {
    const [navActive, setNavActive] = useState(false);

    const toggleNav = () => {
        setNavActive(!navActive)
    }

    const closeMenu = () => {
        setNavActive(false)
    }

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 500) {
                closeMenu
            }
        }

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    useEffect(() => {
        if(window.innerWidth <= 1200) {
            closeMenu;
        }
    }, []);

    return (
        <nav className={`my-navbar ${navActive ? "active" : ""}`}>
            <ul className="navbar--logo--container">
                <li><a>Professional Portfolio</a></li>
            </ul>
            <a className={`nav__hamburger ${navActive ? "active" : ""}`} onClick={toggleNav}>
                <span className="nav__hamburger__line"></span>
                <span className="nav__hamburger__line"></span>
                <span className="nav__hamburger__line"></span>
            </a>
            <div className={`navbar--items ${navActive ? "active" : ""}`}>
                <ul>
                    <li>
                        <Link onClick={closeMenu} 
                            spy={true}
                            to="AboutMe"
                            className="navbar--content nav-link-effect"
                            >
                            About
                        </Link>
                    </li>
                    <li>
                        <Link onClick={closeMenu} 
                            spy={true} 
                            to="MyExperience"
                            className="navbar--content nav-link-effect"
                            >
                            Experience
                        </Link>
                    </li>
                    <li>
                        <Link onClick={closeMenu} 
                            spy={true} 
                            to="MyProjects"
                            className="navbar--content nav-link-effect"
                            >
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link onClick={closeMenu} 
                            spy={true} 
                            to="ContactMe"
                            className="navbar--content nav-link-effect">
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;