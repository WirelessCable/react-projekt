import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class SearchBar extends Component {
    state = {};

    render(){
        return <div style={{flexDirection: "column",
                            flexWrap: "nowrap"}}>
            <form>
                <input style={{padding: 14,
                                width: 500,
                                borderColor: "#ffe95a",
                                borderRadius: 12,
                                backgroundColor: "#ffb638",
                                color: "black"}}
                       type="text"
                       placeholder="Search..."/>
                <button class="btn btn-danger"
                        style={{padding: 15,
                                marginLeft: 4,
                                width: 60,
                                color: "#ffe95a",
                                backgroundColor: "orange",
                                borderColor: "#ffe95a",
                                borderRadius: 12}}>
                Go!</button>
            </form>
        </div>
    }
}

export default SearchBar;