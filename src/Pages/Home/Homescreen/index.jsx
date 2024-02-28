import AboutMe from "../AboutMe";
import HeroSection from "../HeroSection";
import MyExperience from "../MyExperience";
import MyProjects from "../MyProjects";
import ContactMe from "../ContactMe";
import Footer from "../Footer";
import 'bootstrap/dist/css/bootstrap.css';

export default function Home () {
    return (
        <>
        <HeroSection />
        <AboutMe />
        <MyExperience />
        <MyProjects />
        <ContactMe />
        <Footer />
        </>
    )
}