import React, {Component} from 'react';
import classes from './Catalog_item.module.css';

class Catalog_item extends Component {
    state = {
        coffe: null,
    }
    componentWillMount(){
        fetch('http://localhost:3001/coffee')
            .then((response) => response.json())
            .then((jsonFile) => {this.setState({coffe: jsonFile})})
    }
    render() {
        if(this.state.coffe === null) {
            return <p>Loading...</p>
        }
        return (
            <div className={classes.product_summary}>
                <div className={classes.header_search}>
                    <div className={classes.product_item}>
                            {
                                this.state.coffe.map((item, index) => {
                                    return (
                                        <div className={classes.product_actions} key={index}>
                                            <img src={item.url} alt="coffe" width="167px" height="115px"/>
                                            <h3>{item.name}</h3>
                                            <p>{item.country}</p>
                                            <p className={classes.price}>{item.price}</p>
                                        </div>
                                    )
                                })
                            }
                    </div>
                </div>
            </div>
        )
    }
}

export default Catalog_item;