import React, {Component} from 'react';
import Video from '../images/Fresh-Paint.mp4';

class Home extends Component {
    render() {
        return (
            <div className="banner">
                <video autoPlay loop muted>
                    <source src={Video} type="video/mp4" />
                </video>
                <h2>BARTART</h2>
            </div>
        );
    }
}

export default Home;  