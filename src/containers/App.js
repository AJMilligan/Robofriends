import React, { Component } from 'react';
import CardList from '../component/CardList';
import SearchBox from '../component/SearchBox';
import Scroll from '../component/Scroll'
import './app.css'

class App extends Component {
	constructor() {
		super()
		this.state = {
 			robots: [],
 			searchField: ''
	}
}

componentDidMount() {
	fetch('https://jsonplaceholder.typicode.com/users')
		.then(response=> response.json())
		.then(users => this.setState({ robots: users}));
}


onSearchChange = (event) => {
	this.setState({ searchField: event.target.value })
}

	render() {

		const filteredRobots = this.state.robots.filter(robots =>{
			return robots.name.toLowerCase().includes(this.state.searchField.toLowerCase())
		})
		return(
			<div className='tc'>
				<h1 className='f1'>RoboFriends</h1>
				<SearchBox searchChange={this.onSearchChange}/>
				<Scroll>
					<CardList robots={filteredRobots} />
				</Scroll>
			</div>

	);
}

}
export default App; 