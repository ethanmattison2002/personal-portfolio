import data from "../../data/index.json";
import {Link} from "react-scroll";

export default function MyExperience() {
    return (
        <section className="section--container" id="MyExperience">
            <div className="section--header">
                <p>Explore My</p>
                <h1>Experience</h1>
            </div>
            <div className="experience--section--container">
                <div class="about--containers">
                <a href="https://www.lynchpinmedia.com/" target="_blank" class="details--container">
                        <div>
                            <img src="./img/coding.png" alt="Experience icon" class="icon icon-lg mb-2"/>
                            <p class="mb-2">Junior Web Designer</p>
                            <h2 class="experience--sub--title">Lynchpin Media</h2>
                            <div class="article--container">
                                <p>While working for Lynchpin Media, I have developed skills in the design aspects of web development, which has enhanced my understanding of the full scope of web design and development. Although my focus has been on design, I have also contributed to front-end and some back-end development for company websites, as well as creating web mailers using my front-end skills. I've also designed and created new company newsletter templates to be sent out to thousands of readers.
                                </p>
                            </div>
                        </div>
                        <div>
                            <h4 class="experience--sub--title experience--title--sm">Skills Developed:</h4>
                            <ul className="code-icons icons-lg">
                                <li><i class="devicon-photoshop-plain"></i></li>
                                <li><i class="devicon-wordpress-plain"></i></li>
                                <li><i class="devicon-dreamweaver-plain"></i></li>
                            </ul>
                        </div>
                    </a>
                    <a href="https://www.drummondcentral.co.uk/" target="_blank" class="details--container">
                        <div>
                            <img src="./img/coding.png" alt="Experience icon" class="icon icon-lg mb-2"/>
                            <p class="mb-2">Apprentice / Junior Web Developer</p>
                            <h2 class="experience--sub--title">Drummond Central</h2>
                            <div class="article--container">
                                <p>Some of the core skills I developed at Drummond were primarily front-end programming for websites, back-end
                                programming (integrating sites into content management systems), and communication skills with colleagues and
                                clients to help achieve a project vision for clients.
                                </p>
                                <p>Whilst working at Drummond I also studied for and completed, BCS Level 3 apprenticeship qualifications in
                                Software Development & Programming. </p>
                            </div>
                        </div>
                        <div>
                            <h4 class="experience--sub--title experience--title--sm">Skills Developed:</h4>
                            <ul className="code-icons icons-lg">
                                <li><i class="devicon-html5-plain-wordmark"></i></li>
                                <li><i class="devicon-css3-plain-wordmark"></i></li>
                                <li><i class="devicon-javascript-plain"></i></li>
                                <li><i class="devicon-github-original"></i></li>
                                <li><i class="devicon-wordpress-plain"></i></li>
                            </ul>
                        </div>
                    </a>
                    <a href="https://www.lazygrace.com/" target="_blank"  class="details--container">
                        <div>
                            <img src="./img/coding.png" alt="Experience icon" class="icon icon-lg mb-2"/>
                            <p class="mb-2">Web Development Intern</p>
                            <h2 class="experience--sub--title">Lazy Grace</h2>
                            <div class="article--container">
                                <p>
                                    I completed a web development internship during the summer between my second and third year of university
                                    where I developed numerous websites for different clients. 
                                </p>
                                <p>
                                    Some of the skills I had developed previously were built
                                    upon during this internship such as front-end web development skills such as HTML and CSS as well as new skills I
                                    was allowed to gain such as more backend skills with PHP.
                                </p>
                            </div>
                        </div>
                        <div>
                            <h4 class="experience--sub--title experience--title--sm">Skills Developed:</h4>
                            <ul className="code-icons icons-lg">
                                <li><i class="devicon-php-plain"></i></li>
                                <li><i class="devicon-codeigniter-plain-wordmark"></i></li>
                                <li><i class="devicon-mysql-plain-wordmark"></i></li>
                                <li><i class="devicon-git-plain"></i></li>
                            </ul>
                        </div>
                    </a>
                </div>
            </div>
            <Link class="scroll-down" to="MyProjects">
                <img src="./img/arrow.png" alt="Icon Arrow"/>
            </Link>
        </section>
    );
}