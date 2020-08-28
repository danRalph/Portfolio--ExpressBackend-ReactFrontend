import React from "react";
import "../App.css";
import { TimelineMax, Power1 } from "gsap/all";
import axios from 'axios';
import Svg from './svg/Svg';
import Svg3 from './svg/Svg3';
import Cursor from './Cursor';


class Contact extends React.Component {
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
            .from(this.form, 2, {
                autoAlpha: 0,
                y: 25,
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


     handleSubmit(e) {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        axios({
            method: "POST",
            url: "http://localhost:3002/send",
            data: {
                name: name,
                email: email,
                messsage: message
            }
        }).then((response) => {
            if (response.data.msg === 'success') {
                alert("Thank you for your message.");
                this.resetForm()
            } else if (response.data.msg === 'fail') {
                alert("Message failed to send.")
            }
        })
    }

    resetForm() {
        document.getElementById('contact-form').reset();
    }

    render() {
        return (
            <div className="Contact">
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
                        className="nav-item"
                        onClick={e => this.changePage(e, "/about")}>
                        <a>ABOUT</a>
                    </button>
                    <button class-name="nav-item"
                        onClick={e => this.changePage(e, "/projects")}>
                        <a>PROJECTS</a>
                    </button>
                    <button class-name="nav-item">
                        <a>CONTACT</a>
                    </button>
                </header>


                <div ref={div => (this.header = div)} className="contact-header">
                    <p><a>CONTACT</a></p>
                </div>

                <div ref={div => (this.content = div)} className="contact-content">
                    <p>
                        Any questions? Want to work together? Get in touch
                    </p>

                </div>

                <div ref={div => (this.form = div)} className="container">
                    <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" className="form-control" id="name" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input type="email" className="form-control" aria-describedby="emailHelp" id="email" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea className="form-control" rows="5" id="message" />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>

            </div>
        );
    }
}


    export default Contact;