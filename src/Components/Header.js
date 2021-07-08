import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
	constructor(props){
		super(props);
		this.state={
			page:'',
			linkName:''
		};
		this.handleClick=this.handleClick.bind(this);
	}

	componentDidMount(){
		let page=this.props.path.slice(this.props.path.lastIndexOf('/')+1);
		if(page==='giphy'){
			this.setState({page:'giphy',linkName:'reddit'});
		}else{
			this.setState({page:'reddit',linkName:'giphy'});
		}
	}
	
	handleClick(e){
		if(this.state.page==='giphy'){
			this.setState({page:'reddit',linkName:'giphy'});
		}else{
			this.setState({page:'giphy',linkName:'reddit'});
		}
	}

	render() {
		let page=this.state.page;
		let linkName=this.state.linkName;
		return (
		  <header className="App-header">
			  <nav>
				  <Link to={`/${linkName}`} onClick={this.handleClick}>
					  {linkName.toUpperCase()} <i className="fa fa-arrow-right" aria-hidden="true"></i>
				  </Link>
			  </nav>
			  <i className={(page==='giphy' ? 'fa fa-film fa-6' : 'fa fa-reddit-alien fa-6')} aria-hidden="true"></i>
			  <h1 className="App-title">Hello, {page.toUpperCase()}!</h1>
		  </header>
		);
	}
}

export default Header;