import React, {Component} from 'react';
import classes from './container_ourBest.module.css';

class OurBest extends Component {
    state = {
        coffe: null
    }
    componentWillMount(){
        fetch('http://localhost:3001/bestsellers')
            .then((response) => response.json())
            .then((jsonFile) => {this.setState({coffe: jsonFile})})
    }
    render() {
        if(this.state.coffe === null) {
            return <p>Loading...</p>
        }
        return (
            <div className={classes.Mask_Group}>
                <div className={classes.container_our_best}>
                    <div className={classes.container_header}>
                        <h3>Our best</h3>
                    </div>
                </div>
                <div className={classes.container_bestItem}>
                {
                    this.state.coffe.map((item, index) => {
                        return (
                            <div className={classes.cardBox} key={index}>
                                <img src={item.url} alt="Coffe" width="151px" height="130px"/>
                                <h3>{item.name}</h3>
                                <p>{item.price}</p>
                            </div>
                        )
                    })
                }
                </div>
            </div>
        )
    }
}

export default OurBest;
