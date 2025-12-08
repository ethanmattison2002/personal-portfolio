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
                            <p>5+ years <br/>Web Development</p>
                        </div>
                        <div class="details--container about--details">
                            <img src="./img/graduate.png" alt="Education icon" class="icon"/>
                            <h3>Education</h3>
                            <p>BSc Computer Science &#40; First-Class Honours &#41; <br/>Newcastle University</p>
                        </div>
                    </div>
                    <p className="hero--section-description">
                    I'm a Software Engineer specialising in front-end development, creating accessible and scalable web interfaces with React, Tailwind, and .NET. With a First-Class Honours degree in Computer Science and hands-on experience across multiple agencies, I’ve delivered high-traffic sites, contributed to CI/CD pipelines, and worked closely with designers and product teams to ship real user value.
                    </p>                
                </div>
            </div>
        </section>
    )
}