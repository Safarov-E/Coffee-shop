import React, {Component} from 'react';
import classes from './SearchOurCoffe.module.css';
import {Link} from 'react-router-dom';
import Spinner from '../../spinner/spinner';

class SearchOurCoffe extends Component {
    state = {
        coffe: null,
        query: '',
        country: '',
        click: false
    }
    componentWillMount(){
        fetch('http://localhost:3001/coffee')
            .then((response) => response.json())
            .then((jsonFile) => {this.setState({coffe: jsonFile})})
    }
    searchText = (event) => {
        this.setState({
            query: event.target.value,
            click: false
        })

    }
    choiceCoffee = (event) => {
        this.setState({
            country: event.target.value,
            click: true
        })
    }
    render() {
        let newCoffe, countruCoffe
        if(this.state.coffe) {
            newCoffe = this.state.coffe.filter((item, index) => {
                return item.name.toLowerCase().indexOf(this.state.query) !== -1;
            })
            countruCoffe = this.state.coffe.filter((item, index) => {
                return item.country.indexOf(this.state.country) !== -1;
            })
        }
        return (
            <div className={classes.product_summary}>
                <div className={classes.header_search}>
                    <div className={classes.header_container}>
                        <div className={classes.search_box}>
                            <p>Lookiing for</p>
                            <input type="text" onKeyUp={this.searchText} placeholder="start typing here..."/>
                        </div>
                        <div className={classes.button_wrapper}>
                            <p>Or filter</p>
                            <button onClick={this.choiceCoffee} value="Brazil">Brazil</button>
                            <button onClick={this.choiceCoffee} value="Kenya">Kenya</button>
                            <button onClick={this.choiceCoffee} value="Columbia">Columbia</button>
                        </div>
                    </div>
                    <div className={classes.product_item}>
                            {
                                this.state.coffe ?
                                    this.state.click ? 
                                    null
                                    : newCoffe.map((item, index) => {
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
                            }
                            {
                                this.state.coffe ?
                                    this.state.click ?
                                    countruCoffe.map((item, index) => {
                                        return (
                                            <div className={classes.product_actions} key={index}>
                                                <img src={item.url} alt="coffe" width="167px" height="115px"/>
                                                <Link to={'/our-coffee/' + index} className={classes.product_actions_h3}>{item.name}</Link>
                                                <p>{item.country}</p>
                                                <p className={classes.price}>{item.price}</p>
                                            </div>
                                        )
                                    })
                                    : null
                                : null
                            }
                    </div>
                </div>
            </div>
        )
    }
}

export default SearchOurCoffe;