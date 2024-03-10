import React from React;

class ErrorBoundry extends Component {
	consturctor(props) {
		super(props);
		this.state = {
			hasError: false
		}
	}

	render() {
		if (this.state.hasError) {
			return <h1> Oh No! something went wrong </h1>
		}
		return this.props.children
	}

}