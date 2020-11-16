import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {
    render() {
        return (
            <footer className="site-footer">
                <div className="container">
                    <div className="row">             
                        <div className="col-3 d-none d-lg-block">
                            <a role="button" className="btn btn-link" href="tel:+7174518742"><i className="fa fa-phone" /> (717) 451-8742</a><br />
                        </div>
                        <div className="col text-center">
                            <a className="btn btn-social-icon btn-instagram" href="https://www.instagram.com/theotherbart/"><i className="fa fa-instagram" /></a>{' '}
                            <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/"><i className="fa fa-facebook" /></a>{' '}
                            <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter" /></a>{' '}
                            <a className="btn btn-social-icon btn-google" href="http://youtube.com/"><i className="fa fa-youtube" /></a> 
                        </div>
                        <div className="col-3 d-none d-lg-block">
                            <a role="button" className="btn btn-link" href="mailto:bartart@gmail.com"><i className="fa fa-envelope-o" /> bartart@gmail.com</a>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;