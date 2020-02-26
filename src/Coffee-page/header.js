import React, {Component} from 'react';
import classes from './header.module.css';
import Group from './img/Group.png'

class HeaderCoffeePage extends Component {
    render() {
        return (
            <header>
                <div className={classes.header}>
                    <nav className={classes.logo_nav}>
                        <div className={classes.Logo}>
                            <img src={Group} alt="logo"/>
                            <div className={classes.Coffee_house}>Coffee house</div>
                        </div>
                        <div className={classes.Our_coffee}>Our coffee</div>
                        <div className={classes.For_your_pleasure}>For your pleasure</div>
                    </nav>
                    <div className={classes.element_h2}>
                        <h2>Our Coffee</h2>
                    </div>
                </div>
            </header>
        )
    }
}

export default HeaderCoffeePage;
