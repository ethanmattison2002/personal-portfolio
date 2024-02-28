import data from "../../data/index.json";
import {Link} from "react-scroll";

export default function MyProjects() {
    return (
        <section className="section--container" id="MyProjects">
            <div className="section--header">
                <p>Browse My</p>
                <h1>Projects</h1>
            </div>
            <div className="project--section--container">
                <div className="about--containers">
                    {data?.projects?.map((item, index)=> (
                        <div key={index} className="project--section--card">
                            <a target="_blank" href={item.link} className="project--section--img">
                                <img src={item.src} alt="Placeholder"/>
                            </a>
                            <div className="project--section--card--content">
                                <div className="mb-3">
                                    <h3 className="project--section--title">{item.title}</h3>
                                    <p className="text-md">{item.description}</p>
                                </div>
                                <a target="_blank" href={item.link} className="arrow-link">
                                    {item.linkTitle}
                                    <span className="arrow"></span>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Link class="scroll-down" to="ContactMe">
                <img src="./img/arrow.png" alt="Icon Arrow"/>
            </Link>
        </section>
    )
}