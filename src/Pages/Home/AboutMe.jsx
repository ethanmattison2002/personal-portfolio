import {Link} from "react-scroll";

export default function AboutMe() {
    return (
        <section id="AboutMe" className="section--container">
            <div className="section--header">
                <p>Get To Know More</p>
                <h1>About Me</h1>
            </div>
            <div className="section--content">
                <div className="about--section--img">
                    <div className="about--section--img--inner">
                        <img src="./img/profile.jpeg" alt="About Me"/>
                    </div>
                </div>
                <div className="about--details--container">
                    <div className="about--containers">
                        <div class="details--container about--details">
                            <img src="./img/portfolio.png" alt="Experience icon" class="icon"/>
                            <h3>Experience</h3>
                            <p>3+ years <br/>Web Development</p>
                        </div>
                        <div class="details--container about--details">
                            <img src="./img/graduate.png" alt="Education icon" class="icon"/>
                            <h3>Education</h3>
                            <p>BSc Computer Science &#40; First-Class Honours &#41; <br/>Newcastle University</p>
                        </div>
                    </div>
                    <p className="hero--section-description">I'm an enthusiastic software engineer as well as data scientist and seeking job opportunities in both fields. Holding a First-Class Honors degree in Computer Science from Newcastle University. Backed by hands-on experience from apprenticeships and internships, I have a strong foundation in both front-end and back-end web development.</p>
                    <p className="hero--section-description">In 2018 I began my software development career with an apprenticeship at Drummond Central. It was here that I learnt all the basics of coding as a web developer, learning skills like HTML, CSS, JS, version control as well as working withing development teams.</p>
                    <p className="hero--section-description">Whilst at Univeristy I was able to expand my programming knowledge outside of web developmnent and venture into data science. After getting my University Degree with a first-class honours, I am now seeking a role as a full-time software developer.</p>
                </div>
            </div>
            <Link class="scroll-down" to="MyExperience">
                <img src="./img/arrow.png" alt="Icon Arrow"/>
            </Link>
        </section>
    )
}