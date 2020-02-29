import React, {Component} from 'react';
import classes from './Header.module.css';
import Group_1 from './img/Group-1.png';
import HeaderTwo from './container_about_us/container_about_us';
import OurBest from './container_ourBest/container_ourBest';
import Footer from './footer/footer';
import Links from '../Links/Links';
import {Link} from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <>
                <div className={classes.Main_bg}>
                    <div className={classes.header}>
                        <Links />
                        <div className={classes.element_h2} onClick={this.gkporkgreg}>
                            <h2>Everything You Love About Coffee</h2>
                        </div>
                        <div className={classes.img_fluid}>
                            <img src={Group_1} alt="Group_1"/>
                        </div>
                        <div className={classes.element_p}>
                            <p className={classes.element_one}>We makes every day full of energy and taste</p>
                            <p className={classes.element_two}>Want to try our beans?</p>
                        </div>
                        <div className={classes.element_btn}>
                            <Link to="/our-coffee" className={classes.element_button}>More</Link>
                        </div>
                    </div>
                </div>
            <HeaderTwo />
            <OurBest />
            <Footer />
            </>
        )
    }
}

export default Header;
