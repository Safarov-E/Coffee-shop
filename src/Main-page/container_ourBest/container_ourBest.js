import React, {Component} from 'react';
import classes from './container_ourBest.module.css';
import Spinner from '../../spinner/spinner';
import Error from '../../Coffee-page/img/1200px-OOjs_UI_icon_error-destructive.svg.png';

class OurBest extends Component {
    state = {
        coffe: null,
        error: false
    }
    componentWillMount(){
        fetch('http://localhost:3001/bestsellers')
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
            <div className={classes.Mask_Group}>
                <div className={classes.container_our_best}>
                    <div className={classes.container_header}>
                        <h3>Our best</h3>
                    </div>
                </div>
                <div className={classes.container_bestItem}>
                {
                    !this.state.error ?
                        this.state.coffe ?
                        this.state.coffe.map((item, index) => {
                            return (
                                <div className={classes.cardBox} key={index}>
                                    <img src={item.url} alt="Coffe" width="151px" height="130px"/>
                                    <h3>{item.name}</h3>
                                    <p>{item.price}</p>
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
        )
    }
}

export default OurBest;
