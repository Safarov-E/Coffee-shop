import React, {Component} from 'react';
import Group from '../img/Group-2.png';
import classes from './footer.module.css';
import coffeeBeans from '../img/coffee-beans-(1).png';

class Footer extends Component {
    render() {
        return (
            <footer>
                <div className={classes.footer}>
                    <nav className={classes.logo_nav}>
                        <div className={classes.Logo}>
                            <img src={Group} alt="logo"/>
                            <div className={classes.Coffee_house}>Coffee house</div>
                        </div>
                        <div className={classes.Our_coffee}>Our coffee</div>
                        <div className={classes.For_your_pleasure}>For your pleasure</div>
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
