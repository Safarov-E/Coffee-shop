import React, {Component} from 'react';
import classes from './header.module.css';
import AboutOurCoffe from './About-our-coffe/AboutOurCoffe';
import Group from './img/Group.png';
import SearchOurCoffe from './Search-our-coffe/SearchOurCoffe';
import Footer from './footer/footer';
import Links from '../Links/Links';

class HeaderCoffeePage extends Component {
    render() {
        return (
            <>
                <div className={classes.headers}>
                    <div className={classes.header}>
                        <Links />
                        <div className={classes.element_h2}>
                            <h2>Our Coffee</h2>
                        </div>
                    </div>
                </div>
                <AboutOurCoffe />
                <SearchOurCoffe />
                <Footer />
            </>
        )
    }
}

export default HeaderCoffeePage;
