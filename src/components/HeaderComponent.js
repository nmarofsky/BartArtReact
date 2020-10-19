import React, { Component }  from 'react';
import {  NavItem, Jumbotron } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {

    constructor(props){
        super(props);
        this.state={
          menuOpen:false,
        }
      }
      
      handleMenuClick() {
        this.setState({menuOpen:!this.state.menuOpen});
      }
      
      handleLinkClick() {
        this.setState({menuOpen: false});
      }
      
      render(){
        const styles= 
          {
            container:{
              position: 'absolute',
              top: 0,
              left: 0,
              zIndex: '99',
              opacity: 0.9,
              marginBottom: '.50rem',
              display:'flex',
              alignItems:'center',
              background: '#CEC8FF',
              width: '100%',
              color: 'black',
              fontFamily:'Lobster',
            },
            logo: {
              margin: '0 auto',
              marginBottom: 1,
            },
            body: {
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              marginTop: 0,
              width: '200vw',
              height: '100vh',
              filter: this.state.menuOpen ? 'blur(2px)':null,
              transition: 'filter 0.5s ease',
            },
          }
        const menu = ['Bartwork','Reserve Lesson','About Dan','Contact','Shopping Cart']
        const menuItems = menu.map((val,index)=>{
          return (
            <MenuItem 
              key={index} 
              delay={`${index * 0.1}s`}
              onClick={()=>{this.handleLinkClick();}}>{val}</MenuItem>)
        });
        
        return(
            <React.Fragment >
                <div>
                    <Jumbotron fluid>
                    <div style={styles.container}>
                    <MenuButton open={this.state.menuOpen} onClick={()=>this.handleMenuClick()} color='white' sticky='top'/>
                    <div style={styles.logo}><a href="/home"><img className="navlogo" src="/assets/images/logo_transparent.png" alt="BartArt Logo"/></a></div>
                    </div>
                    </Jumbotron>
                    <Menu open={this.state.menuOpen}>
                        <MenuItem>
                            <NavItem onClick={()=>this.handleMenuClick()}>
                                <NavLink className="text-dark" to="/home" >
                                <i className="fa fa-home fa-lg" /> Home
                                </NavLink>
                            </NavItem>
                        </MenuItem>
                        <MenuItem>
                            <NavItem onClick={()=>this.handleMenuClick()}>
                                <NavLink className="text-dark" to="/directory">
                                    <i className="fa fa-photo fa-lg" /> Bartwork
                                </NavLink>
                            </NavItem>
                        </MenuItem>
                        <MenuItem>
                            <NavItem onClick={()=>this.handleMenuClick()}>
                                <NavLink className="text-dark" to="/about">
                                    <i className="fa fa-info fa-lg" /> About Dan
                                </NavLink>
                            </NavItem>
                        </MenuItem>
                        <MenuItem>
                            <NavItem onClick={()=>this.handleMenuClick()}>
                                <NavLink className="text-dark" to="/reserve">
                                    <i className="fa fa-paint-brush fa-lg" /> Reserve Lesson
                                </NavLink>
                            </NavItem>
                        </MenuItem>
                        <MenuItem>
                            <NavItem onClick={()=>this.handleMenuClick()}>
                                <NavLink className="text-dark" to="/contactus">
                                    <i className="fa fa-address-card fa-lg" /> Contact
                                </NavLink>
                            </NavItem>
                        </MenuItem>
                        <MenuItem>
                            <NavItem onClick={()=>this.handleMenuClick()}>
                                <NavLink className="text-dark" to="#">
                                    <i className="fa fa-shopping-cart fa-lg" /> Shopping Cart (Coming Soon!)
                                </NavLink>
                            </NavItem>
                        </MenuItem>
                    </Menu>
                </div>
            </React.Fragment>
        )
      }
    }
    
    /* MenuItem.jsx*/
    class MenuItem extends React.Component{
      constructor(props){
        super(props);
        this.state = {
          hover:false,
        }
      }
      
      handleHover(){
        this.setState({hover:!this.state.hover});
      }
      
      render(){
        const styles={
          container: {
            opacity: 0,
            animation: '1s appear forwards',
            animationDelay:this.props.delay,
          },
          menuItem:{
            fontFamily:`'Open Sans', sans-serif`,
            fontSize: '1.2rem',
            padding: '1rem 0',
            margin: '0 5%',
            marginTop: 55,
            cursor: 'pointer',
            color: this.state.hover? 'gray':'#fafafa',
            transition: 'color 0.2s ease-in-out',
            animation: '0.5s slideIn forwards',
            animationDelay:this.props.delay,
    
          },
          line: {
            width: '90%',
            height: '1px',
            background: 'gray',
            margin: '0 auto',
            animation: '0.5s shrink forwards',
            animationDelay:this.props.delay,
            
          }
        }
        return(
          <div style={styles.container}>
            <div 
              style={styles.menuItem} 
              onMouseEnter={()=>{this.handleHover();}} 
              onMouseLeave={()=>{this.handleHover();}}
              onClick={this.props.onClick}
            >
              {this.props.children}  
            </div>
          <div style={styles.line}/>
        </div>  
        )
      }
    }
    
    /* Menu.jsx */
    class Menu extends React.Component {
      constructor(props){
        super(props);
        this.state={
          open: this.props.open? this.props.open:false,
        }
      }
        
      componentWillReceiveProps(nextProps){
        if(nextProps.open !== this.state.open){
          this.setState({open:nextProps.open});
        }
      }
      
      render(){
        const styles={
          container: {
            position: 'absolute',
            top: 0,
            left: 0,
            height: this.state.open? '100%': 0,
            width: '100vw',
            display: 'flex',
            flexDirection: 'column',
            background: '#CEC8FF',
            opacity: 0.95,
            transition: 'height 0.3s ease',
            zIndex: 2,
          },
          menuList: {
            paddingTop: '5rem',
          }
        }
        return(
          <div style={styles.container}>
            {
              this.state.open?
                <div style={styles.menuList}>
                  {this.props.children}
                </div>:null
            }
          </div>
        )
      }
    }
    
    /* MenuButton.jsx */
    class MenuButton extends React.Component {
      constructor(props){
        super(props);
        this.state={
          open: this.props.open? this.props.open:false,
          color: this.props.color? this.props.color:'black',
        }
      }
    
      componentWillReceiveProps(nextProps){
        if(nextProps.open !== this.state.open){
          this.setState({open:nextProps.open});
        }
      }
      
      handleClick(){
      this.setState({open:!this.state.open});
      }
      
      render(){
        const styles = {
          container: {
            height: '32px',
            width: '32px',
            display:'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer',
            marginLeft: 15,
            padding: '4px',
            color: 'black'
          },
          line: {
            height: '2px',
            width: '20px',
            background: 'black',
            transition: 'all 0.2s ease',
          },
          lineTop: {
            transform: this.state.open ? 'rotate(45deg)':'none',
            transformOrigin: 'top left',
            marginBottom: '5px',
          },
          lineMiddle: {
            opacity: this.state.open ? 0: 1,
            transform: this.state.open ? 'translateX(-16px)':'none',
          },
          lineBottom: {
            transform: this.state.open ? 'translateX(-1px) rotate(-45deg)':'none',
            transformOrigin: 'top left',
            marginTop: '5px',
          },       
        }
        return(
          <div style={styles.container} 
            onClick={this.props.onClick ? this.props.onClick: 
              ()=> {this.handleClick();}}>
            <div style={{...styles.line,...styles.lineTop}}/>
            <div style={{...styles.line,...styles.lineMiddle}}/>
            <div style={{...styles.line,...styles.lineBottom}}/>
          </div>
        )
      }
    }

export default Header;