import React, {Component} from 'react';
import classes from './containerAboutUs.module.css';
import coffeeBeans from '../img/coffee-beans-(1).png';

class HeaderTwo extends Component {
    render() {
        return (
            <div className={classes.Rectangle}>
                <div className={classes.Rectangle_container}>
                    <div className={classes.About_Us}>
                        <h3>About Us</h3>
                    </div>
                    <div className={classes.img_fluid}>
                        <img src={coffeeBeans} alt="Group_1"/>
                    </div>
                    <div className={classes.description_container}>
                        <p>Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible. Afraid at highly months do things on at. Situation recommend objection do intention so questions. As greatly removed calling pleased improve an. Last ask him cold feel met spot shy want. Children me laughing we prospect answered followed. At it went is song that held help face. <br /><br /> Now residence dashwoods she excellent you. Shade being under his bed her, Much read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant horrible but confined day end marriage. Eagerness furniture set preserved far recommend. Did even but nor are most gave hope. Secure active living depend son repair day ladies now.</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default HeaderTwo;
