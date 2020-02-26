import React, {Component} from 'react';
import classes from './Header.module.css';
import Group from './img/Group.png';
import Group_1 from './img/Group-1.png';
import HeaderTwo from './container_about_us/container_about_us';
import OurBest from './container_ourBest/container_ourBest';

class Header extends Component {
    render() {
        return (
            <>
                <div className={classes.Main_bg}>
                    <header className={classes.header}>
                        <nav className={classes.logo_nav}>
                            <div className={classes.Logo}>
                                <img src={Group} alt="logo"/>
                                <div className={classes.Coffee_house}>Coffee house</div>
                            </div>
                            <div className={classes.Our_coffee}>Our coffee</div>
                            <div className={classes.For_your_pleasure}>For your pleasure</div>
                        </nav>
                        <div className={classes.element_h2}>
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
                            <button className={classes.element_button}>More</button>
                        </div>
                    </header>
                </div>
            <HeaderTwo />
            <OurBest />
            </>
        )
    }
}

export default Header;
