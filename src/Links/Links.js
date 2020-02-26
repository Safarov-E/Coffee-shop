import React, {Component} from 'react';
import classes from './Links.module.css';
import {Link} from 'react-router-dom';
import Group from '../Coffee-page/img/Group.png';


export default class Links extends Component {
    render() {
        return (
            <nav className={classes.logo_nav}>
                <div className={classes.Logo}>
                    <img src={Group} alt="logo"/>
                    <Link to="/" className={classes.Coffee_house}>Coffee house</Link>
                </div>
                <Link to="/our-coffee" className={classes.Our_coffee}>Our coffee</Link>
                <Link to="/goods-page" className={classes.For_your_pleasure}>For your pleasure</Link>
            </nav>
        )
    }
}