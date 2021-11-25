import React, { Component } from 'react';
import Image from '../resources/banner.jpg';
import MovieRating from './movieRating';

class ItemCard extends Component {
    state = {};

    render(){
        return <div class="card" style={{display: "flex",
                                            width: "30%",
                                            height: "auto",
                                            zIndex: 1,
                                            borderColor: "orange",
                                            borderStyle: "ridge",
                                            borderWidth: 1,
                                            backgroundColor: "rgba(0, 0, 0, 0.4)",
                                            borderRadius: 12,
                                            padding: 6,
                                            float: "left"
                                        }}>
                    <div style={{display: "flex", flexDirection: "row"}}>
                        <img src={Image} style={{width: "45%", borderRadius: 6, marginBottom: 4}}/>
                        <MovieRating />
                    </div>
                    <h5 class="card-title" style={{color: "#ffe95a"}}>Spider-Man - No Way Home</h5>
                    <p class="card-text" style={{color: "#ffe95a"}}>When the entire world finds out the identity of Spider-Man, Peter Parker decides to ask Doctor Strange for help.</p>
                    <a href="#" class="btn btn-primary" style={{color: "#fffb8c",
                                                                backgroundColor: "orange",
                                                                borderColor: "orange"}}>Read more...</a>
        </div>
    }
}

export default ItemCard;