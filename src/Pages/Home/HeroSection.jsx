import {Link} from "react-scroll";
import Typewriter from "typewriter-effect";
import React, { useRef } from 'react';

export default function HeroSection() {

    const openCV = () => {
        window.open('./pdf/EthanMattisonCV.pdf')
    }

    const img1 = './img/linkedin.png'
    const img2 = './img/linkedin-white.png'
    const img3 = './img/github.png'
    const img4 = './img/github-white.png'

    const ImageToggleOnMouseOver = ({primaryImg, secondaryImg}) => {
        const imageRef = useRef(null);
      
        return (
          <img 
            onMouseOver={() => {
              imageRef.current.src = secondaryImg;
            }}
            onMouseOut={() => {
              imageRef.current.src= primaryImg;
            }}
            src={primaryImg} 
            alt=""
            ref={imageRef}
          />
        )
      }

    return (
        <section id="heroSection" className="hero--section">
            <div className="col-md-6">
            <div className="d-flex justify-content-end m-md-5">
                    <div className="hero--section--img">
                        <img src="./img/hero-img.jpeg" alt="Hero Section"></img>
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <div className="hero--section--content--box p-5">
                    <div className="hero--section--content">
                        <p className="section--title--small">
                            Hello, I'm
                        </p>
                        <div className="hero--section--title text-center">
                            <p>Ethan Mattison</p>
                        </div>
                        <div className="hero--section-sub--title text-center dark-heading">
                            <h1>
                                <Typewriter
                                    onInit={(typewriter) => {
                                        typewriter
                                            .start()
                                            .typeString("Software Developer")
                                            .pauseFor(1000)
                                    }}
                                />
                            </h1>
                        </div>
                        <div className="buttons--container">
                            <Link onClick={openCV} className="my-btn btn-primary">Download CV</Link>
                            <Link to="ContactMe" className="my-btn btn-primary">Contact</Link>
                        </div>
                        <div className="socials--container">
                            <a target="_blank" href="https://www.linkedin.com/in/ethan-mattison-134bb5278/">
                                <ImageToggleOnMouseOver
                                    primaryImg={img1}
                                    secondaryImg={img2}
                                    alt="" />
                            </a>
                            <a target="_blank" href="https://github.com/ethanmattison2002">
                                <ImageToggleOnMouseOver
                                    primaryImg={img3}
                                    secondaryImg={img4}
                                    alt="" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}