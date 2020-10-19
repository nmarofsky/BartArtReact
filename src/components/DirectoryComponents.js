import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';
import { FadeTransform } from 'react-animation-components';


function RenderDirectoryItem({campsite}) {
    return (
        <FadeTransform
            in
            transformProps={{
                exitTransform: 'scale(0.5) translateY(50%)'
            }}>
        <div className="Container mt-5">   
            <div className="Card">
                <Link to={`/directory/${campsite.id}`}>
                    <div className="imgBx">
                        <img src={baseUrl + campsite.image} alt={campsite.name} />
                    </div>
                    <div className="content">
                        <h2>{campsite.name}</h2>
                        <p>{campsite.description}</p>
                    </div>
                </Link>
            </div>
        </div> 
        </FadeTransform>
    )
}

function Directory(props) {
    
        const directory = props.campsites.campsites.map(campsite => {
            return (
                <div key={campsite.id} className="col-xs-12 col-md-6">
                    <RenderDirectoryItem campsite={campsite}/> 
                </div>
            );
        });

        if (props.campsites.isLoading) {
            return (
                <div className="container mt-5">
                    <div className="row mt-5">            
                        <Loading />
                    </div>
                </div>
            );
        }
        if (props.campsites.errMess) {
            return (
                <div className="container mt-5">
                    <div className="row mt-5"> 
                        <div className="col mt-5">
                            <h4>{props.campsites.errMess}</h4>
                        </div>
                    </div>
                </div>
            );
        } 

        return (
            <div className="container">
                <div className="row mt-5">
                    <div className="col mt-5">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                            <BreadcrumbItem active>Directory</BreadcrumbItem>
                        </Breadcrumb>
                        <h2>Directory</h2>
                        <hr />
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        {directory}
                    </div>
                </div>
            </div>
        );
    }

export default Directory;