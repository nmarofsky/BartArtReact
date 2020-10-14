import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {
    render() {
        return (
            <footer className="site-footer">
                <div className="container">
                    <div className="row">             
                        <div className="col-4 col-sm-2 offset-1">
                            <h5>Links</h5>
                            <ul className="list-unstyled">
                                <li><Link to='/home'>Home</Link></li>
                                <li><Link to='/directory'>Bartwork</Link></li>
                                <li><Link to='/reserve'>Reserve Lesson</Link></li>
                                <li><Link to='/about'>About Dan</Link></li>
                                <li><Link to='/contactus'>Contact</Link></li>
                                <li><Link to='#'>Shopping Cart</Link></li>
                            </ul>
                        </div>
                        <div className="col-6 col-sm-3 text-center">
                            <h5>Social</h5>
                            <a className="btn btn-social-icon btn-instagram" href="http://instagram.com/"><i className="fa fa-instagram" /></a>{' '}
                            <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/"><i className="fa fa-facebook" /></a>{' '}
                            <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter" /></a>{' '}
                            <a className="btn btn-social-icon btn-google" href="http://youtube.com/"><i className="fa fa-youtube" /></a> 
                        </div>
                        <div className="col-sm-4 text-center">
                            <a role="button" className="btn btn-link" href="tel:+7174518742"><i className="fa fa-phone" /> (717) 451-8742</a><br />
                            <a role="button" className="btn btn-link" href="mailto:bartart@gmail.com"><i className="fa fa-envelope-o" /> bartart@gmail.com</a>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;