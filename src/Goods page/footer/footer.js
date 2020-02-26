import React, {Component} from 'react';
import Group from '../img/Group-2.png';
import classes from './footer.module.css';
import coffeeBeans from '../img/coffee-beans-(1).png';
import {Link} from 'react-router-dom';

class Footer extends Component {
    render() {
        return (
            <footer>
                <div className={classes.footer}>
                    <nav className={classes.logo_nav}>
                        <div className={classes.Logo}>
                            <img src={Group} alt="logo"/>
                            <Link to="/" className={classes.Coffee_house}>Coffee house</Link>
                        </div>
                        <Link to="/our-coffee" className={classes.Our_coffee}>Our coffee</Link>
                        <Link to="/goods-page" className={classes.For_your_pleasure}>For your pleasure</Link>
                    </nav>
                    <div className={classes.img_fluid}>
                        <img src={coffeeBeans} alt="Group_1"/>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;
