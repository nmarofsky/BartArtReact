import React from 'react';
import ReactRoundedImage from "react-rounded-image";
import MyPhoto from '../images/DanBart.PNG';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, Media } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';
import { Fade, Stagger } from 'react-animation-components';
import Example from './CarouselComponent';

function About(props) {
console.log(props)
    
return (
        <div className="container">
            <div className="row mt-5">
                <div className="col mt-5">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>About Us</BreadcrumbItem>
                    </Breadcrumb>
                    <h2>About Dan</h2>
                    <hr />
                </div>
            </div>
            <div className="row row-content">
                <div className="col-sm-7">
                    <h3>The Great Repair</h3>
                    <p>
                        Bartasavich’s multiyear project is focused on inspirations from found objects. He sees new life for items found on beach cleanups or bound for the trash.<br /><br /><br />
                        Kintsugi is the Japanese art of putting broken pottery back together. Bartasavich uses this idea, along with his love of materials, to embrace their flaws and imperfections. He believes that with this metaphor, a person can create an even stronger, more beautiful piece of art.<br /><br /><br />
                        Click the link to learn more!<br /><br /> 
                        <a href="https://www.capegazette.com/article/dan-bartsavich-art-reception-set-oct-12-camp-rehoboth/189286">https://www.capegazette.com/article/dan-bartsavich-art-reception-set-oct-12-camp-rehoboth/189286</a>
                    </p>
                </div>
                <div className="col-sm-5">
                    <Card>
                        <CardHeader className="cardheader text-white"><h2>Dan Bartasavich</h2></CardHeader>
                        <CardBody>
                        <div style={{ display: "flex", justifyContent: "center",alignItems: "center" }}>
                            <ReactRoundedImage
                            image={MyPhoto}
                            roundedColor="#FFA81E"
                            imageWidth="250"
                            imageHeight="250"
                            roundedSize="15"
                            hoverColor="#824c96"
                            />
                        </div>
                        </CardBody>
                    </Card>
                </div>
                <div className="col">
                    <Card className="bg-light mt-3">
                        <CardBody>
                            <blockquote className="blockquote">
                                <p className="mb-0">There are important life lessons to be learned from Great Repair. Sometimes in the process of repairing things that have broken, the artist creates something more powerful and exquisite. It is the same for people, who may be able to reframe hardships and embrace imperfections, for these are the things that make a person unique, more beautiful and resilient.</p>
                                <footer className="blockquote-footer">Dan Bartasavich{' '}</footer>
                            </blockquote>
                        </CardBody>
                    </Card>
                </div>
            </div>
            <div className="row row-content">
                <div className="col">
                    <Example style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}/>
                </div>
            </div>
            <div className="row row-content">
                <div className="col-12">
                    <h3>Community Partners</h3>
                </div>
                <PartnerList partners={props.partners} />
            </div>
        </div>
    );
}

function RenderPartner ({partner}) {
    if(partner) {
        return(<React.Fragment>
                <Media object src={baseUrl + partner.image} alt={partner.name} width="150"/>
                <Media body ClassName="ml-5 mb-4"><Media heading>{partner.name}</Media>{partner.description}</Media>
                </React.Fragment>)
    }
    return <div />
}


function PartnerList(props,) {
    
    const partners = props.partners.partners.map(partner => {
        return (
            <Fade>
                <Media tag="li" key={partner.id}><RenderPartner partner={partner} /></Media>
            </Fade>
        );
    });

    if (props.partners.isLoading) {
        return (
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>
        );
    }
    if (props.partners.errMess) {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h4>{props.partners.errMess}</h4>
                    </div>
                </div>
            </div>
        );
    }
    if (props.partners) {
        return (
            <div className="col mt-4">    
                    <Media list>
                        <Stagger in >
                            {partners}
                        </Stagger>
                    </Media>
                </div>
        )
    }
}

export default About;