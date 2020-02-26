import React, {Component} from 'react';
import classes from './Header.module.css';
import Group from './img/Group.png';
import AboutOurCoffe from './AboutOurGoods/AboutOurGoods';
import Catalog_item from './Catalog_item/Catalog_item';
import Footer from './footer/footer';

class HeaderGoodsPage extends Component {
    render() {
        return (
            <>
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
                            <h2>For your pleasure</h2>
                        </div>
                    </div>
                </header>
                <AboutOurCoffe />
                <Catalog_item />
                <Footer />
            </>
        )
    }
}

export default HeaderGoodsPage;
