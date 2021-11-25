import React, { Component } from 'react';
import Star from '../resources/star.png';

class MovieRating extends Component {
    state = {};

    render(){
        return <div style={{display: "flex", alignItems: "center", marginLeft: "15%",
                            }}>
                            <img src={Star} style={{width: 50}} />
                            <p style={{fontSize: 30, marginLeft: 25, marginTop: 25, color: "#ffe95a"}}><span id="rating">0</span>/10</p>
        </div>
    }
}

export default MovieRating;