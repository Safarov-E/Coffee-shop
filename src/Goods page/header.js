import React, {Component} from 'react';
import classes from './Header.module.css';
import AboutOurCoffe from './AboutOurGoods/AboutOurGoods';
import CatalogItem from './Catalog_item/Catalog_item';
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
                <CatalogItem />
                <Footer />
            </>
        )
    }
}

export default HeaderGoodsPage;
