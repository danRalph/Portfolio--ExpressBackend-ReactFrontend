import React from "react";
import "../App.css";
import { TimelineMax, Power1, Back, gsap } from "gsap/all";
import $ from 'jquery'; 
import wol from './img/wolff.jpg';
import wol2 from './img/wol3.jpg';
import Skills from './Skills';
import Svg from './svg/Svg';
import Svg3 from './svg/Svg3';
import Cursor from './Cursor';

class About extends React.Component {
    constructor(props) {
        super(props);
        this.timeline = new TimelineMax({ paused: true });
    }

    componentDidMount() {

        this.timeline
            .from(this.header, 1, {
                display: "none",
                autoAlpha: 0,
                delay: 0.45,
                ease: Power1.easeIn
            })
            .from(this.content, 0.4, {
                autoAlpha: 0,
                y: 25,
                ease: Power1.easeInOut
            })
            .from(this.footer, 0.4, {
                autoAlpha: 0,
                y: 25,
                ease: Power1.easeInOut
            })
            .from(this.h3, 0.4, {
                autoAlpha: 0,
                y: 25,
                ease: Power1.easeInOut
            })
            .from(this.skills, 2, {
                autoAlpha: 0,
                y: 25,
                ease: Power1.easeInOut
            });

        this.timeline.play();

        gsap.set(".cardWrapper", {
            perspective: 800
        });
        gsap.set(".card", { transformStyle: "preserve-3d" });
        gsap.set(".back", { rotationY: -180 });
        gsap.set([".back", ".front"], { backfaceVisibility: "hidden" });

        $(".cardWrapper").hover(
            function () {
                gsap.to($(this).find(".card"), { duration: 1.2, rotationY: 180, ease: Back.easeOut });
            },
            function () {
                gsap.to($(this).find(".card"), { duration: 1.2, rotationY: 0, ease: Back.easeOut });
            }
        );

        gsap.to($(".card"), { duration: 1, rotationY: -180, repeat: 1, yoyo: true, stagger: 0.1 });
    }



    changePage = (e, destination) => {
        e.preventDefault();
        this.timeline.reverse();
        const timelineDuration = this.timeline.duration() * 1000;
        setTimeout(() => {
            this.props.history.push(destination);
        }, timelineDuration);
    };

    render() {
        return (
            <div className="projects">
                <Cursor />
                <Svg />
                <Svg3 />
                <header className="navigation">
                    <div className="navLeft">
                        <div className="magnet">
                            <a href="https://www.instagram.com/danralphh/" target="_blank" class="fa fa-instagram"></a>
                        </div>
                        <div className="magnet">
                            <a href="https://www.github.com/danRalph/" target="_blank" class="fa fa-github"></a>
                        </div>
                    </div>
                    <button className="nav-item"
                        onClick={e => this.changePage(e, "/")}>
                        <a>HOME</a>
                    </button>
                    <button
                        className="nav-item">                   
                        <a>ABOUT</a>
                    </button>
                    <button class-name="nav-item"
                        onClick={e => this.changePage(e, "/projects")}>
                        <a>PROJECTS</a>
                    </button>
                    <button class-name="nav-item"
                        onClick={e => this.changePage(e, "/contact")}>
                        <a>CONTACT</a>
                    </button>
                </header>
                <div className="projects-container">
                    <div ref={div => (this.header = div)} className="projects-header">
                        <p><a>ABOUT</a></p>
                    </div>
                    <div className="row">
                    <div ref={div => (this.content = div)} className="projects-content column">
                        <p>
                                Hi, i'm Daniel Ralph Cahalane. I'm a self taught front-end developer.
                                I've always wondered how exactly the web works and decided it was fimally time to learn.
                                I have a strong interest in UI effects, animations and making a page come to life.
                        </p>    
                            
                        </div>

                        <div ref={div => (this.footer = div)} className="column">
                            <div class="cardWrapper">
                                <div class="card">
                                    <div class="cardFace front"><img src={wol} /></div>
                                    <div class="cardFace back"><img src={wol2} /></div>
                                        </div>
                                    </div>
                        </div>

                    </div>
                    <div ref={div => (this.h3 = div)}>
                        <h3><a> SKILLS </a></h3>
                        </div>
                    <div ref={div => (this.skills = div)}>
                        <Skills />
                        </div>
                    s
                </div>
               
            </div>
        );
    }
}

export default About;
