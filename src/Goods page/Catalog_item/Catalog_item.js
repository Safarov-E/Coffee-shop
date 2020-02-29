import React, {Component} from 'react';
import classes from './Catalog_item.module.css';
import {Link} from 'react-router-dom';
import Spinner from '../../spinner/spinner';
import Error from '../../Coffee-page/img/1200px-OOjs_UI_icon_error-destructive.svg.png';

class Catalog_item extends Component {
    state = {
        coffe: null,
        error: false
    }
    componentWillMount(){
        fetch('http://localhost:3001/coffee')
            .then((response) => response.json())
            .then((jsonFile) => {this.setState({coffe: jsonFile})})
            .catch(error => {
                this.onError(error)
                console.error('Error', error)
            })
    }
    onError = (err) => {
        this.setState({
            error: true
        })
    }
    render() {
        return (
            <div className={classes.product_summary}>
                <div className={classes.header_search}>
                    <div className={classes.product_item}>
                            {
                                !this.state.error ?
                                    this.state.coffe ?
                                        this.state.coffe.map((item, index) => {
                                            return (
                                                <div className={classes.product_actions} key={index}>
                                                    <img src={item.url} alt="coffe" width="167px" height="115px"/>
                                                    <Link to={'/our-coffee/' + index} className={classes.product_actions_h3}>{item.name}</Link>
                                                    <p>{item.country}</p>
                                                    <p className={classes.price}>{item.price}</p>
                                                </div>
                                            )
                                        })
                                    : <Spinner />
                                :   <div className={classes.error}>
                                    <img src={Error} alt="error" width="200px"/>
                                    <p className={classes.error_value}>Во время загруски данных произошла ошибка связи с сервером данных.</p>
                                </div>
                            }
                    </div>
                </div>
            </div>
        )
    }
}

export default Catalog_item;