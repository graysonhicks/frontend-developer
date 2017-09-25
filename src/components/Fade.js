import React, {Component} from "react";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const randomTimeout = () => {
   return Math.random() * (1000 - 200) + 200;
}

const Fade = ({ children, ...props }) => (
    <ReactCSSTransitionGroup
     {...props}
       transitionName="fade"
       transitionAppear={true}
       transitionAppearTimeout={randomTimeout()}
       transitionEnter={false}
       transitionLeave={false}
    >
    {children}
    </ReactCSSTransitionGroup>
);

export default Fade;
