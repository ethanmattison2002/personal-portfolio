import { Link } from "react-scroll";
import React from "react";

function Footer() {
  return (
    <footer>
      <nav>
        <div class="nav--links--container">
          <ul class="nav--links">
            <li>
                <Link
                    activeClass="navbar--active-content" 
                    spy={true} 
                    to="AboutMe"
                    className="navbar--content"
                    >
                    About
                </Link>
            </li>
            <li>
                <Link 
                    activeClass="navbar--active-content" 
                    spy={true} 
                    to="MyExperience"
                    className="navbar--content"
                    >
                    Experience
                </Link>
            </li>
            <li>
                <Link
                    activeClass="navbar--active-content" 
                    spy={true} 
                    to="MyProjects"
                    className="navbar--content"
                    >
                    Projects
                </Link>
            </li>
            <li>
                <Link
                    activeClass="navbar--active-content" 
                    spy={true} 
                    to="ContactMe"
                    className="navbar--content">
                    Contact
                </Link>
            </li>
          </ul>
        </div>
      </nav>
      <p className="text-center">Copyright © 2024 Ethan Mattison. All Rights Reserved.</p>
    </footer>
  );
}

export default Footer;