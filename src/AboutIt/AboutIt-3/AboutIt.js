import React, {Component} from 'react';
import classes from '../AboutIt.module.css';
import Footer from '../../Coffee-page/footer/footer';
import Links from '../../Links/Links';
import coffee from '../../Goods page/img/coffee-beans-(1).png';
import Spinner from '../../spinner/spinner';
import Error from '../../Coffee-page/img/1200px-OOjs_UI_icon_error-destructive.svg.png';

class AboutIt extends Component {
    state = {
        coffee: null,
        error: false
    }
    componentDidMount() {
        fetch('http://localhost:3001/coffee')
            .then((responce) => responce.json())
            .then((coffe) => this.setState({coffee: coffe}))
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
            <>
                <div className={classes.headers}>
                    <div className={classes.header}>
                        <Links />
                        <div className={classes.element_h2}>
                            <h2>Our Coffee</h2>
                        </div>
                    </div>
                </div>
                <div className={classes.page_item}>
                    <div className={classes.page_item_articul}>                         
                        <div className={classes.item_card}>
                            {
                                !this.state.error ?
                                    this.state.coffee ? 
                                    <>
                                    <div className={classes.item_card_image}>
                                        <img src={this.state.coffee[2]['url']} alt="coffee" width="392px" height="355px"/>
                                    </div>
                                    <div className={classes.content_theme}>
                                        <h2>About it</h2>
                                        <div className={classes.img_fluid}>
                                            <img src={coffee} alt="coffee"/>
                                        </div>
                                        <p className={classes.item_country}>Country: <span>{this.state.coffee[2]['country']}</span></p>
                                        <p className={classes.item_description}>Description: <span>{this.state.coffee[2]['description']}</span></p>
                                        <p className={classes.item_price}>Price: <span> {this.state.coffee[2]['price']}</span></p>
                                    </div>
                                    </>
                                    : <Spinner />
                                :   <div className={classes.error}>
                                    <img src={Error} alt="error" width="200px"/>
                                    <p className={classes.error_value}>Во время загруски данных произошла ошибка связи с сервером данных.</p>
                                </div>
                            }
                        </div> 
                    </div>
                </div>
                <Footer />
            </>
        )
    }
}

export default AboutIt;
