import React, {Component} from 'react';
import classes from './SearchOurCoffe.module.css';

class SearchOurCoffe extends Component {
    state = {
        coffe: null,
        query: ''
    }
    componentWillMount(){
        fetch('http://localhost:3001/coffee')
            .then((response) => response.json())
            .then((jsonFile) => {this.setState({coffe: jsonFile})})
    }
    searchText = (event) => {
        this.setState({
            query: event.target.value
        })
    }
    render() {
        if(this.state.coffe === null) {
            return <p>Loading...</p>
        }
        let newCoffe = this.state.coffe.filter((item, index) => {
            return item.name.toLowerCase().indexOf(this.state.query) !== -1;
        })
        return (
            <div className={classes.product_summary}>
                <div className={classes.header_search}>
                    <div className={classes.header_container}>
                        <div className={classes.search_box}>
                            <p>Lookiing for</p>
                            <input type="text" onKeyUp={this.searchText}/>
                        </div>
                        <div className={classes.button_wrapper}>
                            <p>Or filter</p>
                            <button>Brazil</button>
                            <button>Kenya</button>
                            <button>Columbia</button>
                        </div>
                    </div>
                    <div className={classes.product_item}>
                            {
                                newCoffe.map((item, index) => {
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

export default SearchOurCoffe;