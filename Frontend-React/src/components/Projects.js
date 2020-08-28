import React from "react";
import "../App.css";
import { TimelineMax, Power1 } from "gsap/all";
import { Carousel } from '3d-react-carousal';
import pro1 from './img/pro1.png';
import pro2 from './img/pro2.png';
import pro3 from './img/pro3.png';
import pro4 from './img/pro4.png';
import pro5 from './img/pro5.png';
import Svg from './svg/Svg';
import Svg3 from './svg/Svg3';
import Cursor from './Cursor';

let slides = [
    <div class="imageCaro">
        <a href="https://danralph.github.io" target="_blank">
            <img className="caro" src={pro1} alt="1" />
        </a>
        <h3><span>This portfolio site:<span className='spacer'></span><br /><span className='spacer'></span>Portfolio made with React Router</span></h3>
    </div>,
    <div class="imageCaro2">
        <a href="https://danralph.github.io/Band-Site/" target="_blank">
            <img className="caro" src={pro2} alt="2" />
            </a>
        <h3><span>Band site:<span className='spacer'></span><br /><span className='spacer'></span>Responsive site using HTML, CSS & jQuery</span></h3>
    </div>,
    
        <div class="imageCaro3">
            <a href="https://danralph.github.io/React-Scoreboard/" target="_blank">
                <img className="caro" src={pro3} alt="3" />
            </a>
            <h3><span>Scoreboard app:<span className='spacer'></span><br /><span className='spacer'></span>A Scoreboard app made with React, data managed through props</span></h3>
        </div>,
            <div class="imageCaro4">
                <a href="https://danralph.github.io/React-RSVP/" target="_blank">
                    <img className="caro" src={pro4} alt="4" />
                </a>
                <h3><span>RSVP app:<span className='spacer'></span><br /><span className='spacer'></span>React app. Add/remove/edit name, confirm attendance, filter</span></h3>
            </div>,
                <div class="imageCaro5">
                    <a href="https://github.com/danRalph?tab=repositories" target="_blank">
                        <img className="caro" src={pro5} alt="5" />
                    </a>
                    <h3><span>Node.js:<span className='spacer'></span><br /><span className='spacer'></span>Various Node.js projects</span></h3>
                </div>];

class Projects extends React.Component {
    constructor(props) {
        super(props);
        this.timeline = new TimelineMax({ paused: true });
    }

    componentDidMount() {

        this.timeline
            .from(this.header, 1, {
                display: "none",
                autoAlpha: 0,
                delay: 0.25,
                ease: Power1.easeIn
            })
            .from(this.para, 0.4, {
                y: 25,
                autoAlpha: 0,
                ease: Power1.easeInOut
            })
            .from(this.carousel, 2, {
                y: 25,
                autoAlpha: 0,
                ease: Power1.easeInOut
            })
            
            .from(this.box3, 0.3, {
                y: 25,
                autoAlpha: 0,
                ease: Power1.easeInOut
            });

        this.timeline.play();
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
            <div className="about">
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
                    <button className="nav-item"
                        onClick={e => this.changePage(e, "/about")}>
                        <a>ABOUT</a>
                    </button>
                    <button class-name="nav-item">                   
                        <a>PROJECTS</a>
                    </button>
                    <button class-name="nav-item"
                        onClick={e => this.changePage(e, "/contact")}>
                        <a>CONTACT</a>
                    </button>
                </header>
                <div className="about-container">
                    <div ref={div => (this.header = div)} className="about-header">
                        <p><a>PROJECTS</a></p>
                    </div>
                    <div ref={div => (this.para = div)} className="about-para">
                        <p>I'm currenty working on a few projects.<br></br>You can view a few existing projects below, on my github page</p>
                    </div>
                    <div ref={div => (this.carousel = div)} className="about-content">
                        <Carousel slides={slides} autoplay={true} interval={5000} />
                    </div>
                </div>
            </div>
        );
    }
}

   

export default Projects;