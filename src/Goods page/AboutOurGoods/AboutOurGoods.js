import React, {Component} from 'react';
import classes from './AboutOurGoods.module.css';
import coffee from '../img/coffee-839233_1920 (1).png';
import coffe from '../img/coffee-beans-(1).png';

class AboutOurCoffe extends Component {
    render() {
        return (
            <div className={classes.panel}>
                <div className={classes.panel_products}>
                    <div className={classes.panel_images}>
                        <img src={coffee} alt="coffee"/>
                    </div>
                    <div className={classes.panel_about_our_beans}>
                        <h2>About our beans</h2>
                        <div className={classes.img_fluid}>
                            <img src={coffe} alt="img"/>
                        </div>
                        <p>Extremity sweetness difficult behaviour he of. On <br /> disposal of as landlord horrible.<br /><br /> Afraid at highly months do things on at. Situation<br /> recommend objection do intention<br /> so questions.<br /> As greatly removed calling pleased improve an. <br />Last ask him cold feel<br /> met spot shy want. Children me laughing we<br /> prospect answered followed. At it went<br /> is song that held help face.</p>
                    </div>
                </div>
                <div className={classes.Line}></div>
            </div>
        )
    }
}

export default AboutOurCoffe;