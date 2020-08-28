import React from "react";
import "../App.css";
import $ from 'jquery'; 
import css from './img/css3.png';
import html from './img/html5.png';
import js from './img/js.png';
import jq from './img/jq2.png';
import node from './img/node2.png';
import react2 from './img/react2.png';
import ps from './img/ps2.png';
import gh from './img/gh2.png';
import npm2 from './img/npm2.png';


class Skills extends React.Component {
    constructor() {
        super()
        this.scroll = this.scroll.bind(this)
    }


    scroll(direction) {
        let far = $('.image-container').width() / 2 * direction;
        let pos = $('.image-container').scrollLeft() + far;
        $('.image-container').animate({ scrollLeft: pos }, 1000)
    }

    render() {
        
        return <div className="main">
           
            <div className="wrapper2">
          
                <a className="prev" onClick={this.scroll.bind(null, -1)}>&#10094;</a>
                
                <div className="image-container">
                    
                    <img className="image" src={html} />
                    <img className="image" src={css} />
                    <img className="image" src={js} />
                    <img className="image" src={jq} />
                    <img className="image" src={node} />
                    <img className="image" src={npm2} />
                    <img className="image" src={react2} />
                    <img className="image" src={ps} />
                    <img className="image" src={gh} />
                    
                    </div>
               
                    <a className="next" onClick={this.scroll.bind(null, 1)}>&#10095;</a>
               
                </div>
            
            </div>;
           
    }
}

    export default Skills;