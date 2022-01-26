import React, { Component } from 'react';
import MovieRating from './movieRating';
import Image from '../resources/banner.jpg';

class MovieDetails extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            details: []
        };
    }

    state = {};

    componentDidMount() {
        const detail = window.location.pathname;
        fetch("https://pr-movies.herokuapp.com/api/movies/" + detail.substring(9))
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        details: result
                    });
                    console.log(result);
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
        return <div style={{display: "flex",
                            zIndex: -1,
                            width: "100%",
                            height: "100%",
                            position: "absolute",
                            backgroundImage: "linear-gradient(to right bottom, #FF4444, orange, #FF4444)",
                            position: "fixed",
                            }}>
            <div style={{backgroundColor: "rgba(0, 0, 0, 0.4)",
                            display: "flex",
                            zIndex: -1,
                            width: "100%",
                            height: "100%",
                            position: "absolute",
                            padding: 70,
                            paddingTop: 110,
                            paddingBottom: 110,
                            flexWrap: "wrap",
                            flexDirection: "column",
                            position: "fixed",
                            overflow: "scroll",
                            alignItems: "center",
                            rowGap: 50,
                            }}>

                    <div class="card" style={{display: "flex",
                                            marginTop: 15,
                                            width: "85%",
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
                        <img src={this.state.details.image} style={{width: "45%", borderRadius: 6, marginBottom: 4}}/>
                        <MovieRating />
                    </div>
                    <h5 class="card-title" style={{color: "#ffe95a"}}>{this.state.details.title}</h5>
                    <p class="card-text" style={{color: "#ffe95a"}}>
                    {this.state.details.content}
                    </p>
                </div>
            </div>
        </div>
    }
}

export default MovieDetails;