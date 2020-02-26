import React, {Component} from 'react';
import classes from './Header.module.css';
import Group from './img/Group.png';
import AboutOurCoffe from './AboutOurGoods/AboutOurGoods';
import Catalog_item from './Catalog_item/Catalog_item';
import Footer from './footer/footer';
import Links from '../Links/Links';

class HeaderGoodsPage extends Component {
    render() {
        return (
            <>
                <div className={classes.headers}>
                    <div className={classes.header}>
                        <Links />
                        <div className={classes.element_h2}>
                            <h2>For your pleasure</h2>
                        </div>
                    </div>
                </div>
                <AboutOurCoffe />
                <Catalog_item />
                <Footer />
            </>
        )
    }
}

export default HeaderGoodsPage;
