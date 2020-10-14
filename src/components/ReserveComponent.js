import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem, Col, Row, Modal, ModalHeader, ModalBody, Label } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, Form } from 'react-redux-form';
import 'react-datepicker/dist/react-datepicker.css';
import { FadeTransform } from 'react-animation-components';

class Reservation extends Component {
    
    constructor(props) {
      super(props);
      
      this.state = {
        legalAge: true,
        numberOfGuests: 2,
        isModalOpen: false,
        isModal1Open: false,
        isModal2Open: false,
      };
      this.handleInputChange = this.handleInputChange.bind(this);
      this.toggleModal = this.toggleModal.bind(this);
      this.toggleModal1 = this.toggleModal1.bind(this);
      this.toggleModal2 = this.toggleModal2.bind(this);
    }

    toggleModal() {
      this.setState({
          isModalOpen: !this.state.isModalOpen
      });
    }

    toggleModal1() {
      this.setState({
          isModal1Open: !this.state.isModal1Open
      });
    }

    toggleModal2() {
      this.setState({
          isModal2Open: !this.state.isModal2Open
      });
    }
  
    handleInputChange(event) {
      const target = event.target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      const name = target.name;
  
      this.setState({
        [name]: value
      });
    }


  
    render() {
      return (
        <div className="container">
          <div className="row mt-5 ">
              <div className="col mt-5">
                  <Breadcrumb>
                      <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                      <BreadcrumbItem active>Reserve Lesson</BreadcrumbItem>
                  </Breadcrumb>
                  <h2>Reserve Lesson or Party</h2>
                  <hr />
              </div>
          </div>
          
          <FadeTransform
            in
            transformProps={{
                exitTransform: 'scale(0.2) translateY(50%)'
            }}>
            <section>
              <div className="container-fluid">
                <div className="cointainer">
                  <div className="row">
                    <div className="col-md-4">
                      <div className="price-table">
                        <div className="price-head">
                          <h4>Virtual Paint Party</h4>
                          <h2>$55</h2>
                        </div>
                        <div className="price-content">
                          <ul>
                            <li>11” x 14” Canvas</li>
                            <li>Stemmed Wine Glass</li>
                            <li>16” x 20” Canvas</li>
                          </ul>
                        </div>
                        <div className="price-button" onClick={this.toggleModal1}>
                          <a href="#">Buy Plan</a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="price-table">
                        <div className="price-head">
                          <h4>BYOB Group Paint</h4>
                          <h2>$25 - $35</h2>
                        </div>
                        <div className="price-content">
                          <ul>
                            <li>90 Minutes</li>
                            <li>10 person max</li>
                            <li>21+</li>
                          </ul>
                        </div>
                        <div className="price-button" onClick={this.toggleModal}>
                          <a href="#">Buy Plan</a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="price-table">
                        <div className="price-head">
                          <h4>1 on 1 Lesson</h4>
                          <h2>$100</h2>
                        </div>
                        <div className="price-content">
                          <ul>
                            <li>60 minutes</li>
                            <li>Virtual or in-person</li>
                            <li>Technique of your choice</li>
                          </ul>
                        </div>
                        <div className="price-button" onClick={this.toggleModal2}>
                          <a href="#">Buy Plan</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </FadeTransform>
          <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
              <ModalHeader toggle={this.toggleModal} className="modalHeader"><h2>Reserve BYOB Group Paint</h2></ModalHeader>
              <ModalBody>
                <Form model="reserveForm" onSubmit={values => this.handleSubmit(values)}>
                  <div className="container">
                    <Row className="form-group">
                      <Label check>
                        Are you of legal drinking age?:
                        <input
                          name="legalAge"
                          type="checkbox"
                          checked={this.state.legalAge}
                          onChange={this.handleInputChange} />
                      </Label>
                    </Row>
                    <br />
                    <Row className="form-group">
                      <label>
                        Number of guests attending: 
                        <input
                          name="numberOfGuests"
                          type="number"
                          value={this.state.numberOfGuests}
                          onChange={this.handleInputChange} />
                      </label>
                    </Row>
                  </div>
                  <hr />
                  <br />
                  <Row className="form-group">
                    <Col md={{size: 10, offset: 2}}>
                        <div className="submit-button">
                          <a href="#">Submit Request</a>
                        </div>
                    </Col>
                  </Row>
                </Form>
              </ModalBody>
          </Modal>
          <Modal isOpen={this.state.isModal1Open} toggle={this.toggleModal1}>
            <ModalHeader toggle={this.toggleModal1} className="modalHeader"><h2>Reserve Virtual Paint Party</h2></ModalHeader>
              <ModalBody>
                <Form model="reserveForm" onSubmit={values => this.handleSubmit(values)}>
                <div className="container">
                    <Row className="form-group">
                      <Label check>
                        Choose your object to paint on:
                        <select>
                          <option value="grapefruit">11” x 14” Canvas</option>
                          <option value="lime">Stemmed Wine Glass</option>
                          <option value="coconut">16” x 20” Canvas</option>
                        </select>
                      </Label>
                    </Row>
                    <br />
                    <Row className="form-group">
                      <label>
                        Amount of supplies needed: 
                        <input
                          name="numberOfGuests"
                          type="number"
                          value={this.state.numberOfGuests}
                          onChange={this.handleInputChange} />
                      </label>
                    </Row>
                  </div>
                  <hr />
                  <br />
                  <Row className="form-group">
                    <Col md={{size: 10, offset: 2}}>
                        <div className="submit-button">
                          <a href="#">Submit Request</a>
                        </div>
                    </Col>
                  </Row>
                </Form>
              </ModalBody>
            </Modal>
            <Modal isOpen={this.state.isModal2Open} toggle={this.toggleModal2}>
            <ModalHeader toggle={this.toggleModal2} className="modalHeader">
              <h2>Reserve 1 on 1 Lesson</h2></ModalHeader>
              <ModalBody>
                <Form model="reserveForm" onSubmit={values => this.handleSubmit(values)}>
                  <div className="container">
                    <Row className="form-group">
                      <Label htmlFor="name" md={2}>Name:</Label>
                        <Col md={8}>
                            <Control.text model=".name" id="name" name="name"
                                placeholder="Full Name"
                                className="form-control"
                            />
                        </Col>
                    </Row>
                    <Row className="form-group">
                    <Label htmlFor="phoneNum" md={2}>Phone:</Label>
                      <Col md={8}>
                          <Control.text model=".phoneNum" id="phoneNum" name="phoneNum"
                              placeholder="Phone number"
                              className="form-control"
                          />
                      </Col>
                    </Row>
                    <Row className="form-group">
                      <Label htmlFor="email" md={2}>Email</Label>
                        <Col md={8}>
                            <Control.text model=".email" id="email" name="email"
                                placeholder="Email Address"
                                className="form-control"
                            />
                        </Col>
                    </Row>
                  </div>
                  <hr />
                  <br />
                  <Row className="form-group">
                    <Col md={{size: 10, offset: 2}}>
                        <div className="submit-button">
                          <a href="#">Submit Request</a>
                        </div>
                    </Col>
                  </Row>
                </Form>
              </ModalBody>
            </Modal>
        </div>
        
      );
    }
  }

  export default Reservation;