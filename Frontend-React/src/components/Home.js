import React from "react";
import "../App.css";
import { TweenLite, TimelineMax, Power1 } from "gsap/all";
import $ from 'jquery'; 
import Svg from './svg/Svg';
import Svg3 from './svg/Svg3';
import Cursor from './Cursor';



class Home extends React.Component {

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
            .from(this.box1, 0.2, {
                autoAlpha: 0,
                y: 25,
                ease: Power1.easeInOut
            })
            .from(this.box2, 0.2, {
                autoAlpha: 0,
                y: 25,
                ease: Power1.easeInOut
            })
            .from(this.box3, 0.2, {
                autoAlpha: 0,
                y: 25,
                ease: Power1.easeInOut
            })
            .from(this.box9, 0.2, {
                autoAlpha: 0,
                y: 25,
                ease: Power1.easeInOut
            })
            .from(this.box8, 0.2, {
                autoAlpha: 0,
                y: 25,
                ease: Power1.easeInOut
            })
            .from(this.box7, 0.2, {
                autoAlpha: 0,
                y: 25,
                ease: Power1.easeInOut
            })
            .from(this.box4, 0.2, {
                autoAlpha: 0,
                y: 25,
                ease: Power1.easeInOut
            })
            .from(this.box6, 0.2, {
                autoAlpha: 0,
                y: 25,
                ease: Power1.easeInOut
            })
            .from(this.box5, 0.2, {
                autoAlpha: 0,
                y: 25,
                ease: Power1.easeInOut
            })
            .from(this.content, 1, {
                autoAlpha: 0,
                y: 25,
                ease: Power1.easeInOut
            })
            .from(this.footer, 0.4, {
                autoAlpha: 0,
                y: 25,
                ease: Power1.easeInOut
            })


        this.timeline.play();



        $(document).mousemove(function (event) {
            var xPos = event.clientX / $(window).width() - 0.5,
                yPos = event.clientY / $(window).height() - 0.5,
                box = $(".box"),
                coord = $(".coordinates");

            TweenLite.to(box, 0.6, {
                rotationY: 30 * xPos,
                rotationX: 30 * yPos,
                ease: Power1.easeOut,
                transformPerspective: 900,
                transformOrigin: "center"
            });
        });

        $(document).mousemove(function (event) {

            $(".box2").each(function (index, element) {

                var xPos = (event.clientX / $(window).width()) - 0.5,
                    yPos = (event.clientY / $(window).height()) - 0.5,
                    box = element;

                TweenLite.to(box, 1, {
                    rotationY: xPos * 100,
                    rotationX: yPos * 100,
                    ease: Power1.easeOut,
                });

            })
        }); 
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
            <div className="home">
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
                    <button className="nav-item">
                        <a>HOME</a>
                        </button>
                    <button
                        className="nav-item"
                        onClick={e => this.changePage(e, "/about")}>
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
                <div className="home-container">
                    <div className="wrapper">
                        <div ref={div => (this.box1 = div)} className="box2"></div>
                        <div ref={div => (this.box2 = div)} className="box2"></div>
                        <div ref={div => (this.box3 = div)} className="box2"></div>
                        <div ref={div => (this.box4 = div)} className="box2"></div>
                        <div ref={div => (this.box5 = div)} className="boxRed"></div>
                        <div ref={div => (this.box6 = div)} className="box2"></div>
                        <div ref={div => (this.box7 = div)} className="box2"></div>
                        <div ref={div => (this.box8 = div)} className="box2"></div>
                        <div ref={div => (this.box9 = div)} className="box2"></div>
                    </div>
                  
                    <div ref={div => (this.header = div)} className="home-header">
                        <p>WELCOME</p>
                    </div>
                    <div ref={div => (this.content = div)} className="home-content box">
                        <p><a>
                            HELLO, I'M DANIEL CAHALANE <br></br>
                            A WEB DEVELOPER FROM THE UK
                        </a></p>
                    </div>
                    <span className="coordinates"></span>
                    <div ref={div => (this.footer = div)} className="home-footer">
                        <p>(Touch Anywhere)</p>
                    </div>
                    
                </div>
              
            </div>

        );
    }
}

export default Home;