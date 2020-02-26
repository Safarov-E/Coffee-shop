import React, {Component} from 'react';
import classes from './container_ourBest.module.css';

class OurBest extends Component {
    render() {
        return (
            <div className={classes.Mask_Group}>
                <div className={classes.container_our_best}>
                    <div className={classes.container_header}>
                        <h3>Our best</h3>
                    </div>
                </div>
            </div>
        )
    }
}

export default OurBest;
