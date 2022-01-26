import React, { Component } from 'react';
import ItemCard from './itemCard';

class MainView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    state = {};

    componentDidMount() {
        fetch("https://pr-movies.herokuapp.com/api/movies")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result
                    });
                },

                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render(){
        const { items } = this.state;

        if(!items.length) {
            return (<p>No entries.</p>)
        }

        return <div style={{display: "flex",
                            zIndex: -1,
                            width: "100%",
                            height: "100%",
                            position: "absolute",
                            backgroundImage: "linear-gradient(to right bottom, #FF4444, orange, #FF4444)",
                            position: "fixed",
                            }}>

                        <ItemCard items={items}/>
        </div>
    }
}

export default MainView;