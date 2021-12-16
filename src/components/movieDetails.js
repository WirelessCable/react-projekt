import React, { Component } from 'react';
import MovieRating from './movieRating';
import Image from '../resources/banner.jpg';

class NotFound extends Component {
    state = {};

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
                        <img src={Image} style={{width: "45%", borderRadius: 6, marginBottom: 4}}/>
                        <MovieRating />
                    </div>
                    <h5 class="card-title" style={{color: "#ffe95a"}}>Spider-Man - No Way Home</h5>
                    <p class="card-text" style={{color: "#ffe95a"}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet elit eu libero ultricies fringilla. Nunc pulvinar posuere augue, ac tincidunt ante aliquam id. Aenean accumsan venenatis orci, nec tincidunt justo interdum ac. Donec ante magna, elementum sed condimentum non, suscipit vel nisi. Suspendisse vel mauris purus. Vestibulum varius lectus eget risus maximus, in vulputate ipsum malesuada. Cras venenatis laoreet interdum. Praesent nec nisi a risus convallis fermentum. Fusce sollicitudin mauris quam, nec sagittis nisl accumsan sit amet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nunc id leo ut eros tempor auctor id eget odio.

                    Sed viverra dolor sed velit congue, eu egestas ipsum euismod. Praesent elementum, orci quis bibendum faucibus, lorem nulla cursus lectus, eget condimentum nulla turpis quis turpis. Duis aliquam facilisis lacus. Sed in justo aliquam, efficitur lorem in, pellentesque arcu. Cras condimentum massa turpis, vel vestibulum libero imperdiet ac. Pellentesque vitae varius tellus. Maecenas et arcu vitae sem varius semper id id risus. Nunc convallis mattis tellus vitae pharetra. Aenean imperdiet id eros at rutrum. Donec ut nisl eget enim egestas ornare.

                    Pellentesque at eros in orci efficitur laoreet a ut justo. Curabitur condimentum, nisl id pharetra mollis, elit sapien aliquet nisi, et pharetra odio massa vel mauris. Maecenas dictum enim sit amet nulla molestie, sed eleifend felis consectetur. Suspendisse non pulvinar urna, et vulputate erat. Quisque rutrum sit amet sem interdum elementum. Mauris eleifend, felis et imperdiet commodo, nibh leo lobortis tortor, id porttitor nibh enim eget risus. Etiam in ex sagittis, interdum nibh vel, posuere dui. Integer vel varius diam, in convallis nisl. Integer commodo nulla ut nulla imperdiet, sit amet bibendum dui mattis. Quisque pretium velit nulla, in porttitor felis fringilla et. Integer pharetra pulvinar sapien, sed congue diam feugiat eu. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus consectetur diam lorem, ut consectetur elit molestie nec. Sed faucibus laoreet dolor, et pellentesque massa lacinia eget.

                    Mauris arcu leo, iaculis non dolor a, dignissim volutpat velit. Aliquam aliquam, urna in ultrices lacinia, sem eros egestas eros, sed ornare tortor nisi quis libero. Integer auctor sagittis porttitor. Etiam viverra condimentum elit. Aenean tempus odio volutpat elit placerat, eu rhoncus ligula mattis. Curabitur eu mollis justo. Nulla sodales ante ac quam maximus cursus non ut magna. Duis finibus faucibus purus vel fermentum. Ut suscipit bibendum ultricies. Quisque in ultrices lacus. In placerat vehicula lorem, eu aliquet turpis tristique non.

                    Phasellus id purus ullamcorper, egestas arcu at, posuere sem. Aenean nec justo sit amet felis semper malesuada vitae eget orci. Vivamus vel interdum sem, in gravida erat. Aenean id gravida metus. Vestibulum eleifend purus et tellus volutpat, quis imperdiet enim scelerisque. Nulla mi dui, placerat fermentum turpis at, bibendum viverra nunc. Maecenas eleifend diam ut ligula tincidunt maximus. Nulla facilisi. Vestibulum sit amet eleifend enim, eget consequat nisl. Nam dapibus vulputate massa a congue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce suscipit justo nec massa tempor, egestas cursus tellus malesuada. Mauris consectetur libero et nisi luctus ornare eu id velit.
                    </p>
                </div>
            </div>
        </div>
    }
}

export default NotFound;